#
# https://stackoverflow.com/questions/4779582/markdown-and-including-multiple-files


IN_SECTION=section
OUT_NAME=final
OUT_HTML=$(OUT_NAME).html
OUT_PDF=$(OUT_NAME).pdf
all: comp

comp:
	pandoc -s --bibliography biblio.bib --filter pandoc-citeproc $(IN_SECTION)/*.md -o $(OUT_HTML)
	pandoc --bibliography biblio.bib --filter pandoc-citeproc $(IN_SECTION)/*.md --pdf-engine=xelatex -o $(OUT_PDF)




ieee:
	pandoc -s --bibliography biblio.bib --filter pandoc-citeproc --csl ieee.csl *.md -t man -o $(OUT_HTML)

clean:
	find ./ -name "*~" -delete
	find ./ -name "*.html" -delete
	find ./ -name "*.pdf" -delete
