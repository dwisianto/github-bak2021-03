

# Introduction

Structured Output Prediction is for predicting multivariate or structured outputs. It performs supervised learning by approximating a mapping
$$
h: X -> Y
$$




# Equation Numbering

[pandoc-eqnos](https://github.com/tomduck/pandoc-eqnos)


To mark an equation for numbering, add an identifier to its attributes:

$$ y = mx + b $$ {#eq:id}

The prefix #eq: is required. id should be replaced with a unique string composed of letters, numbers, dashes and underscores. If id is omitted then the equation will be numbered but unreferenceable.

To reference the equation, use
```
@eq:id
```
for example we can reference the equation *@eq:id by doing this  or
```
{@eq:id}
```
Curly braces around a reference are stripped from the output.


## Researchers


[Dr. Sebastian Nowozin](http://www.nowozin.net/sebastian/)
[Dr. Sebastian Nowozin](http://www.nowozin.net/sebastian/)

## Tutorial


| column | column |
|--------|--------|
| [nowozin](http://pub.ist.ac.at/~chl/papers/nowozin-fnt2011.pdf) | |





## Softwares

| column | column |
|--------|--------|
| [illinois_sl](http://cogcomp.org/software/illinois-sl/) |      |



# Pandoc with citeproc-hs

-   @item1 says blah.

-   @item1 [p. 30] says blah.

-   @item1 [p. 30, with suffix] says blah.

-   @item1 [-@item2 p. 30; see also @item3] says blah.

-   In a note.[^1]

-   A citation group [see @item1 p. 34-35; also @item3 chap. 3].

-   Another one [see @item1 p. 34-35].

-   And another one in a note.[^2]

-   Citation with a suffix and locator [@item1 pp. 33, 35-37, and nowhere else].

-   Citation with suffix only [@item1 and nowhere else].

-   Now some modifiers.[^3]

-   With some markup [*see* @item1 p. **32**].

# References

[^1]: A citation without locators [@item3].

[^2]: Some citations [see @item2 chap. 3; @item3; @item1].

[^3]: Like a citation without author: [-@item1], and now Doe with a locator [-@item2 p. 44].
