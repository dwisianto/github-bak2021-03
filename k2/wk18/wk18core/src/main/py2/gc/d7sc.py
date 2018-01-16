
#
# []
# 
import os
import sys
import time
import types # checking for class object
import subprocess

#
# []
# "m17m", "d17m"
# "m18wk", "d18wk"
#"f1-micro","g1-small","n1-standard-1"
C_3C = {    
    "CI3_NAME":"m18c",
    "DI3_NAME":"d18c"
    }

# git-repo
C_7G = {
    "CI7G_NAME":"m18d",
    "DI7G_NAME":"d18g",
    "DI7G_SIZE":"70GB",
    }

CXX = {"GC_PROJECT":"api-project",
       "PJ_NAME":"api-project",
       "PJ_ID":"api-project-63688615144"
       }
CXX.update(C_3C)
CXX.update(C_7G)


#
# []
# 
def cmd_run(sCmd, bExe=True):
    print sCmd
    if bExe:
        process = subprocess.Popen( sCmd.split(), stdout=subprocess.PIPE)
        output, error = process.communicate()
        print output
        
# [] common
class C1010common:        
    def os_ls(self):
        sCmd = "ls"
        cmd_run(sCmd, bExe=bRun)
        
# [] specific
class C1020specific:
    def sp_user(self):
        sCmd = "echo "+CXX.get("PJ_NAME")
        cmd_run(sCmd, bExe=bRun)



"""
[] help, dummy, 
"""
ACT_ID="sp_user"
EXE_FLG=False
if __name__ == '__main__':
    
    # [] 
    actId = str(sys.argv[1]) if( len(sys.argv) > 2 ) else ACT_ID
    bRun = bool(sys.argv[2]) if( len(sys.argv) > 3 ) else EXE_FLG
    print " - actId " + actId + " bRun " + str(bRun)

    # [] Creating  CLS_LST=[ C1010common, C1020specific ]
    clsLst = list()
    for k,v in globals().items():
        #print k, ":"," - ",type(v), "\t", isinstance(v, types.ClassType )
        if isinstance(v, types.ClassType ):
            clsLst.append(eval(k))  
    #print clsLst  

    # []
    #print type( kls )
    if actId == "help":
        for kls in clsLst:
            print dir( kls() )
    else:     
        for kls in clsLst:
            if hasattr(kls(),actId):
                getattr(kls(),actId)()
