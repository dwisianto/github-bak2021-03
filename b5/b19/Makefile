
# 
TGT=b19

DIR09 := m09/
DIR08 := m08/
DIR07 := m07/
DIR06 := m06/

FILE09 := $(DIR09)
FILE08 := $(DIR08)b190817maven.md $(DIR08)b190816devenv.md $(DIR08)b190809ebcli.md $(DIR08)b190808awscli.md $(DIR08)b190806logging.md $(DIR08)b190817.md $(DIR08)b190803.md  
FILE07 := $(DIR07)b190704passage.md $(DIR07)b1907cite.md
FILE06 := $(DIR06)b1906math.md
 

SRC_FILES := $(FILE08) $(FILE07) $(FILE06)
all:
	pandoc $(TGT).md $(SRC_FILES) \
-c $(TGT).css \
-s --mathjax \
--bibliography $(TGT).bib \
--filter pandoc-citeproc \
-o $(TGT).html   
