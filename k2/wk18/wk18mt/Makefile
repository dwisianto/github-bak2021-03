
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
HM=/Users/dsm
WK=${HM}/DDb/europarl
DB=${WK}/training
DB2=$(DB)/tmp2
DB3=$(DB)/tmp3
DB4=$(DB)/tmp4

SRC=es
TGT=en
ID=europarl-v5.es-en-10k
TXT=${DB}/${ID}
TXT_SRC=$(DB)/${ID}.$(SRC)
TXT_TGT=$(DB)/${ID}.$(TGT)


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
TXT_SRC_TOK=$(DB2)/${ID}.$(SRC)
TXT_TGT_TOK=$(DB2)/${ID}.$(TGT)

scpt_token_setup:
	@if [ -d ${DB2} ]; then rm -rf ${DB2} ; fi
	mkdir ${DB2}

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

scpt_token:
	$(SCPT_TOKEN) -l $(SRC) < $(TXT_SRC) > $(TXT_SRC_TOK)
	$(SCPT_TOKEN) -l $(TGT) < $(TXT_TGT) > $(TXT_TGT_TOK)
	@echo "done" 


#
# [] 
#
SCPT_LOWER=$(SCPT)/lowercase.perl 
TXT_SRC_LOWER=$(DB3)/${ID}.$(SRC)
TXT_TGT_LOWER=$(DB3)/${ID}.$(TGT)

scpt_lower_setup:
	@echo "help"
	$(SCPT_LOWER) -help
	@if [ -d ${DB3} ]; then rm -rf ${DB3} ; fi
	mkdir ${DB3}

scpt_lower:
	$(SCPT_LOWER) < $(TXT_SRC_TOK) > $(TXT_SRC_LOWER)
	$(SCPT_LOWER) <  $(TXT_TGT_TOK) > $(TXT_TGT_LOWER)

scpt_lower_complete:
	wc $(TXT_SRC_LOWER)
	wc $(TXT_TGT_LOWER)

#
#
#
GZ_HOME=${WK}/giza-pp
GZ_BIN_GIZAPP=$(GZ_HOME)/GIZA++-v2/GIZA++ 
GZ_BIN_SNT2PLAIN=$(GZ_HOME)/GIZA++-v2/snt2plain.out 
GZ_BIN_PLAIN2SNT=$(GZ_HOME)/GIZA++-v2/plain2snt.out 
GZ_BIN_SNT2COOC=$(GZ_HOME)/GIZA++-v2/snt2cooc.out 
GZ_BIN_MKCLS=$(GZ_HOME)/mkcls-v2/mkcls

gz_clone:
	git clone git@github.com:moses-smt/giza-pp.git

