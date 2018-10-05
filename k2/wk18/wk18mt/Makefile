
all: help

help:
	@echo make all
	@echo make help_data
	@echo make help_scpt
	@echo make help_giza
	@echo make help_lm


#
#
#
WK=/Users/dsm/DDb/europarl
DB=/Users/dsm/DDb/europarl/training
DB2=$(DB)/tmp2
DB3=$(DB)/tmp3
DB4=$(DB)/tmp4

SRC=es
TGT=en
TXT=$(DB)/europarl-v5.es-en
TXT_SRC=$(DB)/europarl-v5.es-en.$(SRC)
TXT_TGT=$(DB)/europarl-v5.es-en.$(TGT)


help_db:
	@echo ${DB2}
	@echo ${DB3}
	@echo ${DB4}
	@echo TXT_SRC : ${TXT_SRC}
	@echo TXT_TGT : ${TXT_TGT}


#
#
#
SCPT=$(WK)/scripts



#
#
#
SCPT_TOKEN=$(SCPT)/tokenizer.perl 
TXT_SRC_TOK=$(DB2)/europarl-v5.es-en.$(SRC)
TXT_TGT_TOK=$(DB2)/europarl-v5.es-en.$(TGT)
scpt_token:
	$(SCPT_TOKEN) -l $(SRC) < $(TXT_SRC) > $(TXT_SRC_TOK)
	$(SCPT_TOKEN) -l $(TGT) < $(TXT_TGT) > $(TXT_TGT_TOK)
	@echo "done" 

scpt_token_str:
	@echo
	@echo $(SRC)  
	@echo $(TXT_SRC)
	@echo $(TXT_SRC_TOK)
	@echo
	@echo $(TGT)  
	@echo $(TXT_TGT) 
	@echo $(TXT_TGT_TOK)
	@echo 
	@echo $(SCPT_TOKEN)
	@echo $(SCPT_TOKEN)
	@echo

scpt_token_setup:
	@if [ -d ${DB2} ]; then rm -rf ${DB2} ; fi
	mkdir ${DB2}

SCPT_LOWER=$(SCPT)/lowercase.perl 

TXT_SRC_LOWER=$(DB3)/europarl-v5.es-en.$(SRC)
TXT_TGT_LOWER=$(DB3)/europarl-v5.es-en.$(TGT)
scpt_lower:
	$(SCPT_LOWER)  $(TXT_SRC_TOK) > $(TXT_SRC_LOWER)
	$(SCPT_LOWER)  $(TXT_TGT_TOK) > $(TXT_TGT_LOWER)

scpt_lower_setup:
	@if [ -d ${DB3} ]; then rm -rf ${DB3} ; fi
	mkdir ${DB3}


help_scpt:
	@echo "help"
	$(SCPT_LOWER) -help

#
#
#
GZ_HOME=/Users/dsm/DDb/europarl/giza-pp
GZ_BIN_SNT2PLAIN=$(GZ_HOME)/GIZA++-v2/snt2plain.out 
GZ_BIN_SNT=$(GZ_HOME)/GIZA++-v2/snt2plain.out 

gz_clone:
	git clone git@github.com:moses-smt/giza-pp.git
gz_install:
	cd giza-pp; perl -pi -w -e 's/<tr1\//</g;' GIZA++-v2/* mkcls-v2/*
	cd giza-pp; perl -pi -w -e 's/using namespace std::tr1;//g;' GIZA++-v2/* mkcls-v2/*
	cd giza-pp; perl -pi -w -e 's/std::tr1:://g;' GIZA++-v2/* mkcls-v2/*
	cd giza-pp; sed '36d' mkcls-v2/mystl.h > mkcls-v2/mystl.h.tmp
	cd giza-pp; sed '50d' mkcls-v2/mystl.h.tmp > mkcls-v2/mystl.h
	cd giza-pp; rm mkcls-v2/mystl.h.tmp
	cd giza-pp; make

gz_help:
	@echo ${GZ_BIN_SNT}
	@echo ${GZ_BIN_SNT2PLAIN}

#
#
#
SRILM_HOME=/Users/dsm/DGitBee/d.nlg.xnn/srilm/s170b/bin/macosx
SRILM_EXE=$(SRILM_HOME)
lm_help:
	@echo $(SRILM_EXE)/ngram-count

OUT_LM=ngram2
COUNT=ngram.count
ORDER=2
TEXT=/Users/dsm/DDb/europarl/training/europarl-v5.es-en.es
SRILM=/Users/dsm/DGitBee/d.nlg.xnn/srilm/s170b/bin/macosx/ngram-count
lm_cnt:
	rm -f $(COUNT)
	$(SRILM) -text $(TEXT) -order $(ORDER) -write $(COUNT)

lm_trn:
	rm -f $(OUT_LM)
	$(SRILM) -text $(TEXT) -order $(ORDER) -addsmooth 0 -lm $(OUT_LM)

help_lm:
	@echo ${COUNT}

