## The Journey is the reward


- August
  - [How to limit execution time of a java thread](#how-to-limit-execution-time-of-a-java-thread "Java thread with timeout") [^java] _August 3, 2019_
- July
  - [Passage-based Document Retrieval](#passage-based-document-retrieval "Passage Relevance" ) _July 4, 2019_ 
- Engineering
  - [Docker](../../k2/kXX/kDocker) 
  - [Git](../../k2/kXX/kGt)
- Monthly
  - [Monthly Update One](#monthly-update-one) _December 31, 2019_ [^java] [^node] [^python] [^docker] 
  - [Reproducible Retrieval](#july-13 "Reproducible Experiment") _July 13, 2019_   




# August

## How to limit execution time of a java thread

_August 3, 2019_

I am presented with a situation that I need to create a java thread inside a method
and the method shall return immediately without waiting for the java thread to complete.
The created thread may continue to run within a pre-specfied time duration.
I would like the Java thread to automatically timing out if its execution is longer than the pre-specified time duration. 
My solution is to use an ExecuterService with future.get along with Future.cancel.
 

```java

public class ThreadTimeout {	
		
	static int _THREAD_POOL_SIZE     = 2; // size of java thread pool
	
	static int _THREAD_TASK_TIMEOUT  = 3; // the pre-specified time duration in seconds
	
	static int _THREAD_TASK_DURATION = 5; // the actual time need to complete the task in seconds

	static ExecutorService _executorService = Executors.newFixedThreadPool(_THREAD_POOL_SIZE);
	
	
	static class MyTask implements Callable<String> {
		
		@Override
		public String call() throws Exception {
			
			TimeUnit.SECONDS.sleep(_THREAD_TASK_DURATION ); 
			System.out.println(MyTimer.getAlarm() + " - mytask.ends");		
			
			return "mytask.ends";
		}
		
	}	
	
	
	static class MyTimer {
		
		public static Instant _timeStart = Instant.now();
		
		public static String getAlarm() {
			return Duration.between(_timeStart, Instant.now()).getSeconds()+"s ";
		}
		
	}
	
	
	public static void main(String[] args) throws Exception {
		
		System.out.println( MyTimer.getAlarm() + " - main.starts");
		Future<String> future = _executorService.submit(new MyTask());
		
		try {			
			System.out.println( MyTimer.getAlarm() + " - future.get." + future.get( _THREAD_TASK_TIMEOUT , TimeUnit.SECONDS)); 
		} catch (TimeoutException e) {
			System.out.println( MyTimer.getAlarm() + " - future.timeout.exception");
			System.out.println( MyTimer.getAlarm() + " - future.cancel." + future.cancel(true) );				
		} 
		
		System.out.println( MyTimer.getAlarm() + " - main.ends ");		
		//_executorService.shutdownNow();
		
	}

}
```

The best case scenario is when 
the actual time needed to complete the task (_THREAD_TASK_DURATION) is _shorter_ than 
the pre-specified time limit for the thread (_THREAD_TASK_TIMEOUT ) 
then the thread will runs to completion and no exception got thrown. 
The console output below shows execution time and execution state. 

```bash
0s  - main.starts
3s  - mytask.ends
0s  - future.get.mytask.ends
3s  - main.ends 
```

On the other scenario when 
the actual time needed to complete the task (_THREAD_TASK_DURATION) is _longer_ than 
the pre-specified time limit for the thread (_THREAD_TASK_TIMEOUT ) 
then a timeout exception got thrown. 
The task is never completed because the future.cancel is se to be __true__. 
The console output below shows execution time and execution state.

```bash
0s  - main.starts
3s  - future.timeout.exception
3s  - future.cancel.true
3s  - main.ends 
```

Using the same scenario as above, the thread task completes 
when the future.cancel is set to be __false__.
The console output below shows execution time and execution state.

```bash
0s  - main.starts
3s  - future.timeout.exception
3s  - future.cancel.true
3s  - main.ends 
5s  - mytask.ends
```

### Detail Explanation

The key concepts is __future.get__ and __future.cancel__. 

After submitting the task, we get a Future object back. 
Next we try to get the result from this object using the get method. This method throws a few types of exceptions.

- **InterruptedException** means the current thread was interrupted while waiting.
- **ExecutionException** means the computation threw an exception.
- **TimeoutException** means the computation did not complete within our time limit.




### References

- [timeout-support-using-executorservice-and-futures](https://www.deadcoderising.com/timeout-support-using-executorservice-and-futures/)
- [How to timeout at Java Thread after the creating thread has already returned](https://stackoverflow.com/questions/54332954)

GoTo > [Top](#the-journey-is-the-reward) > [August](#august)
<pre class="">  ~ All I need is Coffee C|_| ~ </pre>


# July

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



#### Multiple Passage-Ranking Statistics (MPRS)


- Both RRF and MPRS are based on the same LTR approach, which is used to induce $D_{LTR}$.
  - For $G_{LTR}$, the previous RRF method utilizes only the highest ranked passage of a document to assign its final retrieval score. 
  - The MPRS utilizes various statistics regarding the ranking of the document's passages in $G_{LTR}$. 


The feature vector used to represent a query-document pair is:
<pre>
v(d,q) = v_{(d,q)} \oplus v'_{(d,q)}
</pre>

[//]: # ( <center><img src="m07rrf/CodeCogsEqn.svg" width="79%"></center> )

- The $v(d,q)$ is the concatenation of $v(d,q)$ and $v'(d,q)$. 
  - the original feature vector used to learn and apply the ranking function that served to induce $D_{LTR}$. 
  - $v'(d,q)$ is a vector composed of passage-based estimates.
    - The estimates are the (i) maximum, (ii) minimum, (iii) average, (iv) standard devision of score_{G_{LTR}}(g) for $g \in d$ (v) the percentage of passages in $d$ that are among the 50, (vi) 100 highest ranked passages in G_{LTR}, (vii) the number of passages in d.


The rationale behind the MPRS method is 
to augment the document-based relevance estimates 
used in the original LTR-based document retrieval method with passage-based relevance estimates. 
The MPRS approach is not dependent on the method used to produce the passage ranking in $G_{LTR}$ 
although the original document ranking was induced using an LTR approach in the MPRS approach.

 
#### Joint Document Passage Representation (JDPR)

The JDPR approach is based on the premise that 
both D_{LTR} and G_{LTR} are induced using an LTR approach.

Similar to the RRF method, 
the JPDR method uses d's passage g that is the hightest ranked in G_{LTR}.
However, we don't rely on g's rank in G_{LTR}.

Rather the feature vector $v(d,q)$ -- used in the document-based LTR method that produced $D_{LTR}$ -- 
is concatenated with the feature vector $v'(d,q)$ -- used in the passage-based LTR method that produce $G_{LTR}$. 

The resultant feature vector is used in the typical LTR approach and is used to create D_{LTR}.
<pre>
v(d,q) = v_{(d,q)} \oplus v'_{(d,q)}
</pre>

The underlying design principle of the JDPR is to avoid __metric divergence__ . 
That is the features used to estimate the relevance of the document's passage
that is presumably the most relevant -- by the ranking of G_{LTR} -- ase used directly along with the 
document-query features to learn a document ranking function. 


#### Two Stage Retrieval : First Passage Then Document (FPTD)



### References

- "Learning to Rank Documents by Learning to Rank Passages" [PDF](https://web.iem.technion.ac.il/images/user-files/orenk/IE_IS_2018_03.pdf)

```bash
@article{sheetrit2018learning,
  title={Learning to Rank Documents by Learning to Rank Passages},
  author={Sheetrit, Eilon and Shtok, Anna and Kurland, Oren},
  year={2018}
}
```


GoTo > [Top](#the-journey-is-the-reward) > [July](#july)
<pre class=""> ~  Fueled by Coffee C|_| ~ </pre>


## July References

  - [knowledgeInduction](https://researcher.watson.ibm.com/researcher/view_group_pubs.php?grp=7140)
  - A Study on Passage Re-ranking in Embedding based Unsupervised Semantic Search [PDF](https://arxiv.org/pdf/1804.08057.pdf)
  - [paper with codes](https://paperswithcode.com/)   
  - [zenodo](https://about.zenodo.org/) [Wiki](https://en.wikipedia.org/wiki/Zenodo)
  - https://webis.de/downloads/publications/papers/stein_2013l.pdf
  - https://ecommons.cornell.edu/bitstream/handle/1813/6100/93-1334.pdf
  - W._Bruce_Croft [Wiki](https://en.wikipedia.org/wiki/W._Bruce_Croft)
  - https://paperswithcode.com/task/learning-to-rank/codeless 
  - Document ranking via sentence modeling using BERT [github](https://github.com/castorini/birch)

```bash
@article{yang2019simple,
  title={Simple Applications of BERT for Ad Hoc Document Retrieval},
  author={Yang, Wei and Zhang, Haotian and Lin, Jimmy},
  journal={arXiv preprint arXiv:1903.10972},
  year={2019}
}

```
    




# Engineering


## Docker

Category | Command
--------|--------
log   | git log --graph --decorate --pretty=oneline --abbrev-commit

GoTo > [Top](#the-journey-is-the-reward) > [Engineering](#engineering) > [Docker](#docker)
<pre class=""> 
 ~ Fueled by Coffee C|_| ~
</pre>

## Git


Category | Command
--------|--------
squash   | git rebase -i HEAD~[NUMBER OF COMMITS]
         | git push origin branchName --force
log      | git log --graph --decorate --pretty=oneline --abbrev-commit


GoTo > [Top](#the-journey-is-the-reward) > [Engineering](#engineering) > [Docker](#docker)
<pre class=""> 
 ~ Fueled by Coffee C|_| ~
</pre>


# Monthly
[//]: # (This actually is the most platform independent comment)
[//]: # (git log --graph --decorate --pretty=oneline --abbrev-commit)

![picture alt](http://www.brightlightpictures.com/assets/images/portfolio/thethaw_header.jpg "Title is optional")


## Monthly Update 

### Problem

Latex equation can be included as an svg picture. Alternatively one can use codecogs

![\Large x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}](https://latex.codecogs.com/svg.latex?x%3D%5Cfrac%7B-b%5Cpm%5Csqrt%7Bb%5E2-4ac%7D%7D%7B2a%7D)



### Solution

Header1 | Header2
--------|--------
cell1   | cell2
cell3   | cell4

### References

- [asciiart](https://www.asciiart.eu/)
- Bloggers
  - [leimao](https://leimao.github.io/blog/)
  - [mincong-h](https://mincong-h.github.io/)
- Equations     
  - [quicklatex](https://quicklatex.com/)
  - [codecogs2](https://latex.codecogs.com/eqneditor/editor.php)
  - [codecogs](https://www.codecogs.com/latex/eqneditor.php)
  - [mathjax for chrome](https://chrome.google.com/webstore/detail/mathjax-for-chrome/elbbpgnifnallkilnkofjcgjeallfcfa?hl=en-GB)


GoTo > [Top](#the-journey-is-the-reward) > [Month](#monthly)
<pre class=""> ~ Fueled by Coffee C|_| ~ </pre>

## July 13


### References

- [anserini](https://github.com/castorini/anserini)
- [hical](https://hical.github.io/) [github](https://github.com/hical/HiCAL)

[//]: # https://github.com/castorini/anserini/commits/anserini-0.1.0?after=cbb815e68c4c7cac34ff0e7098a62530aa442590+295


GoTo > [Top](#the-journey-is-the-reward) > [July](#july)
<pre class=""> 
 ~ Fueled by Coffee C|_| ~
</pre>

# Tags


[^docker]: docker 

[^java]: java 

[^node]: node 

[^python]: python



GoTo > [Top](#the-journey-is-the-reward) 
