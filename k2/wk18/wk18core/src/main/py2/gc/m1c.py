#
# machines:
#  k - production 
#  w - development work
#  s - snapshot
#  y - yuan
#

# [] 
import os
import sys
import time
import subprocess

#
# http://isb-cancer-genomics-cloud.readthedocs.io/en/latest/sections/progapi/Compute-Engine.html
#        

# []
# "m17m", "d17m"
# "m18wk", "d18wk"
#"f1-micro","g1-small","n1-standard-1"
CXX3 = {    
    "CI3_NAME":"m18c",
    "DI3_NAME":"d18c"
    }
CXX4D = {
    "CI4_NAME":"m18d",
    "DI4_NAME":"d18d"
    }
# git-repo
CXX7G = {
    "CI7G_NAME":"m18d",
    "DI7G_NAME":"d18g",
    "DI7G_SIZE":"70GB",
    "DI7G_ZONE_ID":"us-east1-d",
    "DI7G_TYPE":"pd-standard",
    "DI7G_MODE":"rw"
    }

CXX = {"GC_PROJECT":"api-project",
       "PJ_NAME":"api-project",
       "PJ_ID":"api-project-63688615144",
#       "GC":"/Users/dsm/DSc/google-cloud-sdk/bin/gcloud",
       "GC":"/Users/liy19/D7Sc/u0/gcp/sdk17x/bin/gcloud",
       "CI_NAME":"m18d",
       "CI_STORE_ID":"-s1",
       "CI_MACHINE_TYPE":"n1-standard-1", 
       "CI_IMAGE_FAMILY":"ubuntu-1604-lts",
       "CI_IMAGE_PROJECT":"ubuntu-os-cloud",
       "CI_ZONE_ID":"us-east4-a",
       "CI_REGION_ID":"us-east4",
       "CI_ADDRESS_NAME":"a18w", 
       "CI_ADDRESS_VER":"IPV4",
       "CI_ADDRESS_IP":"35.194.77.65",
       "CI_ACCRESS_CFG":"external-nat", # this name can be found using ci_describe accessConfigName="external-nat" 
       "DI_NAME":"d18d",
       "DI_SIZE":"10GB",
       "DI_MODE":"rw",
       "DI_TYPE":"pd-standard", 
       "DI_ZONE_ID":"us-east1-d",
       "DI_STORE_ID":"Strg1",
       "SSH_USERNAME":"dwisianto",            
       "SCP_TO_U0_LOC":"/Users/dsm/DGit/dwisianto.github.io/k2/wk18/wk18core/src/main/py2/gc/d7sc/u0",       
       "SCP_TO_U0_VNC_X":"vnc/dot_vnc_xstartup",       
       "SCP_TO_U0_VNC_X_TGT":"~/dot_vnc_xstartup",       
       "SCP_TO_SC_LOC":"/Users/dsm/DGit/dwisianto.github.io/k2/wk18/wk18core/src/main/py2/gc/d7sc",       
       "SCP_TO_SC_FILE":"sc.py",
       "SCP_TO_SC_TGT":"~/d7sc/sc.py",
       "CI_SCP_FROM_FILE":"",
       "CI1_NAME":"m18d",       
       "CI1_STORE_ID":"-s1",
       "CI1_SIZE":"25GB",       
       "CI1_MACHINE_TYPE":"n1-standard-1", 
       "CI1_IMAGE_FAMILY":"ubuntu-1604-lts",
       "CI1_IMAGE_PROJECT":"ubuntu-os-cloud",       
       "CI1_ZONE_ID":"us-east1-d",
       "CI1_REGION_ID":"us-east1",
       "CI1_MACHINE_TYPE":"n1-standard-1", 
       "CI1_ADDRESS_NAME":"a18", 
       "CI1_ADDRESS_VER":"IPV4",
       "CI1_ADDRESS_IP":"35.194.77.65",
       "CI1_ACCRESS_CFG":"external-nat", # this name can be found using ci_describe accessConfigName="external-nat"               
       "CI1_IMAGE_FAMILY":"ubuntu-1604-lts",
       "CI1_IMAGE_PROJECT":"ubuntu-os-cloud",
       "DI1_NAME":"d18d",
       "DI1_SIZE":"25GB",
       "DI1_MODE":"rw",
       "DI1_ZONE_ID":"us-east1-d",
       "DI1_TYPE":"pd-standard", 
       "CI2_ZONE_ID":"us-east1-a",
       "CI2_REGION_ID":"us-east1",       
       "CI2_NAME":"m18k",
       "CI2_IMAGE":"m18w-s1",
       "DI2_NAME":"d18k",       
       "DI2_SNAPSHOT":"d18w-s1",       
       }
CXX.update(CXX3)
CXX.update(CXX4D)
CXX.update(CXX7G)


# []
# 
def gcp_bin_exe_cmd(sCmd, bExe=True):
    print sCmd
    if bExe:
        process = subprocess.Popen( sCmd.split(), stdout=subprocess.PIPE)
        output, error = process.communicate()
        print output

def gcp_bin_scp_to(aFileSrc, aFileTgt):
    sCmd = CXX.get("GC")                
    sCmd += " compute scp "
    sCmd += " "+aFileSrc
    sCmd += " "+CXX.get('SSH_USERNAME')
    sCmd += "@"+CXX.get('CI1_NAME')
    sCmd += ":"+aFileTgt
    sCmd += " --zone "+CXX.get('CI1_ZONE_ID')
    gcp_bin_exe_cmd(sCmd,bExeGlobal)

    

