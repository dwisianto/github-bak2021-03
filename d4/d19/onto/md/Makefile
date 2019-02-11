#
# https://stackoverflow.com/questions/4779582/markdown-and-including-multiple-files
# https://stackoverflow.com/questions/15402512/whole-site-compilation-of-markdown-pandoc/21405851#21405851
# 


IN_BIB=onto.bib
IN_SECTION=section
OUT_NAME=final
OUT_HTML=$(OUT_NAME).html
OUT_PDF=$(OUT_NAME).pdf
PANDOC_FLAG_HTML=--table-of-contents --toc-depth=2 --standalone
PANDOC_FLAG_PDF=--table-of-contents --toc-depth=2 --pdf-engine=xelatex
all: comp

comp: clean
	pandoc $(PANDOC_FLAG_HTML) --bibliography $(IN_BIB) --filter pandoc-citeproc $(IN_SECTION)/*.md -o $(OUT_HTML)
	pandoc $(PANDOC_FLAG_PDF) --bibliography $(IN_BIB) --filter pandoc-citeproc $(IN_SECTION)/*.md  -o $(OUT_PDF)

ieee: clean
	pandoc -s --bibliography $(IN_BIB) --filter pandoc-citeproc --csl ieee.csl *.md -t man -o $(OUT_HTML)

clean:
	find ./ -name "*~" -delete
	find ./ -name "*.html" -delete
	find ./ -name "*.pdf" -delete
	find ./ -name "*.bak" -delete

