# Illinois-SL -- a Structured Learning Library in Java

##  Getting Started

Illinois-SL is a general purpose JAVA library for performing structured learning. 
It houses learning algorithms like averaged Structured Perceptron and Structured SVM with L2-Loss, and provides a minimal interface for your structured learning needs.
The training algorithm employed for training SSVM is dual coordinate descent(DCD), which has been proven to have very good convergence properties. 
Illinois-SL comes with an efficient implementation of DCD with support for multi-threading.

In this tutorial, we will walk you through installation, some simple examples on how to use this package.
## Download and Installation
You can download the Illinois-SL package from [here](http://cogcomp.cs.illinois.edu/page/software_view/illinois-sl). You can run the package out of the box, there is no need to install other packages.

```
mkdir illinois-sl
cd illinois-sl
wget http://cogcomp.cs.illinois.edu/software/illinois-sl/illinois-SL.1.3.zip
unzip illinois-SL.1.3.zip
```

If you want to use this with maven, the maven coordinates are,

```
  <repositories>
    <repository>
      <id>CogcompSoftware</id>
      <name>CogcompSoftware</name>
      <url>http://cogcomp.cs.illinois.edu/m2repo/</url>
    </repository>
  </repositories>
 ...
  <groupId>edu.illinois.cs.cogcomp</groupId>
  <version>1.3</version>		
  <artifactId>illinois-sl</artifactId>

```

### Basics
For implementating any structured learning problem, we need to implement the following classes,

1) The input structure, $\x$. This should implement the =IInstance= interface.
2) The output structure, $\y$. This should implement the =IStructure= interface.
3) A procedure to compute the feature vector $\Phi(\x,\y)$. For this you need to extned the =AbstractFeatureGenerator= class and override its =getFeatureVector= method.
4) A procedure =InferenceSolver= to perform the loss-augmented inference,
   \begin{align*}
   \argmax_{\y'} \w^T \Phi(\x,\y') + \Delta(\y,\y')
   \end{align*}
   For this you need to extend the =AbstractInferenceSolver= class.

At test time, we need to solve 
\begin{align*}
  \argmax_{\y'} \w^T \Phi(\x,\y')
\end{align*}
We will call this the MAP inference problem.
For this we can just set $\Delta(\y,\y')$ to zero in the loss-augmented inference solver.

#### Examples
  - [[./pos.html][POS Tagging]]

* References
1. Please cite the following paper when using the package:
   - K.-W. Chang, S. Upadhyay, M. Chang, V. Srikumar, D. Roth. IllinoisSL: A JAVA Library for Structured Prediction. In Arxiv, 2015 ([[illinoisSL.pdf][paper]]).
2. Other relevant papers:
   - K.-W. Chang, V. Srikumar, and D. Roth. Multi-core structural svm training. In ECML, 2013.
   - M. Chang and W.-t. Yih. Dual coordinate descent algorithms for efficient large margin structural learning. In TACL, 2013.
   - M. Chang, V. Srikumar, D. Goldwasser, and D. Roth. Structured output learning with indirect supervision. In ICML, 2010.


#### Contact
You can post your questions and comments at [illinois-ml-nlp-users@cs.uiuc.edu](mailto:illinois-ml-nlp-users@cs.uiuc.edu)
