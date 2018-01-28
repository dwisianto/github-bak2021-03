
import os
import sys
import pickle
import encoder
import features
from svm import SvmSolver

C = [0.1]
T = [0.1]
MAX_I = 10


TRAIN_FILE   = "dev.tags"
OUTPUT_FILE  = "output_dev_asgd3000.tags"
TEST_FILE    = "test"
GOLD_FILE    = "test.tags"



        
# Read data
print("read data : "+TRAIN_FILE)
input_fl = open(TRAIN_FILE, "rb")
transformer = encoder.InputTransformer()
train = transformer.annotate(input_fl,tagged=True)
input_fl.close()
tag_set = list(transformer.tags)
print len(tag_set)
print len(transformer.tags)
print len(transformer.words)
print transformer.tags
print transformer.words

# 
"""
annotationCtr=0
for annotation in train:
    annotationCtr=annotationCtr+1
    print annotationCtr
    #print len(annotation)
    tokenCtr=0
    for aToken in annotation:
        tokenCtr +=1
        print str(tokenCtr) + " - " + str(aToken)
"""
    
# 1. Define feature set


# Learn explicit features
print("learn features")
feature_set = [
    features.F_T_WW(),
    features.F_T_W(),
    features.F_T_T(),
    features.F_T_C(),
    features.F_T_P(),
    features.F_T_SUF(),
    features.F_T_WORDLEN(),
    features.F_T_POSITION(),
    features.F_T_PUNCT(),
    features.F_T_DIGIT(),
]
features.learn_feature_dicts(feature_set, train)


        
# Learn explicit features
#print("learn features")
#features.learn_feature_dicts(feature_set, train)