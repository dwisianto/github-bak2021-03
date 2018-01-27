TGT=README

all: gen_html

viz:
	open -a preview $(TGT).pdf

gen_pdf: gen_pdf_bib1_csl

gen_pdf_raw:
		pandoc $(TGT).md -o $(TGT).pdf

gen_pdf_bib1_csl:
		pandoc -s --filter pandoc-eqnos --bibliography $(TGT).bib --filter pandoc-citeproc --csl ieee.csl $(TGT).md -o $(TGT).pdf

gen_pdf_bib1:
		pandoc -s --bibliography $(TGT).bib --filter pandoc-citeproc $(TGT).md -o $(TGT).pdf

gen_pdf_bib2:
		pandoc -s --bibliography $(TGT).bib --filter pandoc-citeproc $(TGT).md -o $(TGT).pdf

gen_pdf_bib3:
		pandoc -s --bibliography $(TGT).bib --filter pandoc-citeproc $(TGT).md -o $(TGT).pdf

gen_html:
	pandoc $(TGT).md -o $(TGT).html

cln:
	rm -rf $(TGT).pdf
	rm -rf $(TGT).html
