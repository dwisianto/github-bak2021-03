

| -------- | ------ |
| dl       | |
| sp       | |
| siteMap  | |
| bk       | |
| summ     | |


http://erthalion.info/2015/12/29/pandoc/


brew install pandoc
brew install pandoc-citeproc
brew install pandoc-crossref
pip install pandoc-eqnos
pip install pandoc-fignos
pip install pandoc-tablenos

brew tap homebrew/science
brew install Caskroom/cask/xquartz
brew install R --build-from-source


---
title  : Your Title
author : John Doe
date   : 16/06/2017
output :
    word_document:
        reference_docx: path/to/word-template.docx
        pandoc_args: ["--filter", "pandoc-fignos"]
    pdf_document:
        latex: xelatex
        fig_caption: true
        keep_tex: true
        pandoc_args: ["--filter", "pandoc-fignos"]
    beamer_presentation:
        keep_tex: true
    html_document:
        toc: yes
        highlight: tango
        number_sections: false
        pandoc_args: ["--filter", "pandoc-fignos"]
    html_notebook:
        toc: yes
        highlight: tango
        number_sections: false
        pandoc_args: ["--filter", "pandoc-fignos"]
bibliography: "path/to/biblio.bib"
csl: "path/to/nature.csl"
---

