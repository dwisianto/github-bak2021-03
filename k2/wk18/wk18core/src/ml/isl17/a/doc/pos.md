# POS Tutorial


 We will start with a very simple example - part-of-speech tagging. 

We will work under the usual markovian assumption, so the POS tags will be the hidden states. We will have features based on transistion probabilities, emission probabilities and the initial probabilities for each state.

  We will define our loss to be the hamming distance between the predicted POS tags for the sentence and the gold POS tag sequence for the sentence. Note that this loss decomposes over the structure, so we can use the same inference solver to solve loss-augmented inference and the MAP inference problem.

  For the case of POS Tagging, the components that we need to implement are,
  1. The sentence (this will be the $\x$).
  2. The POS tags for the sentence (this will be the $\y$).
  3. Our features will encode the transistion probabilities, emission probabilities and the initial state probabilities.
  4. An inference solver. We will use the Viterbi Inference method. 
* Sentence
For POS Tagging , sentence represents the input structure. Each token in the sentence will be part of the structure. 
````
public class Sentence implements IInstance {
    public final int[] tokens;
}
````
For each token in the sentence, we just store the id of the token maintained in the lexicon.
Note that all input structures should implement the =IInstance= interface.

* POS Tag
The POS tag sequence represents the output structure. 
````
public class POSTag implements IStructure {
    public final int[] tags;
    public POSTag(int[] tags){
        this.tags = tags;
    }
}
````
Again, we just store the ids, as maintained by the lexicon. Note that all output structures should implement =IStructure= interface.
* Features
   We are going to index all the features into the same feature vector, offseted by the maximum size of each feature type (template). 

   For example, suppose the maximum number of possible type A features are 100, maximum number of possible type B features are 200, and maximum number of possible type C features are 250. Then index [0,100] will hold the type A features, [101,300] will hold the type B features and [301,550] will hold type C features.

````
public IFeatureVector getFeatureVector(IInstance x, IStructure y) {
    FeatureVectorBuffer fv = new FeatureVectorBuffer();
    Sentence ins = (Sentence) x;
    int[] tags = ((POSTag) y).tags;

    // add emission features
    for (int i = 0; i < ins.tokens.length; i++)
        fv.addFeature(ins.tokens[i] +  lm.getNumOfFeature() * tags[i], 1.0f);

    // add prior features 
    fv.addFeature(lm.getNumOfFeature() * lm.getNumOfLabels() + tags[0], 1.0f);

    // add transition features
    int priorEmissionOffset = lm.getNumOfFeature() * lm.getNumOfLabels() + lm.getNumOfLabels();
    // calculate transition features
    for (int i = 1; i < ins.tokens.length; i++)
        fv.addFeature(priorEmissionOffset + tags[i - 1] * lm.getNumOfLabels() + tags[i], 1.0f);

    return fv.toFeatureVector(); 
}
````
* Parameters
   We will use a Structured Perceptron for learning the model, so we need to specify relevant parameters.
 The parameters can be specified in a config file, which can then load into a =SLParameters= object. You can find the config file in the package, under the =config/= directory. We also need to set the total numbers of features that we are going to see during training,
#+BEGIN_SRC
SLParameters para = new SLParameters();
para.loadConfigFile(configFilePath);
para.TOTAL_NUMBER_FEATURE = model.lm.getNumOfFeature()*model.lm.getNumOfLabels()+model.lm.getNumOfLabels()+model.lm.getNumOfLabels()*model.lm.getNumOfLabels();
#+END_SRC

* Reading the Training Data
We will assume the training data is in the following format,
#+BEGIN_SRC
I ate an apple .
PRP VBD DT NN .
The quick brown fox jumped over the lazy dog .
DT JJ JJ NN VBD IN DT JJ NN .
#+END_SRC
First the tokens of the sentence are listed, followed by the POS tags for each token.

As we read the data, we will put the words into the lexicon. 
#+BEGIN_SRC
for (int j = 0; j < words.length; j++) {
    // this will be off at test time, so new words wont be added to the lexicon
    if (lm.isAllowNewFeatures()) {
    lm.addFeature("w:" + words[j]);
}
if (lm.containFeature("w:" + words[j]))
    wordIds[j] = lm.getFeatureId("w:" + words[j]);
else
    wordIds[j] = lm.getFeatureId("W:unknownword"); 
    // new word seen at test time, so we map it to unknown.
    // Note that else condition will only occur at test time.
}
Sentence x = new Sentence(wordIds);
#+END_SRC

