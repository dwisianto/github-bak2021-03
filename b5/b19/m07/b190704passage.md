# Passage Based Document Retrieval 

_July 4, 2019_

A document can be deemed relevant to a query even if it contains a very short passage of text with pertinent information.
This fact has motivated work on passage-based document retrieval: document ranking methods that induce information from the document’s passages.
However, the main source of passage-based information utilized was passage-query similarities. 
This work addresses the challenge of utilizing richer sources of passage-based information to improve document retrieval effectiveness.  
Specifically, a suite of learning-to-rank-based document retrieval methods is devised
to utilize a highly effective ranking of passages produced in response to the query; 
passage ranking is also induced using a learning-to-rank approach.  


[//]: # (Empirical evaluation attests to the clear merits of our methods with respect to strong baselines)


### Problem Formulation

Our goal is to rank documents in corpus D with respect to query q. 

Suppose some learning-to-rank (LTR) method was used to rank the documents in the corpus. 
Let D_{LTR} denote the list of the documents most highly ranked. 
The assumption is that the LTR method uses a feature-based representation for both training and ranking.
Specifically, a pair of document d and query q is represented by a feature vector v(d,q).
Herein, we write g ∈ d to indicate that passage g is part of document d. 


We set out to devise document ranking methods that re-rank D_{LTR} using information induced from the set G of all passages in documents in D_{LTR}. 
More specifically, we address the question of whether, and how, using an effective ranking of G with respect to q can help in improving document (re-)ranking effectiveness.

Some of the approaches we present do not depend on the ranking method used to rank the passages in G. 
Others are based on the premise that the ranking is produced using an LTR
approach applied to passages; a pair of passage g and query q is represented in this approach using the feature vector v(g,q). 
To simplify notation, we use G_{LTR} to refer to the ranked passage list attained from G regardless of whether an LTR method was indeed used to rank it.


### Approaches


Four passage-based document retrieval methods are presented to re-rank D_{LTR}. 
The methods differ by the way they utilize information about the ranking of passages in G_{LTR}.


#### Reciprocal Rank Fusion (RRF)

- It is one of the most commonly-used passage based document retrieval approach. 
- RRF is applicable for both the document D_{LTR} and the passage G_{LTR}. 
- It is essentially a linearly interpolating the document-query similarity (score) 
with the highest query similarity (score) of a passage in the docuement. 
- It uses RRF approach to fuse two rankings of the document. 
  - The first is the original ranking of D_{LTR} 
  - The second is the ranking attained based on the highest rank in the G_{LTR} of a document's passage.  
  

The final retrieval score of document d \in D_{LTR} is:

<pre>
score(d;q) := \alpha \, score_{D_{LTR}}(d) + (1-\alpha) \, \max_{g \in d} score_{G_{LTR}}(g)
</pre>

[//]: # (<center><img src="m07rrf/CodeCogsEqn.svg" width="79%"></center>)

where \alpha is a free parameter. 
Thus, d is ranked high if it was originally ranked high in D_{LTR} and at least of one of its passages was ranked high in G_{LTR}. 



