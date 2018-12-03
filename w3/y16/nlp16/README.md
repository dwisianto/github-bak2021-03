
# NLP 


- [Overview](#overview)
- [Schedules](#schedules)
- [Textbook](#textbook)
- [Software Packages](#software-packages)
- [Literatures](#literatures)
  - [Formal Language](#formal-language)  
  - [Language Modeling](#language-modeling)
  - [Grammar](#grammar) 
  - [Parsing](#parsing)
  - [Information Extraction](#information-extraction)
  - [Word Embedding](#word-embedding)  
- [Coding Exercises](#coding-exercises)


## Overview

Natural Language Processing (NLP) enables computing devices to "understand" human languages. 
Typical applications include extracting information from unstructured text, machine translation, and question answering.


This course covers the fundamental elements and recent research advances in NLP.
Tentative topics include syntactic analysis, semantic analysis, and NLP applications as well as the underlying machine learning methods that widely used in modeling NLP systems.
The activities of the course include lectures, paper presentations, quizzes, a critical review report, and a final project. Tentative topics include:
- Machine learning background: linear classification models, basic structured prediction models
- Syntactic analysis: part-of-speech tagging, chunking, dependency parsing, constituency parsing.
- Semantics: brown clusters, vector-space semantics, semantic role labeling.
- NLP Applications: name entity recognition, machine translation, information extraction.

Similar courses are 

- [mcollins](http://www.cs.columbia.edu/~mcollins/cs4705-fall2018/)
- [nyu](https://cs.nyu.edu/courses/fall17/CSCI-GA.3033-008/)
- https://cs.nyu.edu/~aparikh/Lecture1-2018.pdf
- [stanfordNlpDemo](http://nlp.stanford.edu:8080/corenlp/) 
- [allennlp](https://allennlp.org/)

 [ACL Ontology](https://aclanthology.coli.uni-saarland.de/) lists essential communities as follows.
- ACL
- NAACL
- ICML
- NIPS


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
|        | Formal Grammar | |
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



## Textbook

- Jurafsky and Martin, Speech and Language Processing, [third Edition](http://web.stanford.edu/~jurafsky/slp3/)
- Manning and Schuetze, Foundations of Statistical Natural Language Processing


## Software Packages

- OpenNLP - 
- nlp4j - [pdf](http://www.aclweb.org/anthology/P15-1038.pdf)
- [YaraParser](https://github.com/yahoo/YaraParser)


## Literatures

- Prakash M Nadkarni, et. al. Natural Language Processing: an Introduction ( [pdf]( https://pdfs.semanticscholar.org/b97e/3bd95b22fb87bd14615f4aeea6711c5a0be3.pdf ) )


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

- Yoav Goldberg, Joakim Nivre, "Training Deterministic Parsers with Non-Deterministic Oracles." TACL 2013 (PDF)
- Danqi Chen, Christopher D. Manning, "A Fast and Accurate Dependency Parser using Neural Networks." EMNLP 2014 (PDF)
- Andre F. T. Martins, Noah A. Smith, Eric P. Xing. "Turbo Parsers: Dependency Parsing by Approximate Variational Inference" EMNLP 2010. (PDF)
- Yoav Goldberg, Michael Elhadad, "An Efficient Algorithm for Easy-First Non-Directional Dependency Parsing." NAACL 2010 (PDF)
- Dan Klein, Christopher D. Manning, "Accurate Unlexicalized Parsing." ACL 2003 (PDF)

[Top](#nlp)  

### Information Extraction

- T. Mitchell, W. Cohen, E. Hruschka, P. Talukdar, J. Betteridge, A. Carlson, B. Dalvi, M. Gardner, B. Kisiel, J. Krishnamurthy, N. Lao, K. Mazaitis, T. Mohamed, N. Nakashole, E. Platanios, A. Ritter, M. Samadi, B. Settles, R. Wang, D. Wijaya, A. Gupta, X. Chen, A. Saparov, M. Greaves, J. Welling. Never-Ending Language Learning. AAAI 2015.
- S. Riedel, L. Yao, B. M. Marlin and A. McCallum. "Relation Extraction with Matrix Factorization and Universal Schemas". NAACL 2013. (PDF)
- S. Singh, T. Rocktaschel and S. Riedel. "Towards Combined Matrix and Tensor Factorization for Universal Schema Relation Extraction". NAACL 2015. (PDF)
- Michele Banko, Michael J Cafarella, Stephen Soderland, Matt Broadhead and Oren Etzioni. "Open Information Extraction from the Web". IJCAI 2007. (PDF)
- Mike Mintz, Steven Bills, Rion Snow, Dan Jurafsky. "Distant supervision for relation extraction without labeled data." ACL 2009. (PDF)
- Panupong Pasupat, Percy Liang. "Zero-shot entity extraction from web pages." ACL 2014. (PDF)

[Top](#nlp)  

###  Semantic Parsing

- Jonathan Berant, Vivek Srikumar, Pei-Chun Chen, Abby Vander Linden, Brittany Harding, Brad Huang, Peter Clark and Christopher D. Manning. "Modeling Biological Processes for Reading Comprehension." EMNLP 14 (PDF)
- Scott Wen-tau Yih, Ming-Wei Chang, Xiaodong He, Jianfeng Gao, "Semantic Parsing via Staged Query Graph Generation: Question Answering with Knowledge Base". ACL 2015 (PDF)
- Percy Liang, Michael I. Jordan, Dan Klein, "Learning dependency-based compositional semantics." ACL 2011. (PDF)
- Jonathan Berant, Percy Liang. "Imitation learning of agenda-based semantic parsers." TACL 2015 (PDF)

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

-



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

## Coding Exercises

- [Graham Neubig](http://www.phontron.com/) - [slides](http://www.phontron.com/teaching.php) - [github](https://github.com/neubig/nlptutorial)
- 