Similarly, we read the POS tag sequence, adding the labels to the lexicon,
````
for (int j = 0; j < tags.length; j++) {
    lm.addLabel("tag:" + tags[j]);
    tagIds[j] = lm.getLabelId("tag:" + tags[j]);
}
POSTag y = new POSTag(tagIds);
````
For ease of access, we put both the sentence token ids and the tags ids in the =SLProblem= object. The =SLProblem= class is a wrapper around a list of IInstance and the correponding gold IStructure objects. We add the sentence and POSTag to the =SLProblem= object,
````
sp.addExample(x, y);
````

Here is the entire code for reading the data,
````
public static SLProblem readStructuredData(String fname, Lexiconer lm)
throws IOException, DataFormatException {
    List<String> lines = LineIO.read(fname);
    SLProblem sp = new SLProblem();

    assert lines.size() % 2 == 0; // must be even; contains labels

    if (lm.isAllowNewFeatures())
        lm.addFeature("W:unknownword"); 
        // pre-add the unknown word to the vocab

    for (int i = 0; i < lines.size() / 2; i++) {
        String[] words = lines.get(i * 2).split("\\s+");
        int[] wordIds = new int[words.length];

        for (int j = 0; j < words.length; j++) {
        // this will be off at test time, so new words wont be added to the lexicon
            if (lm.isAllowNewFeatures()) {
                lm.addFeature("w:" + words[j]);
            }
            if (lm.containFeature("w:" + words[j]))
                wordIds[j] = lm.getFeatureId("w:" + words[j]);
            else
                wordIds[j] = lm.getFeatureId("W:unknownword");
                // new word seen at test time, so we map it to unknown
        }
        Sentence x = new Sentence(wordIds);
        String[] tags = lines.get(i * 2 + 1).split("\\s+");
        int[] tagIds = new int[words.length];

        if (words.length != tags.length) {
            throw new DataFormatException(
            "The number of tokens and number tags in " + i
            + "-th sample does not match");
        }
        for (int j = 0; j < tags.length; j++) {
            lm.addLabel("tag:" + tags[j]);
            tagIds[j] = lm.getLabelId("tag:" + tags[j]);
        }
        sp.addExample(x, new POSTag(tagIds));
    }
    return sp;
}
````

#### Training
First, we create a new =SLModel= object that will contain all the information relevant to our model.
In particular, it contains,
1. The Lexicon - the lexicon manages the mapping from your features to ids and labels to ids. The lexicon is implemented in the class =Lexiconer=.
2. The weight vector for your model.  
3. Inference Solver - the method that you use to solve 

````

SLModel model = new SLModel();
model.lm = new Lexiconer();

SLProblem sp = readStructuredData(trainingDataPath, model.lm);

````

Now lets read the training data for POS tagging.
We are going to populate the lexicon as we read the data. 
Once you have read all the data, make sure to switch off the addition of new features by calling,
````
// Disallow the creation of new features
model.lm.setAllowNewFeatures(false);
````
*This is important*. If you forget to do this, the lexicon will keep on adding new words to the vocabulary during test time!


When you are done training, you can save your model by calling the =saveModel= method in the =SLModel= class.

#### Testing
Testing is as easy as training. We simply load the =SLModel= object that we obtained from training and read the test data into a =SLProblem=. We access each test instance using the =instanceList= field in the =SLProblem= object, and output the best structure as our prediction.
````
SLModel model = SLModel.loadModel(modelPath);
SLProblem sp = readStructuredData(testDataPath, model.lm);

double acc = 0.0;
double total = 0.0;

for (int i = 0; i < sp.instanceList.size(); i++) {

    POSTag gold = (POSTag) sp.goldStructureList.get(i);
    POSTag prediction = (POSTag) model.infSolver.getBestStructure(model.wv, sp.instanceList.get(i));

    for (int j = 0; j < prediction.tags.length; j++) {
        total += 1.0;
        if (prediction.tags[j] == gold.tags[j]) {
        acc += 1.0;
    }
}
````
#### Final Remarks
You can find the source code for the POS tagging and other examples under =src/main/java/edu/illinois/cs/cogcomp/sl/applications/tutorial=
in the downloaded package.
You can also find a simple script to run the POS tagging example at =scripts/run_tutorial.sh=.
It will train your model, and test it on a toy dataset.
