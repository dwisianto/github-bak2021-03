## The Journey is the reward


- July
  - [Reproducible Retrieval](#july-13 "Reproducible Experiment") _July 13, 2019_   
  - [Passage-based Document Retrieval](#passage-based-document-retrieval "Passage Relevance" ) _July 4, 2019_ 
- Monthly
  - [Monthly Update One](#monthly-update-one) _December 31, 2019_ [^java] [^node] [^python] [^docker] 




# July


## July 21


## July 13


### Problem

### Solution

### References

- [anserini](https://github.com/castorini/anserini)
- [hical](https://hical.github.io/) [github](https://github.com/hical/HiCAL)
[//]: # https://github.com/castorini/anserini/commits/anserini-0.1.0?after=cbb815e68c4c7cac34ff0e7098a62530aa442590+295


GoTo > [Top](#the-journey-is-the-reward) > [July](#july)

<pre class="">
 .--()°'.'
'|, . ,'
 !_-(_\     ~ Elephant Art by Morfina
</pre>


## Passage Based Document Retrieval 

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

We set out to devise document ranking methods that re-rank D_{LTR} using information induced from the set G of all passages in documents in D_{LTR}. 
More specifically, we address the question of whether, and how, using an effective ranking of G with respect to q can help in improving document (re-)ranking effectiveness.
Herein, we write g ∈ d to indicate that passage g is part of document d. 

Some of the approaches we present do not depend on the ranking method used to rank the passages in G. 
Others are based on the premise that the ranking is produced using an LTR
approach applied to passages; a pair of passage g and query q is represented in this approach using the feature vector v(g,q). 
To simplify notation, we use G_{LTR} to refer to the ranked passage list attained from G regardless of whether an LTR method was indeed used to rank it.


### Solution

#### Two Stage Retrieval






### References

- "Learning to Rank Documents by Learning to Rank Passages" [PDF](https://web.iem.technion.ac.il/images/user-files/orenk/IE_IS_2018_03.pdf)

```bash
@article{sheetrit2018learning,
  title={Learning to Rank Documents by Learning to Rank Passages},
  author={Sheetrit, Eilon and Shtok, Anna and Kurland, Oren},
  year={2018}
}
```

- Document ranking via sentence modeling using BERT [github](https://github.com/castorini/birch)


```bash
@article{yang2019simple,
  title={Simple Applications of BERT for Ad Hoc Document Retrieval},
  author={Yang, Wei and Zhang, Haotian and Lin, Jimmy},
  journal={arXiv preprint arXiv:1903.10972},
  year={2019}
}

```


GoTo > [Top](#the-journey-is-the-reward) > [July](#july)

<pre class="">
 .--()°'.'
'|, . ,'
 !_-(_\    ~ Elephant Art by Morfina
</pre>

## July References
    - [paper with codes](https://paperswithcode.com/)   
    - [zenodo](https://about.zenodo.org/) [Wiki](https://en.wikipedia.org/wiki/Zenodo)
    - https://webis.de/downloads/publications/papers/stein_2013l.pdf
    - https://ecommons.cornell.edu/bitstream/handle/1813/6100/93-1334.pdf
    - W._Bruce_Croft [Wiki](https://en.wikipedia.org/wiki/W._Bruce_Croft)
    - https://paperswithcode.com/task/learning-to-rank/codeless 


# Monthly
[//]: # (This actually is the most platform independent comment)

![picture alt](http://www.brightlightpictures.com/assets/images/portfolio/thethaw_header.jpg "Title is optional")


## Monthly Update 

### Problem

### Solution

Header1 | Header2
--------|--------
cell1   | cell2
cell3   | cell4

### References

- [asciiart](https://www.asciiart.eu/)
- [mincong-h](https://mincong-h.github.io/)   


GoTo > [Top](#the-journey-is-the-reward) > [Month](#monthly)
<pre class="">
 .--()°'.'
'|, . ,'
 !_-(_\    ~ Elephant Art by Morfina
</pre>



# Tags


[^docker]: docker 

[^java]: java 

[^node]: node 

[^python]: python

GoTo > [Top](#the-journey-is-the-reward) 