gz_install:
	cd ${GZ_HOME}; perl -pi -w -e 's/<tr1\//</g;' GIZA++-v2/* mkcls-v2/*
	cd ${GZ_HOME}; perl -pi -w -e 's/using namespace std::tr1;//g;' GIZA++-v2/* mkcls-v2/*
	cd ${GZ_HOME}; perl -pi -w -e 's/std::tr1:://g;' GIZA++-v2/* mkcls-v2/*
	cd ${GZ_HOME}; sed '36d' mkcls-v2/mystl.h > mkcls-v2/mystl.h.tmp
	cd ${GZ_HOME}; sed '50d' mkcls-v2/mystl.h.tmp > mkcls-v2/mystl.h
	cd ${GZ_HOME}; rm mkcls-v2/mystl.h.tmp
	cd ${GZ_HOME}; make

gz_check:
	@if [ -e ${GZ_BIN_GIZAPP} ]; then du ${GZ_BIN_GIZAPP} ; fi
	@if [ -e ${GZ_BIN_SNT2PLAIN} ]; then du ${GZ_BIN_SNT2PLAIN} ; fi
	@if [ -e ${GZ_BIN_PLAIN2SNT} ]; then du ${GZ_BIN_PLAIN2SNT} ; fi
	@if [ -e ${GZ_BIN_MKCLS} ]; then du ${GZ_BIN_MKCLS} ; fi


# The vocab files contain a unique (integer) ID for each word in the text  (NB: not tokenized/lemmatized), 
# the word/string, and the number of times that string occurred. 
# These are separated by a single space character.
gz_s1_in:
	@wc $(TXT_SRC_LOWER)
	@wc $(TXT_TGT_LOWER)

gz_s1_run:
	echo ${GZ_BIN_PLAIN2SNT} $(TXT_SRC_LOWER) $(TXT_TGT_LOWER)
	${GZ_BIN_PLAIN2SNT} $(TXT_SRC_LOWER) $(TXT_TGT_LOWER)


# europarl-v5.es-en.en.vcb
# europarl-v5.es-en.en_europarl-v5.es-en.es.snt
# europarl-v5.es-en.es
# europarl-v5.es-en.es.vcb
# europarl-v5.es-en.es_europarl-v5.es-en.en.snt
GZ_S1_LOC=${DB3}
GZ_S1_SRC_VCB=${ID}.${SRC}.vcb
GZ_S1_TGT_VCB=${ID}.${TGT}.vcb
GZ_S1_SRC_TGT=${ID}.${SRC}_${ID}.${TGT}.snt
GZ_S1_TGT_SRC=${ID}.${TGT}_${ID}.${SRC}.snt
gz_s1_out:
	@echo ${GZ_S1_LOC}
	@echo ${GZ_S1_SRC_VCB}
	@echo ${GZ_S1_TGT_VCB}
	@echo ${GZ_S1_SRC_TGT}
	@echo ${GZ_S1_TGT_SRC}
	@if [ -e ${GZ_S1_LOC}/${GZ_S1_SRC_VCB} ]; then du ${GZ_S1_LOC}/${GZ_S1_SRC_VCB} ; fi
	@if [ -e ${GZ_S1_LOC}/${GZ_S1_TGT_VCB} ]; then du ${GZ_S1_LOC}/${GZ_S1_TGT_VCB} ; fi
	@if [ -e ${GZ_S1_LOC}/${GZ_S1_TGT_SRC} ]; then du ${GZ_S1_LOC}/${GZ_S1_TGT_SRC} ; fi
	@if [ -e ${GZ_S1_LOC}/${GZ_S1_SRC_TGT} ]; then du ${GZ_S1_LOC}/${GZ_S1_SRC_TGT} ; fi

# Then run mkcls which is a program to automatically 
# infer word classes from a corpus using a maximum likelihood criterion
#
#
GZ_S2_LOC=${DB3}
GZ_S2_SRC_VCB_CLS=${ID}.${SRC}.vcb.cls
GZ_S2_SRC_VCB_CLS_CAT=${ID}.${SRC}.vcb.cls.cat
GZ_S2_TGT_VCB_CLS=${ID}.${TGT}.vcb.cls
GZ_S2_TGT_VCB_CLS_CAT=${ID}.${TGT}.vcb.cls.cat
gz_s2_run:
	@echo ${GZ_BIN_MKCLS}
	${GZ_BIN_MKCLS} -p $(TXT_SRC_LOWER) -V ${GZ_S2_LOC}/${GZ_S2_SRC_VCB_CLS}
	${GZ_BIN_MKCLS} -p $(TXT_TGT_LOWER) -V ${GZ_S2_LOC}/${GZ_S2_TGT_VCB_CLS}



# SNT2COOC
# BIN:
#   GZ_BIN_SNT2COOC=$(GZ_HOME)/GIZA++-v2/snt2cooc.out 
# IN:
#   GZ_S1_SRC_VCB=${ID}.${SRC}.vcb
#   GZ_S1_TGT_VCB=${ID}.${TGT}.vcb
#   GZ_S1_SRC_TGT=${ID}.${SRC}_${ID}.${TGT}.snt
#   GZ_S1_TGT_SRC=${ID}.${TGT}_${ID}.${SRC}.snt
# OUT:
#   GZ_S3_SRC_COOC=${ID}.${SRC}
#   GZ_S3_TGT_COOC=${ID}.${TGT}
GZ_S3_LOC=${DB4}
GZ_S3_COOC_SRC_TGT=${ID}.${SRC}.${TGT}.cooc
GZ_S3_COOC_TGT_SRC=${ID}.${TGT}.${SRC}.cooc
giza_s3cooc_setup:
	@echo IN
	@echo ${GZ_S1_SRC_VCB}
	@echo ${GZ_S1_TGT_VCB}
	@echo ${GZ_S1_SRC_TGT}
	@echo ${GZ_S1_TGT_SRC}
	@echo 
	@echo ${GZ_S3_LOC}
	@echo ${GZ_BIN_SNT2COOC}
	@echo ${GZ_S3_COOC_SRC_TGT}
	@echo ${GZ_S3_COOC_TGT_SRC}

giza_s3cooc_run:
	${GZ_BIN_SNT2COOC} ${GZ_S1_SRC_VCB} ${GZ_S1_TGT_VCB}
	${GZ_BIN_SNT2COOC} ${GZ_S1_TGT_VCB} ${GZ_S1_SRC_VCB} 








#./GIZA++ -S [target_language_corpus].vcb 
#         -T [source_language_corpus].vcb 
#         -C [target_language_corpus]_[source_language_corpus].snt 
#         -o [prefix] 
#         -outputpath [output_folder]
gz_s4_run:
	${GZ_BIN_GIZAPP} \
	-S ${GZ_S1_LOC}/${GZ_S1_SRC_VCB} \
	-T ${GZ_S1_LOC}/${GZ_S1_TGT_VCB} \
	-C ${GZ_S1_LOC}/${GZ_S1_SRC_TGT} \
	-o out.${SRC}.${TGT} \
	-outputpath ${DB4} \








#
#
#
SRILM_HOME=${HM}/DGitBee/d.nlg.xnn/srilm/s170b/bin/macosx
SRILM_EXE=$(SRILM_HOME)
lm_help:
	@echo $(SRILM_EXE)/ngram-count




ORDER=3
TXT_SRC_LM=$(DB3)/${ID}.$(SRC).lm
TXT_TGT_LM=$(DB3)/${ID}.$(TGT).lm
TXT_SRC_CNT=$(DB3)/${ID}.$(SRC).cnt
TXT_TGT_CNT=$(DB3)/${ID}.$(TGT).cnt
SRILM=${SRILM_HOME}/ngram-count
lm_cnt:
	$(SRILM) -text ${TXT_SRC_LOWER} -order $(ORDER) -write ${TXT_SRC_CNT}
	$(SRILM) -text ${TXT_TGT_LOWER} -order $(ORDER) -write ${TXT_TGT_CNT}

lm_trn:
	$(SRILM) -text ${TXT_SRC_LOWER} -order $(ORDER) -addsmooth 0 -lm $(TXT_SRC_LM).${ORDER}
	$(SRILM) -text ${TXT_TGT_LOWER} -order $(ORDER) -addsmooth 0 -lm $(TXT_TGT_LM).${ORDER}


help_lm:
	@echo ${COUNT}

