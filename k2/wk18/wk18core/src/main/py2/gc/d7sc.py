

# [] 
import os
import sys
import time
import subprocess


# []
# "m17m", "d17m"
# "m18wk", "d18wk"
#"f1-micro","g1-small","n1-standard-1"
CX3 = {    
    "CI3_NAME":"m18c",
    "DI3_NAME":"d18c"
    }
CX4D = {
    "CI4_NAME":"m18d",
    "DI4_NAME":"d18d"
    }
# git-repo
CX7G = {
    "CI7G_NAME":"m18d",
    "DI7G_NAME":"d18g",
    "DI7G_SIZE":"70GB",
    }

CXX = {"GC_PROJECT":"api-project",
       "PJ_NAME":"api-project",
       "PJ_ID":"api-project-63688615144"
       }
CXX.update(CX3)
CXX.update(CX4D)
CXX.update(CX7G)

# []
# 
def cmd_run(sCmd, bExe=True):
    print sCmd
    if bExe:
        process = subprocess.Popen( sCmd.split(), stdout=subprocess.PIPE)
        output, error = process.communicate()
        print output
        
# [] setup
class C1010setup:        
    def doIt(self):
        sCmd = "doIt"
        cmd_run(sCmd, bExe=bRun)
  
        
# [] apache2
class C1020apache2:
    def ap2a_start(self):
        sCmd = "apache starts"
        cmd_run(sCmd, bExe=bRun)



#
ACT_ID="doIt"
#ACT_ID="ci1_scp_to_sc"
EXE_FLG=False
if __name__ == '__main__':

    actId = str(sys.argv[1]) if( len(sys.argv) > 2 ) else ACT_ID
    bRun = bool(sys.argv[2]) if( len(sys.argv) > 3 ) else EXE_FLG
    print " actId " + actId + " bRun " + str(bRun)
 
    if actId == "help":
       print dir( C1010setup() ) 
       print dir( C1020apache2() )
    else:
        if hasattr(C1010setup(),actId ): getattr(C1010setup(),actId)()
        if hasattr(C1020apache2(),actId): getattr(C1020apache2(),actId)()
         
        #try_all(act_id=actId, b_run=bRun)
  