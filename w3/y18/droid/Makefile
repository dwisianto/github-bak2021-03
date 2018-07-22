

# export PATH="$PATH:/usr/local/bin"

TGT=droid

all: bld

hlp:
	@echo "hello"
	@echo $(TGT).md
	@echo $(TGT).bib
	
gen_pdf:
	pandoc $(TGT).md -o $(TGT).pdf

gen_html:
	pandoc $(TGT).md -o $(TGT).html	

cln:
	@echo "clean"
	rm -rf $(TGT).pdf
	rm -rf $(TGT).html	
	
#	pandoc math.txt -t html -s -o test.html --mathjax=https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML -H mathjax-header-include.txt 		
bld:
	pandoc $(TGT).md  -s -o $(TGT).html -f markdown -t html5 --filter pandoc-crossref --bibliography droid.bib 
	
	
	 
	
