``` c
/*

BIAS-VARIANCE DECOMPOSITION FOR ZERO-ONE LOSS

Version 1.0

Pedro Domingos
Department of Computer Science and Engineering
University of Washington
Box 352350
Seattle, WA 98195-2350
pedrod@cs.washington.edu

April 18, 2000


The C functions in this file implement the bias-variance decomposition for
zero-one loss described in the paper "A Unified Bias-Variance Decomposition."
Zero noise is assumed. biasvar() computes the average zero-one loss, bias, net
variance, and components of the variance on a test set of examples. biasvarx()
computes the loss, bias and variance on an individual example.


biasvar() has the following parameters:

classes:  a vector containing the actual classes of the test examples,
          represented as integers; classes[i] is the class of test example i

preds:    an array where preds[i][j] is the class predicted for example i
          by the classifier learned on training set j; classes are represented
          as integers, consistent with those used in the classes vector

ntestexs: the number of test examples used

ntrsets:  the number of training sets used

loss:     pointer to a float where the average loss is returned

bias:     pointer to a float where the average bias is returned

var:      pointer to a float where the net variance is returned

varp:     pointer to a float where the average contribution to variance
          from unbiased examples is returned

varn:     pointer to a float where the average contribution to variance
          from biased examples is returned

varc:     pointer to a float where the average contribution to variance from
          biased examples is returned, with the variance from each example
          weighted by the probability that the class predicted for the example
          is the optimal prediction, given that it is not the main
          prediction. (In multiclass domains, the net variance is equal to
          varp - varc, not varp - varn.)


biasvarx() has the following parameters:

classx:   the actual class of the example, represented as an integer

predsx:   a vector where predsx[j] is the class predicted for the
          example by the classifier learned on training set j; classes are
          represented as integers, consistent with classx

ntrsets:  the number of training sets used

lossx:    pointer to a float where the loss on the example is returned

biasx:    pointer to a float where the bias on the example is returned

varx:     pointer to a float where the variance on the example is returned


Copyright (C) 2000 Pedro Domingos

This code is free software; you can redistribute it and/or modify it under
the terms of the GNU Lesser General Public License as published by the Free
Software Foundation. See http://www.gnu.org/copyleft/lesser.html.

This code is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more
details.

*/


#define MaxTestExs 10000
#define MaxTrSets 100
#define MaxClasses 100

biasvar(classes, preds, ntestexs, ntrsets, loss, bias, var, varp, varn, varc)
int classes[MaxTestExs], preds[MaxTestExs][MaxTrSets], ntestexs, ntrsets;
float *loss, *bias, *var, *varp, *varn, *varc;
{
  int e;
  float lossx, biasx, varx;

  *loss = 0.0;
  *bias = 0.0;
  *varp = 0.0;
  *varn = 0.0;
  *varc = 0.0;
  for (e = 0; e < ntestexs; e++) {
    biasvarx(classes[e], &preds[e], ntrsets, &lossx, &biasx, &varx);
    *loss += lossx;
    *bias += biasx;
    if (biasx != 0.0) {
      *varn += varx;
      *varc += 1.0;
      *varc -= lossx;
    }
    else
      *varp += varx;
  }
  *loss /= ntestexs;
  *bias /= ntestexs;
  *var = *loss - *bias;
  *varp /= ntestexs;
  *varn /= ntestexs;
  *varc /= ntestexs;
}

biasvarx(classx, predsx, ntrsets, lossx, biasx, varx)
int classx, predsx[MaxTrSets], ntrsets;
float *lossx, *biasx, *varx;
{
  int c, t, nclass[MaxClasses], majclass = -1, nmax = 0;

  for (c = 0; c < MaxClasses; c++)
    nclass[c] = 0;
  for (t = 0; t < ntrsets; t++)
    nclass[predsx[t]]++;
  for (c = 0; c < MaxClasses; c++)
    if (nclass[c] > nmax) {
      majclass = c;
      nmax = nclass[c];
    }
  *lossx = 1.0 - (float)nclass[classx] / ntrsets;
  *biasx = (float)(majclass != classx);
  *varx = 1.0 - (float)nclass[majclass] / ntrsets;
}

#undef MaxTestExs
#undef MaxTrSets
#undef MaxClasses
```
