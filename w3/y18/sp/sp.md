

[TOC]

# Introduction

Structured Output Prediction is for predicting multivariate or structured outputs. It performs supervised learning by approximating a mapping
$
h: X -> Y
$
using labeled training examples $$$(x_1,y_1), ..., (x_n,y_n)$$$.
Unlike regular SVMs, however, which consider only univariate predictions like in classification and regression,
SVMstruct can predict complex objects y like trees, sequences, or sets.
Examples of problems with complex outputs are natural language parsing,
 markov models for part-of-speech tagging,
 and sequence alignment in protein homology detection.

$
y^* = \arg \max_{y \in Y} \ { f(x,y) }
$


$$$ f(x,y) = w \phi(x,y) $$$



# Applications


## Approaches

* SvmStruct
* CRF
* CNN
* RNN

## Researchers


[Dr. Sebastian Nowozin](http://www.nowozin.net/sebastian/)
[Franck Dernoncourt](http://www.francky.me/publications.php)
[Franck Dernoncourt](https://github.com/Franck-Dernoncourt)

## Tutorial

[NER](https://en.wikipedia.org/wiki/Named-entity_recognition)
[nowozin](http://pub.ist.ac.at/~chl/papers/nowozin-fnt2011.pdf)
[sp](https://www.cs.utah.edu/~piyush/teaching/structured_prediction.pdf)


## Review



## Dataset

[pubmed-rct](https://github.com/Franck-Dernoncourt/pubmed-rct)
[JiYoungLee](https://scholar.google.com/citations?user=9vB_1ekAAAAJ&hl=en)


## Softwares

| column | column |
|--------|--------|
| [brat](http://brat.nlplab.org/) |  | 
| [illinois_sl](http://cogcomp.org/software/illinois-sl/) |      |
| [illinois_core](https://github.com/CogComp/cogcomp-nlp) | |
| [seqlearn](http://larsmans.github.io/seqlearn/) | |
| [svmStruct](https://www.cs.cornell.edu/people/tj/svm_light/svm_struct.html)| upport Vector Machine (SVM) algorithm for predicting multivariate or structured outputs |
| [pystruct](https://pystruct.github.io/) | |
| vowpal_wabbit  |        |
| searn          |        |
| StructED: Risk Minimization in Structured Prediction | |
| regression tree field | |




## Bibliogrpahy
[bib](sp.bib.html)
[bib_](sp_/nowozin-fnt2011.pdf)
