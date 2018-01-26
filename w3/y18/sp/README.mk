

TGT=README

all: gen_html

gen_pdf:
	pandoc $(TGT).md -o $(TGT).pdf

gen_html:
	pandoc $(TGT).md -o $(TGT).html	

cln:
	rm -rf $(TGT).pdf
	rm -rf $(TGT).html	