# [] general
# https://devopscloud.net/2014/11/30/a-real-quick-quick-start-with-google-cloud-platform-command-line-tools/
# https://stackoverflow.com/questions/35744901/how-to-change-the-active-configuration-profile-in-gcloud
class C1010setup:
    def act(self,actId):
        if actId == "C1000": self.__str__()
        elif actId == "help": self.__str__()
        elif actId == "gc_version": self.gc_version()
        elif actId == "gc_cfg_cmp_zone": self.gc_cfg_cmp_zone()
        elif actId == "gc_cfg_cmp_region": self.gc_cfg_cmp_region()
        elif actId == "gc_comp_update": self.components_update()
        elif actId == "setup_firewall_allow_tomcat":self.setup_firewall_allow_tomcat()
        elif actId == "C1021": self.gc_cfg_lst()        
        elif actId == "C1022": self.gc_cfg_lst_cfg()
        elif actId == "C1023": self.gc_cfg_lst_act()        
        elif actId == "C1013": self.gcp_ce_lst_firewall_rule()
        elif actId == "C1014": self.gcp_ce_lst_disk_type()
        elif actId == "C1015": print CXX.get("CI_NAME")
        
                                    
    def __str__(self):
        sCmd = " setup \n"
        sCmd += " 0 download gcloud sdk, and ./install.sh, gcloud init "
        sCmd += "C1000 help \n"
        sCmd += "C1011 images \n"
        sCmd += "C1012 machine \n"
        sCmd += "C1013 firewall \n"
        sCmd += "C1014 disks-type \n "        
        #gcp_bin_exe_cmd(sCmd, bExe=False)
        print sCmd
    def gc_version(self):
        sCmd = CXX.get("GC")
        sCmd +=" version"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)        
    def components_update(self):
        sCmd = CXX.get("GC")
        sCmd +=" components update"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def gc_cfg_lst(self):
        sCmd = CXX.get("GC")
        sCmd +=" config list"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def gc_cfg_set_project(self):
        sCmd = CXX.get("GC")
        sCmd +=" config set project project18"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)        
    def gc_cfg_cmp_zone(self):
        sCmd = CXX.get("GC")
        sCmd +=" config set compute/region"+CXX.get("CI_REGION_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def gc_cfg_cmp_region(self):
        sCmd = CXX.get("GC")
        sCmd +=" config set compute/zone"+CXX.get("CI_ZONE_ID")        
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def gcp_cfg_lst_act(self):
        sCmd = CXX.get("GC")
        sCmd += " config list activate MY_OLD_CONFIG" 
        gcp_bin_exe_cmd(sCmd)
    def setup_firewall_vnc_allow(self): # allow-vnc
        sCmd = CXX.get("GC")
        sCmd += " compute firewall-rules create allow-vnc "
        sCmd += "--description \"Incoming vnc allowed.\" --allow tcp:5901"
        gcp_bin_exe_cmd(sCmd)
    def setup_firewall_allow_tomcat(self):
        sCmd = CXX.get("GC")
        sCmd += "compute firewall-rules create tomcat-8080 "
        sCmd += " --description \"Incoming http 8080 allowed.\" --allow tcp:8080"
        sCmd += " --format json "       


        



    
# [] project
class C1020project:        
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "pj_describe": self.pj_describe()
        elif actId == "lst_ci": self.lst_ci()
        elif actId == "lst_mt": self.lst_machine()
        elif actId == "lst_img": self.lst_img()
        elif actId == "lst_img_custom": self.lst_img_custom()
        elif actId == "lst_fw": self.lst_firewall_rule()
        elif actId == "lst_ip": self.lst_addresses()
        elif actId == "lst_dt": self.lst_disk_types()
    def __str__(self):
        sCmd = " project \n"        
        sCmd += " lst_ci \n"
        sCmd += " lst_mt \n"
        sCmd += " lst_img \n"
        sCmd += " lst_img_custom \n"
        sCmd += " lst_fw \n"
        sCmd += " lst_ip \n"
        sCmd += "C2010i list instance \n"
        sCmd += "C2010f list firewall\n"
        sCmd += "C2010m list machine \n"
        
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def pj_describe(self):
        sCmd = CXX.get("GC")
        sCmd += ' compute project-info describe'
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)     
        
    def lst_img(self):
        sCmd = CXX.get("GC")
        sCmd += " compute images list"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def lst_img_custom(self):
        sCmd = CXX.get("GC")
        sCmd += " compute images list --no-standard-images --uri"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                
    def lst_machine(self):
        sCmd = CXX.get("GC")
        sCmd += " compute machine-types list"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def lst_ci(self):
        sCmd = CXX.get("GC")
        sCmd += ' compute instances list'
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                   
    def lst_firewall_rule(self):
        sCmd = CXX.get("GC")
        sCmd += " compute firewall-rules list"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def lst_addresses(self):
        sCmd = CXX.get("GC")
        sCmd += " compute addresses list"         
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def lst_disk_types(self):
        sCmd = CXX.get("GC")
        sCmd += " compute disk-types list"         
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
                              
    

