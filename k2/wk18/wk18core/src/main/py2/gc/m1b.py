
# 
# ToDo : Python Java

import os
import sys
import subprocess

# []
#"f1-micro","g1-small","n1-standard-1"
CXX = {"GC":"/Users/dsm/DSc/google-cloud-sdk/bin/gcloud",
       "CI_NAME":"m17m",
       "CI_MACHINE_TYPE":"n1-standard-1", 
       "CI_IMAGE_FAMILY":"ubuntu-1604-lts",
       "CI_IMAGE_PROJECT":"ubuntu-os-cloud",
       "CI_ZONE_ID":"us-east4-a",
       "DI_NAME":"d17m",
       "DI_SIZE":"10GB",
       "DI_MODE":"rw",
       "DI_TYPE":"pd-standard", 
       "DI_ZONE_ID":"us-east4-a",
       "SSH_USERNAME":"dwisianto",
       "SCP_TO_FILE_LOC":"/Users/dsm/DGit/y17bee/w1_cli/d3.phrasal.detect/src/main/py2/gc",
       "SCP_TO_FILE_VM":"m1b.py",
       "SCP_TO_FILE_VNC_X":"dot_vnc_xstartup",
       "CI_SCP_FROM_FILE":""       
       }
# "1600x1200",
CYY = { "OS_" : "tmux",
        "VNC_GEOMETRY":"1440x900",
        "ECL_INST_ZIP":"",
        "JV_INST":"asd"
       }
CXX.update(CYY)

# [] 
def gcp_bin_exe_cmd(sCmd, bExe=True):
    print sCmd
    if bExe:
        process = subprocess.Popen( sCmd.split(), stdout=subprocess.PIPE)
        output, error = process.communicate()
        print output




class C1():
    
    def act(self,actId):
        if actId == 100: self.help()            
        elif actId == 101: self.create_swap()                        
        elif actId == 102: self.update()                                    
        elif actId == 103: self.upgrade()            
        elif actId == 104: self.ui_ubuntu()                                                
        #elif actId == 112: self.ui_gnome()                        
        #elif actId == 115: self.utl_emacs()                        
            
    def help(self):
        sCmd = " os \n"
        sCmd += "101 create swap \n"
        sCmd += "102 update \n"
        sCmd += "103 upgrade \n "
        sCmd += "104 ui_ubuntu \n "        
        gcp_bin_exe_cmd(sCmd, bExe=False)
        
    def create_swap(self):
        sCmd = "sudo dd if=/dev/zero of=/var/swap bs=2048 count=524288; "
        sCmd += "sudo chmod 600 /var/swap; " 
        sCmd += "sudo mkswap /var/swap; " 
        sCmd += "sudo swapon /var/swap; " 
        sCmd += "free -m; "
        gcp_bin_exe_cmd(sCmd, bExe=False)

    
    def update(self):
        sCmd = "sudo apt-get "
        sCmd += " update"
        gcp_bin_exe_cmd(sCmd, bExe=False)
                
    def upgrade(self):
        sCmd = "sudo apt-get -y "
        sCmd += " upgrade"
        gcp_bin_exe_cmd(sCmd, bExe=True)
        
        
    def ui_ubuntu(self):
        sCmd ="sudo apt-get -y install ubuntu-desktop; "
        sCmd += "sudo apt-get -y install gnome-panel gnome-settings-daemon gnome-terminal nautilus metacity "
        gcp_bin_exe_cmd(sCmd, bExe=False)
        
    def ui_gnome(self):
        sCmd ="sudo apt-get -y install aptitude tasksel; "
        sCmd +="sudo tasksel install ubuntu-gnome-desktop --new-install "
        gcp_bin_exe_cmd(sCmd, bExe=False)        
                

    def utl_vnc(self):
        sCmd ="sudo apt-get install vnc4server -y "
        gcp_bin_exe_cmd(sCmd, bExe=False)
        
        

# [] vnc
VNC_DOT_LCL="dot_vnc_xstartup"
class C2:
    vnc_id=1
    def act(self,actId):
        if actId == 200: self.help()            
        elif actId == 201: self.utl_vnc()            
        elif actId == 202: self.vnc_ufw()            
        elif actId == 203: self.vnc_xstartup()                                    
        elif actId == 211: self.vnc_start()                                    
        elif actId == 212: self.vnc_stop()                        
        elif actId == 213: self.vnc_cln_log_pid()  
        elif actId == "vnc_cln_start": self.flow_cln_start()   
        elif actId == "vnc_start": self.vnc_start()                                    
        elif actId == "vnc_stop": self.vnc_stop()
        elif actId == "vnc_cln": self.vnc_cln_log_pid()  
                        
    def help(self):
        sCmd  = " [] vnc "
        sCmd += " 200 - self_help \n"
        sCmd += " 201 - utl_vnc \n"
        sCmd += " 202 - vnc_ufw \n"        
        sCmd += " 203 - vnc_xstartup \n"        
        sCmd += " 211 - vnc_start \n"
        sCmd += " 212 - vnc_stop \n"
        sCmd += " 213 - vnc_clean \n"
        sCmd += "\n"
        sCmd += " 215 - clean and start \n"
        gcp_bin_exe_cmd(sCmd, bExe=False)

    def utl_vnc(self):
        sCmd ="sudo apt-get install vnc4server -y; "
        sCmd +="sudo  /usr/sbin/adduser dwisianto"
        gcp_bin_exe_cmd(sCmd, bExe=False)

    def vnc_ufw(self):
        sCmd ="sudo ufw allow 5901:5910/tcp; "
        #sCmd += "chmod 755 /etc/X11/xinit/xinitrc"
        gcp_bin_exe_cmd(sCmd, bExe=False)
        
    def vnc_xstartup(self):
        sCmd = " vncserver; # create dot_vnc folder and set up password "
        sCmd = " scp local dot_xstartup to dot_vnc folder"
        sCmd += " chmod 755 ~/.vnc/xstartup"
        #sCmd =" cp ~/dot_vnc_xstartup ~/.vnc/xstartup; "        
        gcp_bin_exe_cmd(sCmd, bExe=False)
        
    def vnc_start(self):
        sCmd = "vncserver "
        sCmd += " -geometry "+CXX.get("VNC_GEOMETRY")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)

    def vnc_stop(self):
        sCmd = "vncserver "
        sCmd += " -kill "
        sCmd += ":1"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        
    def vnc_cln_log_pid(self):
        sCmd = " rm -f .vnc/*log; "
        sCmd += "rm -f .vnc/*pid "
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        
    def flow_cln_start(self):
        self.vnc_cln_log_pid()
        self.vnc_start()


