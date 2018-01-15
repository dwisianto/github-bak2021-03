
# []
import os
import sys
import time
import subprocess

# []
CX1 = {
    "CI1_NAME":"m1a"
    }
CXX = {"GC_PROJECT":"api-project",
#       "GC":"/Users/dsm/DSc/google-cloud-sdk/bin/gcloud",
       "GC":"/Users/liy19/D7Sc/u0/gcp/sdk17x/bin/gcloud",
}
CXX.update(CX1)
#
# https://cloud.google.com/compute/docs/instances/create-start-instance
#
# https://cloud.google.com/sdk/gcloud/reference/compute/scp
# https://cloud.google.com/sdk/gcloud/reference/compute/ssh
def gcp_bin_exe_cmd(sCmd, bExe=True):
    print sCmd
    if bExe:
        process = subprocess.Popen( sCmd.split(), stdout=subprocess.PIPE)
        output, error = process.communicate()
        print output


def gcp_ce_lst_img():
    sCmd = GC
    sCmd += " compute images list"
    gcp_bin_exe_cmd(sCmd)

def gcp_ce_lst_machine():
    sCmd = GC
    sCmd += " compute machine-types list"
    gcp_bin_exe_cmd(sCmd)

def gcp_ce_lst_firewall_rule():
    sCmd = GC
    sCmd += " compute firewall-rules list"
    gcp_bin_exe_cmd(sCmd)


CI_NAME="m17m"
CI_MACHINE_TYPE="n1-standard-1" #"f1-micro"
CI_IMAGE_FAMILY="ubuntu-1604-lts"
CI_IMAGE_PROJECT="ubuntu-os-cloud"
CI_ZONE_ID="us-east4-a"

def gcp_ci_create():
    sCmd = GC
    sCmd += " compute instances create "+CI_NAME
    sCmd += " --image-family "+CI_IMAGE_FAMILY
    sCmd += " --image-project "+CI_IMAGE_PROJECT
    sCmd += " --machine-type "+CI_MACHINE_TYPE
    sCmd += " --zone "+CI_ZONE_ID
    sCmd += " --tags http-server,https-server,vnc-allow"
    gcp_bin_exe_cmd(sCmd)

def gcp_ci_delete():
    sCmd = GC
    sCmd += " compute instances stop "+CI_NAME
    sCmd += " --zone "+CI_ZONE_ID
    gcp_bin_exe_cmd(sCmd)

def gcp_ci_start():
    sCmd = GC
    sCmd += " compute instances start "+CI_NAME
    sCmd += " --zone "+CI_ZONE_ID
    gcp_bin_exe_cmd(sCmd)

def gcp_ci_stop():
    sCmd = GC
    sCmd += " compute instances stop "+CI_NAME
    sCmd += " --zone "+CI_ZONE_ID
    gcp_bin_exe_cmd(sCmd)
    
# https://stackoverflow.com/questions/35590641/what-is-the-gcloud-command-to-allow-http-traffic-on-a-vm-instance-its-not-cre    
# gcloud compute instances add-tags [YOUR_INSTANCE_NAME] --tags http-server,https-server
def gcp_ci_addtag_http():
    sCmd = GC
    sCmd += " compute instances add-tags "+CI_NAME
    sCmd += "  --tags http-server,https-server,vnc-allow " 
    sCmd += " --zone "+CI_ZONE_ID
    gcp_bin_exe_cmd(sCmd)    


CI_USERNAME="dwisianto"
def gcp_c_ssh():
    sCmd = GC
    sCmd += " compute ssh "+CI_USERNAME
    sCmd += "@"+CI_NAME
    sCmd += " --zone "+CI_ZONE_ID
    gcp_bin_exe_cmd(sCmd,False)




CI_SCP_FROM_FILE=""
def gcp_c_scp_from():
    sCmd = GC
    sCmd += " compute scp "
    sCmd += " "+CI_USERNAME
    sCmd += "@"+CI_NAME
    sCmd += ":"+CI_SCP_FROM_FILE
    sCmd += " ~/DSc/"
    sCmd += " --zone "+CI_ZONE_ID
    gcp_bin_exe_cmd(sCmd)

CI_SCP_TO_FILE="/Users/dsm/DGit/y17bee/w1_cli/d3.phrasal.detect/src/main/py2/gc/m1b.py"
CI_SCP_TO_FILE_VNC_X="/Users/dsm/DGit/y17bee/w1_cli/d3.phrasal.detect/src/main/py2/gc/dot_vnc_xstartup"
def gcp_c_scp_to_m1b():
    gcp_c_scp_to(CI_SCP_TO_FILE)

def gcp_c_scp_to_vnc_xstartup():
    gcp_c_scp_to(CI_SCP_TO_FILE_VNC_X)    


def gcp_c_scp_to(aFileName):
    sCmd = GC
    sCmd += " compute scp "
    sCmd += " "+aFileName
    sCmd += " "+CI_USERNAME
    sCmd += "@"+CI_NAME
    sCmd += ":~/"
    sCmd += " --zone "+CI_ZONE_ID
    gcp_bin_exe_cmd(sCmd)




ACT_ID=215
ACT_DICT = {
201 : gcp_ce_lst_img,
202 : gcp_ce_lst_machine,
203 : gcp_ce_lst_firewall_rule,
212 : gcp_ci_create,
213 : gcp_ci_delete,
214 : gcp_ci_start,
215 : gcp_ci_stop,
216 : gcp_ci_addtag_http,
222 : gcp_c_ssh,
223 : gcp_c_scp_to_m1b,
224 : gcp_c_scp_to_vnc_xstartup,
225 : gcp_c_scp_from
}  
if __name__ == '__main__':
    actId=ACT_ID
    if( len(sys.argv) == 2 ):
        actId=int(sys.argv[1])

    print " GC - "+ GC
    print " Id - "+ str(ACT_DICT[actId])
    ACT_DICT[actId]