#
# [] creation "instances" and "disk"
# instances - image
# disk - snapshots
# addressip 
class C1120machine:
    def __str__(self):
        sCmd = " instances - disks \n"        
        sCmd += "help \n"
        sCmd += "\n"
        sCmd += "ci_create \n"
        sCmd += "ci_delete \n"
        sCmd += "ci_start \n"
        sCmd += "ci_suspend \n "
        sCmd += "ci_stop \n "
        sCmd += "ci_addtag \n "
        gcp_bin_exe_cmd(sCmd, bExe=False)
            
    def act(self,actId):
        if actId == "help": self.__str__()        
        elif actId == "ci_describe": self.ci_describe()
        elif actId == "ci_delete": self.ci_delete()        
        elif actId == "ci_start": self.ci_start()
        elif actId == "ci_suspend": self.ci_suspend()
        elif actId == "ci_stop": self.ci_stop()        
        elif actId == "ci_addtag": self.gcp_ci_addtag_http()
        elif actId == "ci1_create": self.ci1_create()
        elif actId == "ci1_start": self.ci1_start()
        elif actId == "ci1_suspend": self.ci1_suspend()
        elif actId == "ci1_stop": self.ci1_stop()        
        elif actId == "ci1_ad_create": self.ci1_ad_create()
        elif actId == "ci1_ad_delete": self.ci1_ad_delete()
        elif actId == "ci1_ad_describe": self.ci1_ad_describe()
        elif actId == "ci1_ad_cfg_name":  self.ci1_ad_cfg_name() #" do ci_describe to get the name of access config name",
        elif actId == "ci1_ad_cfg_del": self.ci1_ad_cfg_del() #" delete existing access config ",
        elif actId == "ci1_ad_cfg_add": self.ci1_ad_cfg_add() #" add access config ",      
        elif actId == "ci1_ad_cfg_add_eph": self.ci1_ad_cfg_add_ephemeral()         
        elif actId == "ci1_scp1_to_sc": self.ci1_scp1_to_sc()
        elif actId == "ci1_scp_to_sc": self.ci1_scp_to_sc()
        elif actId == "ci1_scp_to_vnc_xstartup": self.ci1_scp_to_vnc_xstartup()
        elif actId == "ci1_ssh_to": self.ci1_ssh_to()
        elif actId == "ci1_vnc_to": self.ci1_vnc_to()
        elif actId == "ci_im_disk_store": self.ci_im_disk_store() # deprecated
        elif actId == "ci_im_disk_delete": self.ci_im_disk_delete() # deprecated
        elif actId == "ci_im_img_store": self.ci_im_img_store()    
        elif actId == "ci_im_img_delete": self.ci_im_img_delete()
                

    def ci_create(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances create "+ CXX.get("CI_NAME")
        sCmd += " --image-family "+CXX.get("CI_IMAGE_FAMILY")
        sCmd += " --image-project "+CXX.get("CI_IMAGE_PROJECT")
        sCmd += " --machine-type "+CXX.get("CI_MACHINE_TYPE")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        sCmd += " --address "+CXX.get("CI_ADDRESS_NAME")
        sCmd += " --tags http-server,https-server,vnc-allow"
        gcp_bin_exe_cmd(sCmd)

    def ci1_create(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances create "+ CXX.get("CI1_NAME")
        sCmd += " --image-family "+CXX.get("CI1_IMAGE_FAMILY")
        sCmd += " --image-project "+CXX.get("CI1_IMAGE_PROJECT")
        sCmd += " --machine-type "+CXX.get("CI1_MACHINE_TYPE")
        sCmd += " --zone "+CXX.get("CI1_ZONE_ID")
        sCmd += " --boot-disk-size "+CXX.get("CI1_SIZE")
        sCmd += " --address "+CXX.get("CI1_ADDRESS_NAME")
        sCmd += " --tags http-server,https-server,vnc-allow"
        gcp_bin_exe_cmd(sCmd,bExeGlobal)
        
    # gcloud compute instances describe my-inst --zone=us-central1-f --format='value(disks.deviceName)'
    def ci_describe(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances describe "+CXX.get("CI_NAME")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")        
        #sCmd += " --format='value(disks.deviceName)'"
        gcp_bin_exe_cmd(sCmd)            
    def ci_delete(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances stop "+CXX.get("CI_NAME")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd)
    def ci_start(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances start "+CXX.get("CI_NAME")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                    
    def ci_suspend(self):
        sCmd = CXX.get("GC")
        sCmd += " alpha compute instances suspend "+CXX.get("CI_NAME")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def ci_stop(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances stop "+CXX.get("CI_NAME")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExeGlobal)
        
        
    def ci1_start(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances start "+CXX.get("CI1_NAME")
        sCmd += " --zone "+CXX.get("CI1_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def ci1_suspend(self):
        sCmd = CXX.get("GC")
        sCmd += " alpha compute instances suspend "+CXX.get("CI1_NAME")
        sCmd += " --zone "+CXX.get("CI1_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                                    
    def ci1_stop(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances stop "+CXX.get("CI1_NAME")
        sCmd += " --zone "+CXX.get("CI1_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExeGlobal)
        
                    
    # https://stackoverflow.com/questions/35590641/what-is-the-gcloud-command-to-allow-http-traffic-on-a-vm-instance-its-not-cre    
    # gcloud compute instances add-tags [YOUR_INSTANCE_NAME] --tags http-server,https-server
    def gcp_ci_addtag_http(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances add-tags "+CXX.get("CI_NAME")
        sCmd += "  --tags http-server,https-server,vnc-allow " 
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd)    

    #    sCmd +=" --ip-version "+CXX.get("CI_ADDRESS_VER")
    def ci1_ad_create(self):
        sCmd = CXX.get("GC")
        sCmd +=" compute addresses create "+CXX.get("CI1_ADDRESS_NAME")
        sCmd +=" --region "+CXX.get("CI1_REGION_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def ci1_ad_describe(self):
        sCmd = CXX.get("GC")
        sCmd +=" compute addresses describe "+CXX.get("CI1_ADDRESS_NAME")
        sCmd +=" --region "+CXX.get("CI1_REGION_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def ci1_ad_delete(self):
        sCmd = CXX.get("GC")
        sCmd +=" compute addresses delete "+CXX.get("CI1_ADDRESS_NAME")
        sCmd +=" --region "+CXX.get("CI1_REGION_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def ci1_ad_cfg_name(self):   
        self.ci_describe()
    def ci1_ad_cfg_del(self): #" delete existing access config ",
        # access config name can be found using ci_describe
        sCmd = CXX.get("GC")
        sCmd +=" compute instances delete-access-config "+CXX.get("CI1_NAME")
        sCmd +=" --access-config-name " + CXX.get("CI_ACCRESS_CFG")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)        
    def ci1_ad_cfg_add(self): #" add access config ",        
        sCmd = CXX.get("GC")
        sCmd +=" compute instances add-access-config "+CXX.get("CI1_NAME")
        sCmd +=" --access-config-name " + CXX.get("CI1_ACCRESS_CFG") 
        sCmd +=" --address "+CXX.get("CI1_ADDRESS_IP")
        sCmd += " --zone "+CXX.get("CI1_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def ci1_ad_cfg_add_ephemeral(self): #" add access config ",        
        sCmd = CXX.get("GC")
        sCmd +=" compute instances add-access-config "+CXX.get("CI1_NAME")
        sCmd +=" --access-config-name " + CXX.get("CI1_ACCRESS_CFG")
        sCmd += " --zone "+CXX.get("CI1_ZONE_ID") 
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)

    def ci1_scp_to_sc(self):  
        gcp_bin_scp_to(CXX.get("SCP_TO_SC_LOC")+"/"+ CXX.get("SCP_TO_SC_FILE"), CXX.get("SCP_TO_SC_TGT") )                 
    def ci1_scp_to_vnc_xstartup(self):
        gcp_bin_scp_to( CXX.get("SCP_TO_U0_LOC")+"/"+ CXX.get("SCP_TO_U0_VNC_X"), CXX.get("SCP_TO_U0_VNC_X_TGT") ) 
    def ci1_ssh_to(self):
        sCmd = CXX.get("GC")
        sCmd += " compute ssh "+CXX.get('SSH_USERNAME')
        sCmd += "@"+CXX.get('CI1_NAME')
        sCmd += " --zone "+CXX.get('CI1_ZONE_ID')
        gcp_bin_exe_cmd(sCmd,bExe=False)
    def ci1_vnc_to(self):
        sCmd = CXX.get("GC")
        sCmd += ' compute instances list'
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                   
    

# production machine
# only one external ip        
class C2120machine:
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "ci2_img_store": self.ci2_img_store()
        elif actId == "ci2_img_delete": self.ci2_img_delete()
        elif actId == "ci2_img_list": self.ci2_img_list()
        elif actId == "ci2_create": self.ci2_create()
        elif actId == "ci2_describe": self.ci2_describe()
        elif actId == "ci2_delete": self.ci2_delete()        
        elif actId == "ci2_start": self.ci2_start()
        elif actId == "ci2_stop": self.ci2_stop()        
        elif actId == "ci2_ssh_to": self.ci2_ssh_to() 
        elif actId == "ci2_vnc_to": self.ci2_vnc_to() 
        elif actId == "ci2_ad_create": self.ci2_ad_create()
        elif actId == "ci2_ad_delete": self.ci2_ad_delete()
        elif actId == "ci2_ad_describe": self.ci2_ad_describe()        
        
    def __str__(self):
        sCmd = " C1220 production machine \n"        
        sCmd += " help \n"
        sCmd += "scp_to \n"
        gcp_bin_exe_cmd(sCmd, bExe=False)
                
    def ci2_img_store(self):
        sCmd = CXX.get("GC")
        sCmd +=" compute images create "+CXX.get("CI2_IMAGE")
        sCmd += " --source-disk "+ CXX.get("CI_NAME")
        sCmd += " --source-disk-zone "+CXX.get("CI_ZONE_ID") 
        sCmd += " --family "+CXX.get("CI_IMAGE_FAMILY")
        gcp_bin_exe_cmd(sCmd,bExeGlobal)    
    def ci2_img_delete(self):
        sCmd = CXX.get("GC")
        sCmd +=" compute images delete "+CXX.get("CI2_IMAGE")
        gcp_bin_exe_cmd(sCmd,bExeGlobal)                    
    def ci2_img_list(self):
        sCmd = CXX.get("GC")
        sCmd += " compute images list --no-standard-images --uri"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                
            
        
    #sCmd += " --image-family "+CXX.get("CI_IMAGE_FAMILY")
    #sCmd += " --address "+CXX.get("CI2_ADDRESS_NAME")
    #sCmd += " --image-project "+CXX.get("CI_IMAGE_PROJECT")                
    def ci2_create(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances create "+ CXX.get("CI2_NAME")
        sCmd += " --image "+CXX.get("CI2_IMAGE")        
        sCmd += " --machine-type "+CXX.get("CI_MACHINE_TYPE")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")        
        sCmd += " --tags http-server,https-server,vnc-allow"
        gcp_bin_exe_cmd(sCmd)    
    # gcloud compute instances describe my-inst --zone=us-central1-f --format='value(disks.deviceName)'
    def ci2_describe(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances describe "+CXX.get("CI2_NAME")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")        
        #sCmd += " --format='value(disks.deviceName)'"
        gcp_bin_exe_cmd(sCmd)            
    def ci2_delete(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances stop "+CXX.get("CI2_NAME")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd)
    def ci2_start(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances start "+CXX.get("CI2_NAME")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                    
    def ci2_suspend(self):
        sCmd = CXX.get("GC")
        sCmd += " alpha compute instances suspend "+CXX.get("CI2_NAME")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def ci2_stop(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances stop "+CXX.get("CI2_NAME")
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExeGlobal)

    def ci2_ssh_to(self):
        sCmd = CXX.get("GC")
        sCmd += " compute ssh "+CXX.get('SSH_USERNAME')
        sCmd += "@"+CXX.get('CI2_NAME')
        sCmd += " --zone "+CXX.get('CI_ZONE_ID')
        gcp_bin_exe_cmd(sCmd,bExe=False)
    def ci2_vnc_to(self):
        sCmd = CXX.get("GC")
        sCmd += ' compute instances list'
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                   
        
    
        
    
                
    # https://stackoverflow.com/questions/35590641/what-is-the-gcloud-command-to-allow-http-traffic-on-a-vm-instance-its-not-cre    
    # gcloud compute instances add-tags [YOUR_INSTANCE_NAME] --tags http-server,https-server
    def ci2_addtag_http(self):
        sCmd = CXX.get("GC")
        sCmd += " compute instances add-tags "+CXX.get("CI2_NAME")
        sCmd += "  --tags http-server,https-server,vnc-allow " 
        sCmd += " --zone "+CXX.get("CI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd)            
        
    def ci2_ad_create(self):
        sCmd = CXX.get("GC")
        sCmd +=" compute addresses create "+CXX.get("CI2_ADDRESS_NAME")
        sCmd +=" --region "+CXX.get("CI_REGION_ID")
        #    sCmd +=" --ip-version "+CXX.get("CI_ADDRESS_VER")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def ci2_ad_describe(self):
        sCmd = CXX.get("GC")
        sCmd +=" compute addresses describe "+CXX.get("CI2_ADDRESS_NAME")
        sCmd +=" --region "+CXX.get("CI_REGION_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def ci2_ad_delete(self):
        sCmd = CXX.get("GC")
        sCmd +=" compute addresses delete "+CXX.get("CI2_ADDRESS_NAME")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    
    


#
# [] disks
# https://cloud.google.com/sdk/gcloud/reference/compute/instances/attach-disk
# https://cloud.google.com/compute/docs/disks/add-persistent-disk#create_disk
# https://cloud.google.com/compute/docs/disks/add-persistent-disk#formatting
#
# https://cloud.google.com/compute/docs/disks/add-persistent-disk#formatting
#
class C1130disk:        
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "di_list": self.di_list()
        elif actId == "di_create": self.di_create()        
        elif actId == "di_attach": self.di_attach()
        elif actId == "di_delete": self.di_delete()
        elif actId == "di_detach": self.di_detach()        
    def __str__(self):
        sCmd = " disk \n"        
        sCmd += "\n"
        sCmd += "C3020 di_list \n"
        sCmd += "C3021 di_create \n"
        sCmd += "C3022 di_attach \n"
        sCmd += "C3023 di_detach \n"
        sCmd += "C3024 di_delete \n "         
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def di_list(self):
        sCmd = CXX.get("GC")        
        sCmd += " compute disk-types list"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    #https://cloud.google.com/sdk/gcloud/reference/compute/disks/create        
    def di_create(self):
        sCmd = CXX.get("GC")
        sCmd += " compute disks create "+ CXX.get("DI_NAME")
        sCmd += " --size "+CXX.get("DI_SIZE")
        sCmd += " --zone "+CXX.get("DI_ZONE_ID")
        sCmd += " --type "+CXX.get("DI_TYPE")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)        
    #https://cloud.google.com/sdk/gcloud/reference/compute/instances/attach-disk
    def di_attach(self):
        sCmd = CXX.get("GC")                
        sCmd += " compute instances attach-disk "+CXX.get("CI_NAME")
        sCmd += " --disk "+CXX.get("DI_NAME")
        sCmd += " --device-name "+CXX.get("DI_NAME")
        sCmd += " --zone "+CXX.get("DI_ZONE_ID")
        sCmd += " --mode "+CXX.get("DI_MODE")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)         
    #https://cloud.google.com/sdk/gcloud/reference/compute/instances/detach-disk                   
    def di_detach(self):
        sCmd = CXX.get("GC")                        
        sCmd += " compute instances detach-disk "+CXX.get("CI_NAME")
        sCmd += " --disk "+CXX.get("DI_NAME")                
        sCmd += " --zone "+CXX.get("DI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                
    def di_delete(self):
        sCmd = CXX.get("GC")                                
        sCmd += " compute disks delete "+ CXX.get("DI_NAME")
        gcp_bin_exe_cmd(sCmd, bExe=False)        
        



# [] template
class C2130disk:        
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "di2_snp_create": self.di2_snp_create()
        elif actId == "di2_snp_delete": self.di2_snp_delete()        
        elif actId == "di2_snp_list": self.di2_snp_list()        
        elif actId == "di2_snp_describe": self.di2_snp_describe()        
        elif actId == "di2_create": self.di2_create()
        elif actId == "di2_delete": self.di2_delete()
        elif actId == "di2_attach": self.di2_attach()
        elif actId == "di2_detach": self.di2_detach()
        elif actId == "di2_img_create": self.di2_img_create()
        elif actId == "di2_img_delete": self.di2_img_delete()        

    def __str__(self):
        sCmd = " disk for production \n"        
        sCmd += " help \n"
        sCmd += " di2_image_create \n di2_image_delete \n"
        sCmd += " di2_create \n di2_delete \n"
        sCmd += " di2_attach \n di2_detach \n"
        gcp_bin_exe_cmd(sCmd, bExe=False)        
    def di2_snp_create(self):
        sCmd = CXX.get("GC")                                
        sCmd += " compute disks snapshot "+ CXX.get("DI_NAME")
        sCmd += " --snapshot-names "+CXX.get("DI2_SNAPSHOT")                
        sCmd += " --zone "+CXX.get("DI_ZONE_ID")        
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)        
    def di2_snp_delete(self):
        sCmd = CXX.get("GC")                                
        sCmd += " compute snapshots delete "+ CXX.get("DI2_SNAPSHOT")                 
        #sCmd += " --zone "+CXX.get("DI_ZONE_ID")        
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)        
    def di2_snp_describe(self):
        sCmd = CXX.get("GC")                                
        sCmd += " compute snapshots describe "+ CXX.get("DI2_SNAPSHOT")                 
        #sCmd += " --zone "+CXX.get("DI_ZONE_ID")        
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)        
    def di2_snp_list(self):
        sCmd = CXX.get("GC")                                
        sCmd += " compute snapshots list --uri"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                
    def di2_create(self):
        sCmd = CXX.get("GC")
        sCmd += " compute disks create "+ CXX.get("DI1_NAME")
        sCmd += " --source-snapshot "+CXX.get("DI2_SNAPSHOT")
        sCmd += " --size "+CXX.get("DI1_SIZE")
        sCmd += " --zone "+CXX.get("DI1_ZONE_ID")
        sCmd += " --type "+CXX.get("DI1_TYPE")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def di2_delete(self):
        sCmd = CXX.get("GC")                                
        sCmd += " compute disks delete "+ CXX.get("DI2_NAME")
        sCmd += " --zone "+CXX.get("DI_ZONE_ID")                      
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)          
    #https://cloud.google.com/sdk/gcloud/reference/compute/instances/attach-disk
    def di2_attach(self):
        sCmd = CXX.get("GC")                
        sCmd += " compute instances attach-disk "+CXX.get("CI1_NAME")
        sCmd += " --disk "+CXX.get("DI1_NAME")
        sCmd += " --device-name "+CXX.get("DI1_NAME")
        sCmd += " --zone "+CXX.get("DI1_ZONE_ID")
        sCmd += " --mode "+CXX.get("DI1_MODE")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)         
    #https://cloud.google.com/sdk/gcloud/reference/compute/instances/detach-disk                   
    def di2_detach(self):
        sCmd = CXX.get("GC")                        
        sCmd += " compute instances detach-disk "+CXX.get("CI2_NAME")
        sCmd += " --disk "+CXX.get("DI2_NAME")                
        sCmd += " --zone "+CXX.get("DI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                

 
 
 # [] github
class C7130diskG:        
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "di7g_create": self.di7_create()
        elif actId == "di7g_delete": self.di7_delete()
        elif actId == "di7g_attach": self.di7_attach()
        elif actId == "di7g_detach": self.di7_detach()
        
    #https://cloud.google.com/sdk/gcloud/reference/compute/disks/create        
    def di7_create(self):
        sCmd = CXX.get("GC")
        sCmd += " compute disks create "+ CXX.get("DI7G_NAME")
        sCmd += " --size "+CXX.get("DI7G_SIZE")
        sCmd += " --zone "+CXX.get("DI7G_ZONE_ID")
        sCmd += " --type "+CXX.get("DI7G_TYPE")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)  
    def di7_delete(self):
        sCmd = CXX.get("GC")                                
        sCmd += " compute disks delete "+ CXX.get("DI7G_NAME")
        gcp_bin_exe_cmd(sCmd, bExe=False)                      
    #https://cloud.google.com/sdk/gcloud/reference/compute/instances/attach-disk
    def di7_attach(self):
        sCmd = CXX.get("GC")                
        sCmd += " compute instances attach-disk "+CXX.get("CI7G_NAME")
        sCmd += " --disk "+CXX.get("DI7G_NAME")
        sCmd += " --device-name "+CXX.get("DI7G_NAME")
        sCmd += " --zone "+CXX.get("DI7G_ZONE_ID")
        sCmd += " --mode "+CXX.get("DI7G_MODE")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)         
    #https://cloud.google.com/sdk/gcloud/reference/compute/instances/detach-disk                   
    def di7_detach(self):
        sCmd = CXX.get("GC")                        
        sCmd += " compute instances detach-disk "+CXX.get("CI7G_NAME")
        sCmd += " --disk "+CXX.get("DI7G_NAME")                
        sCmd += " --zone "+CXX.get("DI7G_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                

 
 # [] 
class C9130disk:        
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "di9_create": self.di9_create()
        elif actId == "di9_delete": self.di9_delete()
        elif actId == "di9_attach": self.di9_attach()
        elif actId == "di9_detach": self.di9_detach()
        
    #https://cloud.google.com/sdk/gcloud/reference/compute/disks/create        
    def di9_create(self):
        sCmd = CXX.get("GC")
        sCmd += " compute disks create "+ CXX.get("DI9_NAME")
        sCmd += " --size "+CXX.get("DI_SIZE")
        sCmd += " --zone "+CXX.get("DI_ZONE_ID")
        sCmd += " --type "+CXX.get("DI_TYPE")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)        
    #https://cloud.google.com/sdk/gcloud/reference/compute/instances/attach-disk
    def di9_attach(self):
        sCmd = CXX.get("GC")                
        sCmd += " compute instances attach-disk "+CXX.get("CI9_NAME")
        sCmd += " --disk "+CXX.get("DI_NAME")
        sCmd += " --device-name "+CXX.get("DI_NAME")
        sCmd += " --zone "+CXX.get("DI_ZONE_ID")
        sCmd += " --mode "+CXX.get("DI_MODE")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)         
    #https://cloud.google.com/sdk/gcloud/reference/compute/instances/detach-disk                   
    def di9_detach(self):
        sCmd = CXX.get("GC")                        
        sCmd += " compute instances detach-disk "+CXX.get("CI9_NAME")
        sCmd += " --disk "+CXX.get("DI_NAME")                
        sCmd += " --zone "+CXX.get("DI_ZONE_ID")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                
    def di9_delete(self):
        sCmd = CXX.get("GC")                                
        sCmd += " compute disks delete "+ CXX.get("DI9_NAME")
        gcp_bin_exe_cmd(sCmd, bExe=False)        
            


# [] ssh - scp        
class C40ssh:     
    def __str__(self):
        sCmd = " ssh - scp \n"        
        sCmd += "C4000 help \n"
        sCmd += "\n"
        sCmd += "C4010m list machine \n"
        sCmd += "\n"
        sCmd += "C4012 ssh \n"
        sCmd += "C4032 scp_to vm \n"
        sCmd += "C4034 scp_to vnc_xstartup \n"
        sCmd += "\n"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
            
    def act(self,actId):
        if actId == "C4000": self.__str__()
        elif actId == "ssh_to" : self.ssh_to()
        elif actId == "C4012": self.ssh_to()
        elif actId == "scp_to": self.scp_to()
        elif actId == "C4014": self.scp_to()
        elif actId == "scp_from": self.scp_from()
        elif actId == "C4016": self.scp_from()
        elif actId == "scp_to_vnc_x" : self.scp_to_vnc_xstartup() 
        elif actId == "scp_to_sc" : self.scp_to_sc()
    
    def ssh_to(self):
        sCmd = CXX.get("GC")
        sCmd += " compute ssh "+CXX.get('SSH_USERNAME')
        sCmd += "@"+CXX.get('CI_NAME')
        sCmd += " --zone "+CXX.get('CI_ZONE_ID')
        gcp_bin_exe_cmd(sCmd,bExe=False)
    
    def scp_from(self):
        sCmd = CXX.get("GC")
        sCmd += " compute scp "
        sCmd += " "+CXX.get('SSH_USERNAME')
        sCmd += "@"+CXX.get('CI_NAME')
        sCmd += ":"+CXX.get('CI_SCP_FROM_FILE')
        sCmd += " ~/DSc/"
        sCmd += " --zone "+CXX.get('CI_ZONE_ID')
        gcp_bin_exe_cmd(sCmd)
        
    def scp_to_d7sc(self):
        C_F_T={"from": "to"}
        
    def scp_to_sc(self):  
        self.scp_to(CXX.get("SCP_TO_SC_LOC")+"/"+ CXX.get("SCP_TO_SC_FILE"), CXX.get("SCP_TO_SC_TGT") )
                
    def scp_to_vnc_xstartup(self):
        self.scp_to( CXX.get("SCP_TO_U0_LOC")+"/"+ CXX.get("SCP_TO_U0_VNC_X") )    

    def scp_to(self,aFileName):
        sCmd = CXX.get("GC")                
        sCmd += " compute scp "
        sCmd += " "+aFileName
        sCmd += " "+CXX.get('SSH_USERNAME')
        sCmd += "@"+CXX.get('CI_NAME')
        sCmd += ":~/"
        sCmd += " --zone "+CXX.get('CI_ZONE_ID')
        gcp_bin_exe_cmd(sCmd,bExeGlobal)        
    def scp_to(self,aFileSrc, aFileTgt):
        sCmd = CXX.get("GC")                
        sCmd += " compute scp "
        sCmd += " "+aFileSrc
        sCmd += " "+CXX.get('SSH_USERNAME')
        sCmd += "@"+CXX.get('CI_NAME')
        sCmd += ":"+aFileTgt
        sCmd += " --zone "+CXX.get('CI_ZONE_ID')
        gcp_bin_exe_cmd(sCmd,bExeGlobal)
        

# [] general
class F1100vm:
    C1020=C1020project
    C1120=C1120machine
    C1130=C1130disk   
    C40=C40ssh         
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "vm1_create":self.vm1_create()
        elif actId == "vm1_start":self.vm1_start()
        elif actId == "vm1_stop":self.vm1_stop()  
        elif actId == "vm1_scp_to":self.vm1_scp_to()      
    def __str__(self):
        sCmd = " development machine \n"        
        sCmd += "help \n"
        sCmd += "vm1_setup \n"
        sCmd += "vm1_start \n"
        sCmd += "vm1_stop \n"
        sCmd += "vm1_scpto \n"
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def vm1_create(self):
        C1120.act("ci1_ad_create"); time.sleep(30);  # create compute instance          
        C1120.act("ci1_create"); time.sleep(30);  # create compute instance        
        C1130.act("di_create"); time.sleep(30); # create disk        
        C1130.act("di_attach"); time.sleep(30); # attach        
        C40.act("scp_to_sc"); time.sleep(3)         
        C40.act("scp_to_vnc_x"); time.sleep(3)         
        C40.act("ssh_to") # ssh command
        C1120.act("lst_ci") # external ip
        #C40.act("scp_to_vnc_x") # scp xstartup
    def vm1_start(self):
        C1120.act("ci1_start"); time.sleep(30) # start        
        C1120.act("ci1_scp_to_sc") # scp vm        
        C1120.act("ci1_ssh_to") # ssh
        C1020.act("lst_ci") # vnc external ip        
    def vm1_stop(self):
        C1120.act("ci1_stop") # stop
    def vm1_scp_to(self):
        aFileSrc="/Users/dsm/DGit/y17bee/w1_cli/d3.phrasal.detect/src/test/test.zip"
        aFileTgt="~/"
        sCmd = CXX.get("GC")                
        sCmd += " compute scp "
        sCmd += " "+aFileSrc
        sCmd += " "+CXX.get('SSH_USERNAME')
        sCmd += "@"+CXX.get('CI1_NAME')
        sCmd += ":"+aFileTgt
        sCmd += " --zone "+CXX.get('CI1_ZONE_ID')
        gcp_bin_exe_cmd(sCmd,bExeGlobal)
        
        
        
        
        
# production machine vm
class F2100vm:
    C2120m = C2120machine()
    C2130d = C2130disk()
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "vm2_start": self.vm2_start()
        elif actId == "vm2_stop": self.vm2_stop()
        elif actId == "vm2_create": self.vm2_create()
        elif actId == "vm2_delete": self.vm2_delete()
    def __str__(self):
        sCmd = " production machine \n"
        sCmd += " vm2_start - vm2_stop \n"
        sSmd += " vm2_create - vm2_delete \n"        
        sCmd += " help \n"
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def vm2_start(self):
        self.C2120m.act("ci2_start"); time.sleep(30)         
        #C40.act("scp_to_sc") # scp vm
        #C40.act("scp_to_vnc_x") # scp xstartup
        self.C2120m.act("ci2_ssh_to") # ssh
        self.C2120m.act("ci2_vnc_to") # vnc external ip                
    def vm2_stop(self):
        self.C2120m.act("ci2_stop")
    def vm2_create(self):
        self.C2130d.act("di2_snp_create")
        self.C2130d.act("di2_snp_describe")
        self.C2130d.act("di2_create")
        self.C2130d.act("di2_attach")                
        pass
    def vm2_delete(self):
        self.C2130d.act("di2_detach")
        self.C2130d.act("di2_delete")        
        self.C2120m.act("help")
        pass
     
    
    


# [] template
class CXXtemplate:        
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "doit": self.doit()
    def __str__(self):
        sCmd = " template \n"        
        sCmd += "CXX00 help \n"
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def doit(self):
        pass
        



# [] 
# http://isb-cancer-genomics-cloud.readthedocs.io/en/latest/sections/gcp-info/gcp-info2/Disks.html
# [] scp_to vm 4032, xstartup 4034
# [] disk list 3020, create 3021, attach 3022, detach 3024
# [] flow machine : F2031, start F2031, stop 2032 
# https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address
ACT_DICT={"vm1_start":"start a vm",
         "vm1_stop":"stop a vm",
         "ssh_to":" connect to vm",
         "scp_to_sc":"copy sc to vm",
         "pj_describe":"",
         "gc_version":"version of gcloud sdk",
         "lst_ci":"external ip for vnc",
         "lst_img":"",
         "lst_img_custom":" list custom images",
         "lst_fw":"",         
         "ci_describe": "",
         "ci_describe":" property of an instance",
         "ci_ad_create":" create an external ip",
         "ci_ad_delete":" delete an external ip",
         "ci_ad_describe":"external ip - describe",
         "ci_ad_cfg_name": " do ci_describe to get the name of access config name",   
         "ci_ad_cfg_del":" delete existing access config ",
         "ci_ad_cfg_add":" add access config ",
         "ci_ad_cfg_add_eph": "add access config ephemeral",
         "ci_im_img_store":" backup os",
         "ci_im_img_delete":"",
         "ci_im_disk_store": "",
         "ci_im_disk_delete": "",
         "di_list":"list disk type",
         "vm2_start":"",
         "vm2_stop":"",
         "vm2_create":"",
         "vm2_delete":"",
         "ci2_ad_create":" not yet available ",
         "ci2_ad_describe":"can have only one ip",
         "ci2_ad_delete":" can have only one ip",         
         "ci2_img_store": "",
         "ci2_img_delete": "",         
         "ci2_create":"",
         "ci2_describe":"",
         "ci2_start":"",
         "ci2_stop":"",
         "ci2_ssh_to":"",
         "ci2_vnc_to":"",
         "di2_snp_create":"",
         "di2_snp_delete":"",
         "di2_snp_describe":"",
         "di2_snp_list":"",
         "di2_create":"",
         "di2_delete":"",
         "di2_attach":"",
         "di2_detach":""         
         }

ACT_ID="vm1_start"
#ACT_ID="ci1_scp_to_sc"
bExeGlobal=True
if __name__ == '__main__':

    actId = str(sys.argv[1]) if( len(sys.argv) > 2 ) else ACT_ID
    bExeGlobal = bool(sys.argv[2]) if( len(sys.argv) > 3 ) else bExeGlobal   
    
    # []
    C1010 = C1010setup(); C1010.act(actId)
    C1020 = C1020project(); C1020.act(actId)     
       
    C1120 = C1120machine(); C1120.act(actId)
    C1130 = C1130disk(); C1130.act(actId)
    C7130 = C7130diskG(); C7130.act(actId)
    C40 = C40ssh(); C40.act(actId)
    
    C2120 = C2120machine(); C2120.act(actId)
    C2130 = C2130disk(); C2130.act(actId)
    
    F1100 = F1100vm(); F1100.act(actId)
    F2100 = F2100vm(); F2100.act(actId)


    