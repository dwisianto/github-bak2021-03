

# 
TGT=b19
SRC_1908 := b1908
SRC_1907 := b1907
SRC_DIR := b1908
SRC_FILES := $(sort $(wildcard $(SRC_DIR)/*.md))
all:
	pandoc $(SRC_DIR).md $(SRC_FILES) \
-c $(TGT).css \
-s --mathjax \
--bibliography $(TGT).bib \
--filter pandoc-citeproc \
-o $(TGT).html   
