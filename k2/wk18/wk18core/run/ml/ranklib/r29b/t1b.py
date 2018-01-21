
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
# 
# java -cp ./target/classes/ ciir.umass.edu.eval.Evaluator
C29B = {    
    "CIIR_EVAL":"ciir.umass.edu.eval.Evaluator"
    }

CXX = {"PJ_LOC":"/Users/dsm/DGit/dwisianto.github.io/k2/wk18/",
       "PJ_NAME":"wk18core",
       }
CXX.update(C29B)

#
# []
# 
def cmd_run(sCmd, bExe=True):
    print sCmd
    if bExe:
        process = subprocess.Popen( sCmd.split(), stdout=subprocess.PIPE)
        output, error = process.communicate()
        print output
        
def cmd_all(act):
    for kls in CLS_LST:
            if hasattr(kls(),act):
                getattr(kls(),act)()

# [] common
class C1010common:        
    def os_ls(self):
        sCmd = "ls"
        cmd_run(sCmd, bExe=bRun)
        
# [] ciir
class C1020ciir:
    def ciir_echo(self):
        sCmd = "echo "+CXX.get("PJ_LOC")
        cmd_run(sCmd, bExe=bRun)
        sCmd = "echo "+CXX.get("PJ_NAME")
        cmd_run(sCmd, bExe=bRun)
        sCmd = "echo "+CXX.get("CIIR_EVAL")
        cmd_run(sCmd, bExe=bRun)
    def ciir_help(self):
        sCmd =" java -cp "
        sCmd += CXX.get("PJ_LOC")+"/"+CXX.get("PJ_NAME")+"/target/classes "
        sCmd += CXX.get("CIIR_EVAL")
        cmd_run(sCmd, bExe=bRun)
        

# [] composite
class C1030complex:
    def cx_all(self):
        actLst = ["sp_user","os_ls"]
        for anAct in actLst:
            cmd_all(anAct)

"""
[] help, dummy, 
"""
ACT_ID="ciir_help"
EXE_FLG=True
CLS_LST=[] # CLS_LST=list()
if __name__ == '__main__':
    
    # [] 
    actId = str(sys.argv[1]) if( len(sys.argv) > 2 ) else ACT_ID
    bRun = bool(sys.argv[2]) if( len(sys.argv) > 3 ) else EXE_FLG
    print " - actId " + actId + " bRun " + str(bRun)

    # [] Creating  CLS_LST=[ C1010common, C1020specific ]
    #print k, ":"," - ",type(v), "\t", isinstance(v, types.ClassType )
    #print clsLst  
    CLS_LST = list()
    for k,v in globals().items():        
        if isinstance(v, types.ClassType ):
            CLS_LST.append(eval(k))  

    # []
    #print type( kls )
    if actId == "help":
        for kls in CLS_LST:
            print dir( kls() )
    else:     
        cmd_all(actId)
