
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
- [Software Packages](#software-packages)
  - [Coding Exercises](#coding-exercises)
- [Frequently Asked Questions](#frequently-asked-questions)


## Overview

Natural Language Processing (NLP) enables a computing device to "understand" human languages.  
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


A few online demo of NLP tasks are available such as [stanfordNlpDemo](http://nlp.stanford.edu:8080/corenlp/) and [allennlp](https://allennlp.org/).   
Relevant courses are offered in different institutions.   

- [Umich](https://www.youtube.com/playlist?list=PLLssT5z_DsK8BdawOVCCaTCO99Ya58ryR)
- [Yoav Artzi](https://yoavartzi.com/) 
- [mcollins](http://www.cs.columbia.edu/~mcollins/cs4705-fall2018/)
- [nyu](https://cs.nyu.edu/courses/fall17/CSCI-GA.3033-008/) [aparikh](https://cs.nyu.edu/~aparikh/Lecture1-2018.pdf)



### Textbook

- Jurafsky and Martin, Speech and Language Processing, (3rd ed. draft) [[PDF](http://web.stanford.edu/~jurafsky/slp3/)]
- Chris Manning and Hinrich Schütze, Foundations of Statistical Natural Language Processing, MIT Press. Cambridge, MA: May 1999 [[online](https://nlp.stanford.edu/fsnlp/)]
- Christopher D. Manning, Prabhakar Raghavan and Hinrich Schütze, Introduction to Information Retrieval, Cambridge University Press. 2008. [[online](https://nlp.stanford.edu/IR-book/)]
- Noah A. Smith, "Linguistic Structure Prediction", [[online](https://www.morganclaypool.com/doi/abs/10.2200/S00361ED1V01Y201105HLT013)]


 

### Community 

Many respected NLP communities are listed in the [ACL Ontology](https://aclanthology.coli.uni-saarland.de/) such as ACL, NAACL, ICML, NIPS. 
 
[Top](#nlp)


## Schedules

| | | |
|-|-|-|
| Overview | | |
| [Formal Language](https://en.wikipedia.org/wiki/Formal_language) | | | 
| [Language Model](slides/s103lm/LanguageModel.pdf) | | |
|                | XGram | |
|                | Smoothing | |
|                | DiscriminativeLM, Perplexity | |
| Word Representation | | |
|                     | Morphology | |
|                     | Vector Space Models | |
|                     | Word Embedding | |
|                     | Word Clustering | |
|                     | Part-of-Speech Tagging | |
|                     | Hidden Markov Model | |
|                     | HMM - Viterbi | |
|                     | HMM - EM      | |
| Syntax | | |
|        | Formal Grammar | [Slp3Chp10](http://web.stanford.edu/~jurafsky/slp3/10.pdf) |
|        | Dependency Parsing | |
|        | constituency Parsing | |
|        | Statistical Parsing with PCFG | |
|        | Semantic Parsing | [Wiki](https://en.wikipedia.org/wiki/Semantic_parsing) |
| Applications | | |
|              | Information Extraction | |
|              | Named Entity Recognition | |
|              | Relation Extraction | |
|              | Word Alignment | |
|              | Paraphrasing | | 
|              | Machine Translation | | 
|              | Question Answering | | 

[Top](#nlp)



## Literatures

- Prakash M Nadkarni, et. al. "Natural Language Processing: an Introduction" ([PDF]( https://pdfs.semanticscholar.org/b97e/3bd95b22fb87bd14615f4aeea6711c5a0be3.pdf ))
- Eugene Charniak, "Statistical Techniques for Natural Language Processing" ([PDF](https://pdfs.semanticscholar.org/29fd/bbd3bb0b3c798a57e10576d318281d37dd2a.pdf))


### Formal Language 


  

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


### Language Modeling


- Yoshua Bengio, Rejean Ducharme, Pascal Vincent, Christian Jauvin, "A Neural Probability Language Model." JMLR 2003 (PDF).
- Yoom Kim, Yacine Jernite, David Sontag, Alexander M. Rush, "Character-Aware Neural Language Models". AAAI 2015 (PDF).
- Brian Roark, Murat Saraclar, Michael Collins, Mark Johnson, "Discriminative Language Modeling with Conditional Random Fields and the Perceptron Algorithm". ACL 2004 (PDF).
- Yee Whye Teh, "A hierarchical Bayesian language model based on Pitman-Yor processes." ACL 2006 (PDF).

[Top](#nlp)  
[Wiki](https://en.wikipedia.org/wiki/Language_model)

### Grammar

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


### Question Answering 

- David Ferruci, et al. "Building Watson: An Overview of the deepQA Project" 
( [pdf](https://rockstarresearch.com/wp-content/uploads/2014/05/Building-Watson.pdf) )
- 

[Top](#nlp)  

### Semantic Role Labeling

- Kristina Toutanova, Aria Haghigh, Christopher D. Manning. "Joint Learning Improves Semantic Role Labeling." ACL 2005 (PDF)
- Vivek Srikumar, Dan Roth "A Joint Model for Extended Semantic Role Labeling". ACL 2011(PDF)
- Daniel Gildea, Daniel Jurafsky, "Automatic Labeling of Semantic Roles". ACL 2000(PDF)


[Top](#nlp)  

### Coreference Resolution


- Karthik Raghunathan, Heeyoung Lee, Sudarshan Rangarajan, Nathanael Chambers, Mihai Surdeanu, Dan Jurafsky, Christopher Manning. "A Multi-Pass Sieve for Coreference Resolution". EMNLP 2010 (PDF)
- Greg Durrett and Dan Klein. "Easy Victories and Uphill Battles in Coreference Resolution." EMNLP 2013. (PDF)
- Kai-Wei Chang Rajhan Samdani, Dan Roth. "A Constrained Latent Variable Model for Coreference Resolution" EMNLP 2013. (PDF)
- Sam Wiseman, Alexander M. Rush, and Stuart M. Shieber. "Learning Global Features for Coreference Resolution" NAACL 2016. (PDF)


[Top](#nlp)  

### Named Entity Recognition / Entity Linking

- Alan Ritter, Sam Clark, Mausam and Oren Etzioni. "Named Entity Recognition in Tweets: An Experimental Study". EMNLP 2011 (PDF)
- Lev Ratinov, Dan Roth. "Design Challenges and Misconceptions in Named Entity Recognition". CoNLL 2009 (PDF)
- Andrea Moro, Alessandro Raganato, Roberto Navigli. "Entity Linking meets Word Sense Disambiguation: A Unified Approach". TACL 2014 (PDF)
- Greg Durrett and Dan Klein. "A Joint Model for Entity Analysis: Coreference, Typing, and Linking". TACL 2014 (PDF)
- Xiao Ling, Sameer Singh, and Daniel S. Weld. "Design Challenges for Entity Linking". TACL 2015 (PDF)
- Parag Singla and Pedro Domingos. "Entity Resolution with Markov Logic". ICDM 2006 (PDF)

### Word Embedding

- Tomas Mikolov, Kai Chen, Greg Corrado, Jeffrey Dean, "Efficient Estimation of Word Representations in Vector Space", [PDF](https://arxiv.org/abs/1301.3781)
- Bidirectional Encoder Representations from Transformers (BERT) -  [code](https://github.com/google-research/bert)
- fastText 

[Top](#nlp) - [Wiki](https://en.wikipedia.org/wiki/Word_embedding)

### Machine Translation

- Philipp Koehn, Franz Josef Och, Daniel Marcu. "Statistical Phrase-Based Translation." NAACL 2003. (PDF)
- Ilya Sutskever, Oriol Vinyals, Quoc V. Le. "Sequence to Sequence Learning with Neural Networks". NIPS 2014.
- Dzmitry Bahdanau, KyungHyun Cho and Yoshua Bengio. "Neural machine translation by jointly learning to align and translate". ICLR 2015. (PDF)

[Top](#nlp)  

### Word Alignment / Paragraph

- Regina Barzilay and Lillian Lee. "Learning to Paraphrase: An Unsupervised Approach Using Multiple-Sequence Alignment". NAACL 2003. (PDF)
- Colin Bannard and Chris Callison-Burch. "Paraphrasing with Bilingual Parallel Corpora.". ACL 2005. (PDF)
- Socher, R. and Huang, E.H., and Pennington, J. and Ng, A.Y., and Manning, C.D. " Dynamic pooling and unfolding recursive autoencoders for paraphrase detection". NIPS 2011 (PDF)

[Top](#nlp)  

### Others

- P. Liang, H. Daume, and D. Klein. "Structure Compilation: Trading Structure for Features". ICML 2008. (PDF)
- Nate Kushman, Yoav Artzi, Luke Zettlemoyer, and Regina Barzilay. "Learning to Automatically Solve Algebra Word Problems". ACL 2014 (PDF)
- Pedro Domingos, Matthew Richardson. "Markov Logic: A Unifying Framework for Statistical Relational Learning"

[Top](#nlp)  

### Structured Prediction

- Sebastian Nowozin and Christoph H. Lampert, "Structured Learning and Prediction in Computer Vision", [PDF](http://pub.ist.ac.at/%7Echl/papers/nowozin-fnt2011.pdf) 
- Yossi Adi, Joseph Keshet, "StructED: Risk Minimization in Structured Prediction", [page](http://www.jmlr.org/papers/v17/15-531.html) - [code](http://adiyoss.github.io/StructED/) 
- Andreas C. Muller, Sven Behnke , "PyStruct - Learning Structured Prediction in Python", [PDF](http://jmlr.org/papers/volume15/mueller14a/mueller14a.pdf) - [web](https://pystruct.github.io/)

[Top](#nlp)  

### Ontology

- Hohenecker, Patrick, and Thomas Lukasiewicz. "Deep Learning for Ontology Reasoning." 2017 [PDF](https://arxiv.org/pdf/1705.10342.pdf)
- Suntisrivaraporn, Boontawee. "Polynomial-time reasoning support for design and maintenance of large-scale biomedical ontologies." (2008) [PDF](https://lat.inf.tu-dresden.de/research/phd/Sun-PhD-09.pdf)
-  Julian Alfredo Mendez. "A Classification Algorithm For ELHIfR+", 2011 [PDF](https://lat.inf.tu-dresden.de/research/mas/Men-Mas-11.pdf) [code](https://github.com/julianmendez/jcel)  
> Description logics are a family of knowledge representation formalisms for representing and reasoning about conceptual knowledge. Every description logic system has reasoning services that infer implicit knowledge from that explicitly given. Standard reasoning problems include concept satisfiability, concept subsumption, ABox consistency and the instance problem. This thesis focus on the concept subsumption service, which is considered to be the most common service.
> Some years ago, a polynomial-time algorithm for the subsumption problem in the description logic EL was developed. After that, algorithms for different problems in tractable extensions of EL have been developed. These description logics are sufficient to represent many knowledge bases, e.g. a large medical ontology called SNOMED CT. However, there are ontologies requiring extensions of EL that are not tractable. In particular, GALEN, another important medical ontology, requires ELHIfR+, an extension of EL that includes role hierarchies, inverse, functional and transitive roles.
> This thesis presents a classification algorithm for ELHIfR+. Together with this thesis there is an implementation available at http://jcel.sourceforge.net.

### Terminology 

- [SNOMED CT](https://en.wikipedia.org/wiki/SNOMED_CT)

[Top](#nlp)  

A Classification Algorithm For ELHIfR


## Software Packages

- OpenNLP - 
- nlp4j - [pdf](http://www.aclweb.org/anthology/P15-1038.pdf)
- [YaraParser](https://github.com/yahoo/YaraParser)


### Coding Exercises

- [Graham Neubig](http://www.phontron.com/) - [slides](http://www.phontron.com/teaching.php) - [github](https://github.com/neubig/nlptutorial)
- 


## Frequently Asked Questions

### Logistic Regression vs MaxEnt Model

https://www.quora.com/What-is-the-relationship-between-Log-Linear-model-MaxEnt-model-and-Logistic-Regression

[Top](#nlp)  

### What's next?

NLP technology are applicable to many AI applications. 
Examples include : Social Engineering, Knowledge Engineering. 

[Top](#nlp)  