# [] mount disk
class C30disk:        
    def act(self,actId):
        if actId == "C3000": self.__str__()
        elif actId == "C3011": self.format()
        elif actId == "C3012": self.mount()
        elif actId == "C3013": self.umount()
        elif actId == "di_link": self.di_link()
    def __str__(self):
        sCmd = " disk \n"        
        sCmd += "CXX00 format \n"
        sCmd += "CXX00 mount \n"
        sCmd += "CXX00 umount \n"
        sCmd += "di_link link\n"
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def format(self):
        sCmd = "sudo mkfs.ext4 -F /dev/disk/by-id/google-"+CXX.get("DI_NAME")+"; "
        sCmd += "sudo mkdir /mnt/"+CXX.get("DI_NAME")+"; "
        sCmd += "sudo chown dwisianto:dwisianto /mnt/"+CXX.get("DI_NAME")+"; "
        gcp_bin_exe_cmd(sCmd, bExe=bRunGlobal)
    def mount(self):
        sCmd = "sudo mount -o discard,defaults /dev/disk/by-id/google-"+CXX.get("DI_NAME")
        sCmd += " /mnt/"+CXX.get("DI_NAME") 
        gcp_bin_exe_cmd(sCmd, bExe=bRunGlobal)
    def umount(self):
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def di_link(self):
        sCmd = "ln -s /mnt/"+CXX.get("DI_NAME")+"; "
        gcp_bin_exe_cmd(sCmd, bExe=bRunGlobal)
        

# [] java
class C40apps:        
    def act(self,actId):
        if actId == "CCXX00": self.__str__()
        elif actId == "help": self.__str__()
        elif actId == "stp_java": self.stp_java()
        elif actId == "stp_ecl": self.stp_el()
        elif actId == "stp_git": self.stp_git()
        elif actId == "stp_emacs": self.stp_emacs()
    def __str__(self):
        sCmd = " template \n"        
        sCmd += "CXX00 help \n"
        sCmd += "stp_java \n"
        sCmd += "stp_ecl \n"
        sCmd += "stp_git \n"
        sCmd += "stp_emacs \n"
        gcp_bin_exe_cmd(sCmd, bExe=False)        
    def stp_java(self):
        sCmd = " sudo add-apt-repository ppa:webupd8team/java; "
        sCmd += " sudo apt update; sudo apt install oracle-java8-installer;"
        sCmd += " sudo apt install oracle-java8-set-default; "
        sCmd += " # bashme" 
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def stp_ecl(self):
        sCmd = " # eclipse installer;  "
        sCmd = " # nano ~/.local/share/applications/eclipse.desktop "
        sCmd += " # bashme" 
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def stp_git(self):
        sCmd = " # eclipse installer;  "
        sCmd = " # nano ~/.local/share/applications/eclipse.desktop "
        sCmd += " # bashme" 
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def stp_emacs(self):
        sCmd ="sudo apt-get install emacs -y "
        gcp_bin_exe_cmd(sCmd, bExe=False)
                                 
        

# [] 
class F20utilities:       
     
    def act(self,actId):
        if actId == "F2000": self.__str__()
        elif actId == "F2011": self.tmux()
        elif actId == "install_tmux" : self.tmux()
    def __str__(self):
        sCmd = " F20utilities \n"        
        sCmd += "CXX00 help \n"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def tmux(self):
        sCmd = " sudo apt-get install tmux;"        
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
         

# [] template
class CXXtemplate:        
    def act(self,actId):
        if actId == "CCXX00": self.help()
        elif actId == "help": self.__str__()
    def __str__(self):
        sCmd = " template \n"        
        sCmd += "CXX00 help \n"
        gcp_bin_exe_cmd(sCmd, bExe=False)        




# []
ACT_ID="help"
bExeGlobal=True 
if __name__ == '__main__':
    
    actId= str(sys.argv[1]) if( len(sys.argv) == 2 ) else ACT_ID
    
    C1=C1()
    C2=C2()
    C30 = C30disk()
    C40 = C40apps()
    F20 = F20utilities()
    
    C1.act(actId)
    C2.act(actId)
    C30.act(actId)
    C40.act(actId)
    F20.act(actId)
    