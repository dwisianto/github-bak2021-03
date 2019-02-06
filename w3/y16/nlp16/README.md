
# NLP 

- [Overview](#overview)
  - Community
  - [Textbook](#textbook) 
- [Schedules](#schedules)
- [Literatures](#literatures)
  - [Formal Language](#formal-language)  
  - [Language Modeling](#language-modeling)
  - [Grammar](#grammar) 
  - [Parsing](#parsing)
  - [Information Extraction](#information-extraction)
  - [Word Embedding](#word-embedding)
  - [Structured Prediction](#structured-prediction) 
  - [Semantic Web](#semantic-web)
  - [Ontology](#ontology)
  - [Biomedical Text Mining](#biomedical-text-mining)   
  - [Others](#others)  
- [Software Tools](#software-tools)
  - [Coding Exercises](#coding-exercises)
- [Frequently Asked Questions](#frequently-asked-questions)


# Overview

Natural Language Processing (NLP) is focused on enabling a computing device to "understand" human languages. 
In everyday life, NLP technologies have a phenomenal impact on the way people interact with computers and on the way people access the vast amount of linguistic data in an electronic format. 
From an academic viewpoint, NLP involves fundamental questions of how to represent natural language phenomena using formal computational and statistical models. 
Typical applications include extracting information from unstructured text, machine translation, and question answering.

This course covers the fundamental elements and recent research advances in NLP.
Tentative topics include syntactic analysis, semantic analysis, and NLP applications as well as the underlying machine learning methods that widely used in modeling NLP systems.

The activities of the course include lectures, paper presentations, quizzes, a critical review report, and a final project. Tentative topics include:
- Machine learning background: linear classification models, basic structured prediction models
- Syntactic analysis: part-of-speech tagging, chunking, dependency parsing, constituency parsing.
- Semantics: brown clusters, vector-space semantics, semantic role labeling.
- NLP Applications: name entity recognition, machine translation, information extraction.


A few online demos of NLP tasks are available such as [stanfordNlpDemo](http://nlp.stanford.edu:8080/corenlp/) and [allennlp](https://allennlp.org/). Similar courses are offered in a few academic institutions,such as [Notre Dame](https://www3.nd.edu/~dchiang/teaching/nlp/2018/), [UMich](https://www.youtube.com/playlist?list=PLLssT5z_DsK8BdawOVCCaTCO99Ya58ryR), [UnivVirginia](http://www.cs.virginia.edu/~kc2wc/),  [NYU](https://cs.nyu.edu/courses/fall17/CSCI-GA.3033-008/) [aparikh](https://cs.nyu.edu/~aparikh/Lecture1-2018.pdf),  [Yoav Artzi](https://yoavartzi.com/),  [mcollins](http://www.cs.columbia.edu/~mcollins/cs4705-fall2018/).


## Textbook

- Jurafsky and Martin, Speech and Language Processing, (3rd ed. draft) [[PDF](http://web.stanford.edu/~jurafsky/slp3/)]
- Christopher Manning and Hinrich Schütze, Foundations of Statistical Natural Language Processing, MIT Press. Cambridge, MA: May 1999 [[online](https://nlp.stanford.edu/fsnlp/)]
- Christopher D. Manning, Prabhakar Raghavan and Hinrich Schütze, Introduction to Information Retrieval, Cambridge University Press. 2008. [[online](https://nlp.stanford.edu/IR-book/)]
- Noah A. Smith, "Linguistic Structure Prediction", [[online](https://www.morganclaypool.com/doi/abs/10.2200/S00361ED1V01Y201105HLT013)]
- Yoav Goldberg, "Primer on Neural Network Models for Natural Language Processing" [[PDF](http://u.cs.biu.ac.il/~yogo/nnlp.pdf)]
- Sebastian Nowozin and Christoph H. Lampert, "Structured Learning and Prediction in Computer Vision" [[PDF](http://www.nowozin.net/sebastian/papers/nowozin2011structured-tutorial.pdf)]

GoTo: [Top](#nlp)
 

## Community 

Many respected NLP communities are listed in the [ACL Ontology](https://aclanthology.coli.uni-saarland.de/) such as ACL, NAACL, ICML, NIPS.
This is a list of journals that may be suitable for publishing Computational Linguistics papers.
- [Transactions of the Association for Computational Linguistics](https://www.transacl.org/ojs/index.php/tacl)
-  
 
GoTo: [Top](#nlp)


# Schedules

| | | |
|-|-|-|
| Overview | | |
| [Formal Language](https://en.wikipedia.org/wiki/Formal_language) | | | 
| [Language Model](slides/s103lm/LanguageModel.pdf) | | |
|                | XGram | |
|                | Smoothing | |
|                | DiscriminativeLM, Perplexity | |
| Syntax | | |
|        | Formal Grammar | [Slp3Chp10](http://web.stanford.edu/~jurafsky/slp3/10.pdf) |
|        | Dependency Parsing | |
|        | constituency Parsing | |
|        | Statistical Parsing with PCFG | |

| Word Representation | | |
|                     | Morphology | |
|                     | Vector Space Models | |
|                     | Word Embedding | |
|                     | Word Clustering | |
|                     | Part-of-Speech Tagging | |
|                     | Hidden Markov Model | |
|                     | HMM - Viterbi | |
|                     | HMM - EM      | |
| Semantic | | |
|          | Semantic Parsing | [Wiki](https://en.wikipedia.org/wiki/Semantic_parsing) |
|          |                  | [ACL10](slides/s105sempar/semantic-parsing-tutorial-acl10.pdf) | 
| Applications | | |
|              | Information Extraction | |
|              | Named Entity Recognition | |
|              | Relation Extraction | |
|              | Word Alignment | |
|              | Paraphrasing | | 
|              | Machine Translation | | 
|              | Question Answering | | 

[Top](#nlp)



# Literatures

The following section lists the essential publications for each topic and a more comprehensive list is available as a [bibliography](nlp-bib.html) file.

- Prakash M Nadkarni, et. al. "Natural Language Processing: an Introduction" ([PDF]( https://pdfs.semanticscholar.org/b97e/3bd95b22fb87bd14615f4aeea6711c5a0be3.pdf ))
- Eugene Charniak, "Statistical Techniques for Natural Language Processing" ([PDF](https://pdfs.semanticscholar.org/29fd/bbd3bb0b3c798a57e10576d318281d37dd2a.pdf))


## Formal Language 


  

#### Terminology


- Letter : 
- Alphabet : In logic, the words are known as formulas or sentences. See Also : [Formal Language Wiki](https://en.wikipedia.org/wiki/Formal_language)
- Word : In logic, the words are known as formulas or sentences. See Also : [Formal Language Wiki](https://en.wikipedia.org/wiki/Formal_language)
- Language :  See Also: [PlanetMath](https://planetmath.org/definitelanguage)
- [Formal Language](https://en.wikipedia.org/wiki/Formal_language) : 
- Natural Language : 
- [Regular Language](https://en.wikipedia.org/wiki/Regular_language) : It is a formal language that can be expressed using a regular expression.  It is also called Rational Language. 
- Context Free Language : 
- [Indexed Language](https://en.wikipedia.org/wiki/Indexed_language) :
- [Context Sensitive Language](https://en.wikipedia.org/wiki/Context-sensitive_language) :
- [Recursive Language](https://en.wikipedia.org/wiki/Recursive_language) : 
- [Recursively Enumerable Language](https://en.wikipedia.org/wiki/Recursively_enumerable_language) : 
- Grammar : 
- Formal Grammar : 
-  




#### Books

#### Publications


[Top](#nlp)


## Language Modeling


- Yoshua Bengio, Rejean Ducharme, Pascal Vincent, Christian Jauvin, "A Neural Probability Language Model." JMLR 2003 (PDF).
- Yoom Kim, Yacine Jernite, David Sontag, Alexander M. Rush, "Character-Aware Neural Language Models". AAAI 2015 (PDF).
- Brian Roark, Murat Saraclar, Michael Collins, Mark Johnson, "Discriminative Language Modeling with Conditional Random Fields and the Perceptron Algorithm". ACL 2004 (PDF).
- Yee Whye Teh, "A hierarchical Bayesian language model based on Pitman-Yor processes." ACL 2006 (PDF).

[Top](#nlp)  
[Wiki](https://en.wikipedia.org/wiki/Language_model)

## Grammar

- 
[Chomsky_hierarchy](https://en.wikipedia.org/wiki/Chomsky_hierarchy)

### Parsing

- M.C.McCord, J.W.Murdock,  B.K.Boguraev, "Deep parsing in Watson" ( [PDF](http://brenocon.com/watson_special_issue/03%20Deep%20parsing.pdf) )

- Yoav Goldberg, Joakim Nivre, "Training Deterministic Parsers with Non-Deterministic Oracles." TACL 2013 (PDF)
- Danqi Chen, Christopher D. Manning, "A Fast and Accurate Dependency Parser using Neural Networks." EMNLP 2014 (PDF)
- Andre F. T. Martins, Noah A. Smith, Eric P. Xing. "Turbo Parsers: Dependency Parsing by Approximate Variational Inference" EMNLP 2010. (PDF)
- Yoav Goldberg, Michael Elhadad, "An Efficient Algorithm for Easy-First Non-Directional Dependency Parsing." NAACL 2010 (PDF)
- Dan Klein, Christopher D. Manning, "Accurate Unlexicalized Parsing." ACL 2003 (PDF)

[Top](#nlp)  



### Constituent Parsing

#### Terminology

- [Constituent](https://en.wikipedia.org/wiki/Constituent_(linguistics)) :  a word or a group of words that functions as a single unit within a hierarchical structure.

[Top](#nlp) 
 
### Dependency Parsing

#### Terminology

- Attachment Score : # correct deps / # deps
- LAS : Labeled Accuracy Score
- UAS : Unlabeled Accuracy Score
- [Catena](https://en.wikipedia.org/wiki/Catena_(linguistics)) :
- CYK : O(n^5)
  

[Top](#nlp)

###  Semantic Parsing

- Jonathan Berant, Vivek Srikumar, Pei-Chun Chen, Abby Vander Linden, Brittany Harding, Brad Huang, Peter Clark and Christopher D. Manning. "Modeling Biological Processes for Reading Comprehension." EMNLP 14 (PDF)
- Scott Wen-tau Yih, Ming-Wei Chang, Xiaodong He, Jianfeng Gao, "Semantic Parsing via Staged Query Graph Generation: Question Answering with Knowledge Base". ACL 2015 (PDF)
- Percy Liang, Michael I. Jordan, Dan Klein, "Learning dependency-based compositional semantics." ACL 2011. (PDF)
- Jonathan Berant, Percy Liang. "Imitation learning of agenda-based semantic parsers." TACL 2015 (PDF)

[Top](#nlp)  



### Information Extraction

- T. Mitchell, W. Cohen, E. Hruschka, P. Talukdar, J. Betteridge, A. Carlson, B. Dalvi, M. Gardner, B. Kisiel, J. Krishnamurthy, N. Lao, K. Mazaitis, T. Mohamed, N. Nakashole, E. Platanios, A. Ritter, M. Samadi, B. Settles, R. Wang, D. Wijaya, A. Gupta, X. Chen, A. Saparov, M. Greaves, J. Welling. Never-Ending Language Learning. AAAI 2015.
- S. Riedel, L. Yao, B. M. Marlin and A. McCallum. "Relation Extraction with Matrix Factorization and Universal Schemas". NAACL 2013. (PDF)
- S. Singh, T. Rocktaschel and S. Riedel. "Towards Combined Matrix and Tensor Factorization for Universal Schema Relation Extraction". NAACL 2015. (PDF)
- Michele Banko, Michael J Cafarella, Stephen Soderland, Matt Broadhead and Oren Etzioni. "Open Information Extraction from the Web". IJCAI 2007. (PDF)
- Mike Mintz, Steven Bills, Rion Snow, Dan Jurafsky. "Distant supervision for relation extraction without labeled data." ACL 2009. (PDF)
- Panupong Pasupat, Percy Liang. "Zero-shot entity extraction from web pages." ACL 2014. (PDF)

[Top](#nlp)  


## Question Answering 

- David Ferruci, et al. "Building Watson: An Overview of the deepQA Project" 
( [PDF](https://rockstarresearch.com/wp-content/uploads/2014/05/Building-Watson.pdf) )
- 

[Top](#nlp)  

## Semantic Role Labeling

- Kristina Toutanova, Aria Haghigh, Christopher D. Manning. "Joint Learning Improves Semantic Role Labeling." ACL 2005 (PDF)
- Vivek Srikumar, Dan Roth "A Joint Model for Extended Semantic Role Labeling". ACL 2011 (PDF)
- Daniel Gildea, Daniel Jurafsky, "Automatic Labeling of Semantic Roles". ACL 2000 (PDF)


[Top](#nlp)  

## Coreference Resolution


- Karthik Raghunathan, Heeyoung Lee, Sudarshan Rangarajan, Nathanael Chambers, Mihai Surdeanu, Dan Jurafsky, Christopher Manning. "A Multi-Pass Sieve for Coreference Resolution". EMNLP 2010 (PDF)
- Greg Durrett and Dan Klein. "Easy Victories and Uphill Battles in Coreference Resolution." EMNLP 2013. (PDF)
- Kai-Wei Chang Rajhan Samdani, Dan Roth. "A Constrained Latent Variable Model for Coreference Resolution" EMNLP 2013. (PDF)
- Sam Wiseman, Alexander M. Rush, and Stuart M. Shieber. "Learning Global Features for Coreference Resolution" NAACL 2016. (PDF)


[Top](#nlp)  

## Named Entity Recognition / Entity Linking

- Alan Ritter, Sam Clark, Mausam and Oren Etzioni. "Named Entity Recognition in Tweets: An Experimental Study". EMNLP 2011 (PDF)
- Lev Ratinov, Dan Roth. "Design Challenges and Misconceptions in Named Entity Recognition". CoNLL 2009 (PDF)
- Andrea Moro, Alessandro Raganato, Roberto Navigli. "Entity Linking meets Word Sense Disambiguation: A Unified Approach". TACL 2014 (PDF)
- Greg Durrett and Dan Klein. "A Joint Model for Entity Analysis: Coreference, Typing, and Linking". TACL 2014 (PDF)
- Xiao Ling, Sameer Singh, and Daniel S. Weld. "Design Challenges for Entity Linking". TACL 2015 (PDF)
- Parag Singla and Pedro Domingos. "Entity Resolution with Markov Logic". ICDM 2006 (PDF)

## Word Embedding

- Tomas Mikolov, Kai Chen, Greg Corrado, Jeffrey Dean, "Efficient Estimation of Word Representations in Vector Space", [PDF](https://arxiv.org/abs/1301.3781)
- Bidirectional Encoder Representations from Transformers (BERT) -  [code](https://github.com/google-research/bert)
- fastText 

[Top](#nlp) - [Wiki](https://en.wikipedia.org/wiki/Word_embedding)

## Machine Translation

- Philipp Koehn, Franz Josef Och, Daniel Marcu. "Statistical Phrase-Based Translation." NAACL 2003. (PDF)
- Ilya Sutskever, Oriol Vinyals, Quoc V. Le. "Sequence to Sequence Learning with Neural Networks". NIPS 2014.
- Dzmitry Bahdanau, KyungHyun Cho and Yoshua Bengio. "Neural machine translation by jointly learning to align and translate". ICLR 2015. (PDF)

[Top](#nlp)  

## Word Alignment / Paragraph

- Regina Barzilay and Lillian Lee. "Learning to Paraphrase: An Unsupervised Approach Using Multiple-Sequence Alignment". NAACL 2003. (PDF)
- Colin Bannard and Chris Callison-Burch. "Paraphrasing with Bilingual Parallel Corpora.". ACL 2005. (PDF)
- Socher, R. and Huang, E.H., and Pennington, J. and Ng, A.Y., and Manning, C.D. " Dynamic pooling and unfolding recursive autoencoders for paraphrase detection". NIPS 2011 (PDF)

GoTo: [Top](#nlp)

  


## Structured Prediction

- Sebastian Nowozin and Christoph H. Lampert, "Structured Learning and Prediction in Computer Vision", [PDF](http://pub.ist.ac.at/%7Echl/papers/nowozin-fnt2011.pdf) 
- Yossi Adi, Joseph Keshet, "StructED: Risk Minimization in Structured Prediction", [page](http://www.jmlr.org/papers/v17/15-531.html) - [code](http://adiyoss.github.io/StructED/) 
- Andreas C. Muller, Sven Behnke , "PyStruct - Learning Structured Prediction in Python", [PDF](http://jmlr.org/papers/volume15/mueller14a/mueller14a.pdf) - [web](https://pystruct.github.io/)
- Yang, Yi, Ozan Irsoy, and Kazi Shefaet Rahman. "Collective Entity Disambiguation with Structured Gradient Tree Boosting." (2018). ([PDF](https://arxiv.org/pdf/1802.10229.pdf)) ([news](https://www.techatbloomberg.com/blog/bloombergs-advances-natural-language-processing-allow-improved-tagging-tweets-news/)) - [code](https://github.com/bloomberg/sgtb) - [yi yang's page](https://yiyangnlp.github.io/) - [shefaet's page](https://github.com/shefaet)


GoTo: [Top](#nlp)



## Ontology

An ontology is a formal explicit description of concepts in a domain of discourse ( **classes** (sometimes called **concepts**)), properties of each **concept** describing various **features** and **attributes** of the **concept** (**slots** (sometimes called **roles** or **properties**)), and restrictions on **slots** (**facets** (sometimes called **role restrictions**)). An ontology together with a set of individual **instances** of classes constitutes a **knowledge base**. In reality, there is a fine line where the ontology ends and the **knowledge base begins**. [PDF](https://protege.stanford.edu/publications/ontology_development/ontology101-noy-mcguinness.html). 

### Literatures

- Fabien Gandon, "A Survey of the First 20 Years of Research on Semantic Web and Linked Data", [PDF](https://hal.inria.fr/hal-01935898/)
- Leon Bottou, "From Machine Learning to Machine Reasoning" [[PDF](https://arxiv.org/ftp/arxiv/papers/1102/1102.1808.pdf)] 
- Haase, P. and Völker, J., 2008. "Ontology learning and reasoning—dealing with uncertainty and inconsistency". In Uncertainty reasoning for the semantic web I (pp. 366-384). Springer, Berlin, Heidelberg. ([PDF](http://syntheticsapien.com/papers/URSW_Proceedings.pdf#page=48) )
- Hohenecker, Patrick, and Thomas Lukasiewicz. "Deep Learning for Ontology Reasoning." 2017 [PDF](https://arxiv.org/pdf/1705.10342.pdf)
- Suntisrivaraporn, Boontawee. "Polynomial-time reasoning support for design and maintenance of large-scale biomedical ontologies." (2008) [PDF](https://lat.inf.tu-dresden.de/research/phd/Sun-PhD-09.pdf)

### Tools

- [Protoge](https://protege.stanford.edu/)
    - [Protege Tutorial](http://mowl-power.cs.man.ac.uk/protegeowltutorial/resources/ProtegeOWLTutorialP4_v1_3.pdf)
    - [Simple Protege Tutorial](https://www.youtube.com/watch?v=R9ERlUgvgwM&list=PLea0WJq13cnAfCC0azrCyquCN_tPelJN1)
    - A practical exercise to create an ontology is available [practical exercise](../ont/)     
- [ProbLogic](https://dtai.cs.kuleuven.be/problog/publications.html)
- [KAON](https://en.wikipedia.org/wiki/KAON)
- [Open Biological and Biomedical Ontology](http://obofoundry.org/) - [robot](https://github.com/ontodev/robot)


### Terminology 

- [SNOMED](https://en.wikipedia.org/wiki/Systematized_Nomenclature_of_Medicine)
- [SNOMED CT](https://en.wikipedia.org/wiki/SNOMED_CT)
- [MedDRA](https://en.wikipedia.org/wiki/MedDRA)
- [Network Science](https://en.wikipedia.org/wiki/Network_science) [Social Network Analysis](https://en.wikipedia.org/wiki/Social_network_analysis) 


GoTo: [Top](#nlp)

## Semantic Web

- [Semantic_Web](https://en.wikipedia.org/wiki/Semantic_Web)
- [Semantic Network](https://en.wikipedia.org/wiki/Semantic_network#History)
- [TransE](http://papers.nips.cc/paper/5071-translating-embeddings-for-modeling-multi-relational-data.pdf)

GoTo: [Top](#nlp)

## Biomedical Text Mining  

- [Wiki](https://en.wikipedia.org/wiki/Biomedical_text_mining)  

GoTo: [Top](#nlp)

## Others

- P. Liang, H. Daume, and D. Klein. "Structure Compilation: Trading Structure for Features". ICML 2008. (PDF)
- Nate Kushman, Yoav Artzi, Luke Zettlemoyer, and Regina Barzilay. "Learning to Automatically Solve Algebra Word Problems". ACL 2014 (PDF)
- Pedro Domingos, Matthew Richardson. "Markov Logic: A Unifying Framework for Statistical Relational Learning"

GoTo: [Top](#nlp)



# Software Tools

- OpenNLP - 
- nlp4j - [pdf](http://www.aclweb.org/anthology/P15-1038.pdf)
- [YaraParser](https://github.com/yahoo/YaraParser)
- [KEA](http://community.nzdl.org/kea/)
> Keywords and keyphrases (multi-word units) are widely used in large document collections. They describe the content of single documents and provide a kind of semantic metadata that is useful for a wide variety of purposes. The task of assigning keyphrases to a document is called keyphrase indexing. For example, academic papers are often accompanied by a set of keyphrases freely chosen by the author. In libraries professional indexers select keyphrases from a controlled vocabulary (also called Subject Headings) according to defined cataloguing rules. On the Internet, digital libraries, or any depositories of data (flickr, del.icio.us, blog articles etc.) also use keyphrases (or here called content tags or content labels) to organize and provide a thematic access to their data. KEA is an algorithm for extracting keyphrases from text documents. It can be either used for free indexing or for indexing with a controlled vocabulary. 




### Coding Exercises

- [Graham Neubig](http://www.phontron.com/) - [slides](http://www.phontron.com/teaching.php) - [github](https://github.com/neubig/nlptutorial)
- 


# Frequently Asked Questions

### Logistic Regression vs MaxEnt Model

https://www.quora.com/What-is-the-relationship-between-Log-Linear-model-MaxEnt-model-and-Logistic-Regression

GoTo: [[Top](#nlp)]  

### What's next after completing this course ?

NLP technology can be applied to many AI applications, such as [Semantic Web](semanticweb.org), [Biomedical Informatics](https://core.ac.uk/download/pdf/82380701.pdf), Social Engineering, Knowledge Engineering.

GoTo: [[Top](#nlp)]  

