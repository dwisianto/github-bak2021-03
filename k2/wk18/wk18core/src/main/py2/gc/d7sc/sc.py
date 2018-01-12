# 
# ToDo : Python Java

import os
import sys
import time
import subprocess

# []
CXX7G = {
    "CI7G_NAME":"m18d",
    "DI7G_NAME":"d18g",
    "DI7G_SIZE":"70GB",
    "DI7G_ZONE_ID":"us-east1-d",
    "DI7G_TYPE":"pd-standard",
    "DI7G_MODE":"rw"
    }
#"f1-micro","g1-small","n1-standard-1"
CXX = {"GC":"/Users/dsm/DSc/google-cloud-sdk/bin/gcloud",
       "GC_PROJECT":"api-project",
       "CI_NAME":"m18w",
       "CI_MACHINE_TYPE":"g1-small", 
       "CI_IMAGE_FAMILY":"ubuntu-1604-lts",
       "CI_IMAGE_PROJECT":"ubuntu-os-cloud",
       "CI_ZONE_ID":"us-east4-a",
       "DI_NAME":"d18d",
       "DI_SIZE":"10GB",
       "DI_MODE":"rw",
       "DI_TYPE":"pd-standard", 
       "DI_ZONE_ID":"us-east4-a",
       "SSH_USERNAME":"dwisianto",
       "SCP_TO_U0_LOC":"/Users/dsm/DGit/y17bee/w1_cli/d3.phrasal.detect/src/main/py2/gc/d7sc/u0",
       "SCP_TO_U0_VNC_X":"vnc/dot_vnc_xstartup",       
       "SCP_TO_SC_LOC":"/Users/dsm/DGit/y17bee/w1_cli/d3.phrasal.detect/src/main/py2/gc/d7sc",
       "SCP_TO_SC_FILE":"sc.py",
       "CI_SCP_FROM_FILE":""
       }
# "1600x1200","1440x900" "1600x1200"
CYY = { "OS_" : "tmux",
        "VNC_GEOMETRY":"1920x1200",
        "ECL_INST_ZIP":"",        
        "VNC_DOT_LCL":"dot_vnc_xstartup",
        "JV_INST":"asd",
        "APPS_LOC":"/opt"
       }
CXX.update(CYY)
CXX.update(CXX7G)




# [] 
def gcp_bin_exe_cmd(sCmd, bExe=True):
    print sCmd
    if bExe:
        process = subprocess.Popen( sCmd.split(), stdout=subprocess.PIPE)
        output, error = process.communicate()
        print output




class C10os():
    
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "os_create_swap": self.create_swap()                        
        elif actId == "os_update": self.update()                                    
        elif actId == "os_upgrade": self.upgrade()            
        elif actId == "ui_ubuntu": self.ui_ubuntu()
        elif actId == "os_setup":self.os_setup()                                                

            
    def __str__(self):
        sCmd = " os \n"
        sCmd += "101 create swap \n"
        sCmd += "102 update \n"
        sCmd += "103 upgrade \n "
        sCmd += "104 ui_ubuntu \n "        
        gcp_bin_exe_cmd(sCmd, bExe=False)
        
    def create_swap(self):
        sCmd = "sudo dd if=/dev/zero of=/var/swap bs=2048 count=524288 "
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "sudo chmod 600 /var/swap " 
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "sudo mkswap /var/swap " 
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "sudo swapon /var/swap " 
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "free -m "
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    
    def update(self):
        sCmd = "sudo apt-get "
        sCmd += " update"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
                
    def upgrade(self):
        sCmd = "sudo apt-get -y "
        sCmd += " upgrade"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        
        
    def ui_ubuntu(self):
        sCmd ="sudo apt-get -y install ubuntu-desktop; "
        sCmd += "sudo apt-get -y install gnome-panel gnome-settings-daemon gnome-terminal nautilus metacity "
        gcp_bin_exe_cmd(sCmd, bExe=False)
        
    def ui_gnome_deprecated(self):
        sCmd ="sudo apt-get -y install aptitude tasksel; "
        sCmd +="sudo tasksel install ubuntu-gnome-desktop --new-install "
        gcp_bin_exe_cmd(sCmd, bExe=False)        
                

    def os_setup(self):
        self.act("os_create_swap")
        self.act("os_update")
        self.act("os_upgrade")
        
        

# [] vnc

class C20vnc:
    vnc_id=1
    #elif actId == 203: self.vnc_xstartup()                                    
    def act(self,actId):
        if actId == "help": self.__str__()            
        elif actId == "vnc_list": self.vnc_list()
        elif actId == "vnc_restart": self.vnc_restart()
        elif actId == "vnc_start": self.vnc_start()                                    
        elif actId == "vnc_stop": self.vnc_stop()
        elif actId == "vnc_stop2": self.vnc_stop2()
        elif actId == "vnc_cln": self.vnc_cln_log_pid()        
        elif actId == "vnc_setup": self.vnc_setup()
        elif actId == "vnc_passwd":self.vnc_passwd()
        elif actId == "vnc_ui_ubuntu":self.vnc_ui_ubuntu()
        elif actId == "vnc_inst_vnc":self.vnc_inst_vnc()
        elif actId == "vnc_ufw":self.vnc_ufw()
        
                        
    def __str__(self):
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
        
    def vnc_ui_ubuntu(self):
        sCmd ="sudo apt-get -y install ubuntu-desktop "
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "sudo apt-get -y install gnome-panel gnome-settings-daemon gnome-terminal nautilus metacity "
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        
    def ui_gnome_deprecated(self):
        sCmd ="sudo apt-get -y install aptitude tasksel; "
        sCmd +="sudo tasksel install ubuntu-gnome-desktop --new-install "
        gcp_bin_exe_cmd(sCmd, bExe=False)                            

    def vnc_inst_vnc(self):
        sCmd ="sudo apt-get install vnc4server -y"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd ="sudo  /usr/sbin/adduser dwisianto"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "sudo apt-get -y install dconf-tools"
        sCmd ="dconf write /org/gnome/desktop/remote-access/require-encryption false"

    def vnc_ufw(self):
        sCmd ="sudo ufw allow 5901:5910/tcp"
        #sCmd += "chmod 755 /etc/X11/xinit/xinitrc"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)

    def vnc_passwd(self):
        sCmd ="vncpasswd"
        gcp_bin_exe_cmd(sCmd, bExe=False)
        
    def vnc_start(self):
        sCmd = "vncserver -geometry "+CXX.get("VNC_GEOMETRY")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)

    def vnc_stop(self):
        sCmd = "vncserver "
        sCmd += " -kill "
        sCmd += ":1"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        
    def vnc_stop2(self):
        sCmd = "vncserver "
        sCmd += " -kill "
        sCmd += ":2"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        
    def vnc_cln_log_pid(self):
        sCmd = "rm -f /tmp/.X1-lock"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "rm -f /tmp/.X11-unix/X1"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "rm -f .vnc/*log "
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "rm -f .vnc/*pid "
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        
    def vnc_restart(self):
        self.vnc_stop()
        self.vnc_stop2()
        self.vnc_cln_log_pid()
        self.vnc_start()
        
    def vnc_setup(self):
        self.act("vnc_ui_ubuntu")
        self.act("vnc_inst_vnc")
        self.act("vnc_ufw")
        self.act("vnc_passwd")
        sCmd = " # reboot machine "
        sCmd += " vncserver; # create dot_vnc folder and set up password "
        sCmd += " scp local dot_xstartup to dot_vnc folder"
        sCmd += " chmod 755 ~/.vnc/xstartup"
        #sCmd =" cp ~/dot_vnc_xstartup ~/.vnc/xstartup; "        
        gcp_bin_exe_cmd(sCmd, bExe=False)
        
    def vnc_list(self):
        sCmd = "vncserver "
        sCmd += " -list "
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)        



# [] mount disk
class C30disk:        
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "di_format": self.di_format()
        elif actId == "di_mount": self.di_mount()
        elif actId == "di7g_mount": self.di7g_mount()
        elif actId == "di_link": self.di_link()
        elif actId == "di_list": self.di_list()
    def __str__(self):
        sCmd = " disk \n"        
        sCmd += "CXX00 format \n"
        sCmd += "CXX00 mount \n"
        sCmd += "CXX00 umount \n"
        sCmd += "di_link link\n"
        gcp_bin_exe_cmd(sCmd, bExe=False)        
    #https://cloud.google.com/compute/docs/disks/add-persistent-disk#formatting
    def di_format(self):
        sCmd = "sudo mkfs.ext4 -F /dev/disk/by-id/google-"+CXX.get("DI_NAME")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "sudo mkdir /mnt/"+CXX.get("DI_NAME")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "sudo chown dwisianto:dwisianto /mnt/"+CXX.get("DI_NAME")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)        
    def di_mount(self):
        sCmd = "sudo mount -o discard,defaults /dev/disk/by-id/google-"+CXX.get("DI_NAME")
        sCmd += " /mnt/"+CXX.get("DI_NAME") 
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                
    def di_umount(self):
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def di7g_mount(self):
        sCmd = "sudo mount -o discard,defaults /dev/disk/by-id/google-"+CXX.get("DI7G_NAME")
        sCmd += " /mnt/"+CXX.get("DI7G_NAME") 
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    #https://cloud.google.com/compute/docs/disks/add-persistent-disk#formatting
    def di7g_format(self):
        sCmd = "sudo mkfs.ext4 -F /dev/disk/by-id/google-"+CXX.get("DI7G_NAME")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "sudo mkdir /mnt/"+CXX.get("DI7G_NAME")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "sudo chown dwisianto:dwisianto /mnt/"+CXX.get("DI7G_NAME")
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                                        
    def di_link(self):
        sCmd = "ln -s /mnt/"+CXX.get("DI_NAME")+"d7sc ~/"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                        
    def di_list(self):
        sCmd = "lsblk"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)                        
        

# [] java
class C40apps:        
    def act(self,actId):
        if actId == "CCXX00": self.__str__()
        elif actId == "help": self.__str__()
        elif actId == "stp_java": self.stp_java()
        elif actId == "stp_ecl": self.stp_ecl()
        elif actId == "stp_git": self.stp_git()
        elif actId == "stp_emacs": self.stp_emacs()
        elif actId == "stp_tmux": self.stp_tmux()
        elif actId == "stp_p7zip": self.stp_p7zip()
    def __str__(self):
        sCmd = " template \n"        
        sCmd += "CXX00 help \n"
        sCmd += "stp_java \n"
        sCmd += "stp_ecl \n"
        sCmd += "stp_git \n"
        sCmd += "stp_emacs \n"
        print sCmd
        #gcp_bin_exe_cmd(sCmd, bExe=False)        
    def stp_java(self):
        sCmd = " sudo add-apt-repository ppa:webupd8team/java"
        gcp_bin_exe_cmd(sCmd, bExe=False)
        sCmd = " sudo apt update"
        gcp_bin_exe_cmd(sCmd, bExe=False)        
        sCmd = " sudo apt install oracle-java8-installer"
        gcp_bin_exe_cmd(sCmd, bExe=False)
        sCmd = " sudo apt install oracle-java8-set-default "
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def stp_maven(self):
        sCmd = " sudo apt-get install maven"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def stp_ant(self):
        sCmd = " sudo apt-get install ant"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
    def stp_ecl(self):
        sCmd = " # eclipse installer;  "
        sCmd = " # nano ~/.local/share/applications/eclipse.desktop "
        sCmd += " # bashme" 
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def stp_git(self):
        sCmd = " # eclipse installer "
        sCmd = " # nano ~/.local/share/applications/eclipse.desktop "
        sCmd += " # bashme" 
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def stp_emacs(self):
        sCmd ="sudo apt-get install emacs -y "
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def stp_tmux(self):
        sCmd = " sudo apt-get install tmux"        
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)
        sCmd = "git clone https://github.com/tmux-plugins/tmux-resurrect /home/dwisianto/d7sc/u0/tmux"  
        sCmd = "vi ~/.tmux.conf"
        sCmd = "vi ~/d7sc/ap/tmux"   
    def stp_smartgi(self): 
        sCmd = "sudo dpkg -i smargit.deb" 
        gcp_bin_exe_cmd(sCmd, bExe=False)
    def stp_gdebi(self):
        sCmd = "sudo apt-get install gdebi-core"        
        gcp_bin_exe_cmd(sCmd, bExe=False)     
    def stp_remarkable(self):
        sCmd = "sudo gdebi install remarkable"        
        gcp_bin_exe_cmd(sCmd, bExe=False)     
    def stp_tree(self):
        sCmd = "sudo apt-get install tree"        
        gcp_bin_exe_cmd(sCmd, bExe=False)     
    def stp_p7zip(self):
        sCmd = "sudo apt-get install p7zip-full"        
        gcp_bin_exe_cmd(sCmd, bExe=False)     
    def stp_tomcat(self):
        sCmd = "sudo apt-get install tomcat"        
        gcp_bin_exe_cmd(sCmd, bExe=False)     
    def stp_chrome(self):
        sCmd = "sudo add-apt-repository universe"
        sCmd = "dpkg -i chrome-stable.deb"   
    def stp_cfg(self):
        sCmd = "sudo apt-get install compizconfig-settings-manager"
        sCmd ="ccsm"      
    def stp_geany(self):
        sCmd = "sudo apt-get install geany"
        sCmd = "sudo apt-get install geany-plugin"
    def stp_haroopad(self):
        sCmd = "wget https://bitbucket.org/rhiokim/haroopad-download/downloads/ha.deb"
        sCmd = "sudo apt-get install gdebi"
        sCmd = "sudo gdebi haroopad.deb"
    def stp_postman(self):
        sCmd = "wget https://dl.pstmn.io/download/latest/linux64 -O postman.tar.gz"
        sCmd = "sudo tar -xzf postman.tar.gz -C /opt"
        sCmd = "sudo ln -s /opt/Postman/Postman /usr/bin/postman"
        #cat > ~/.local/share/applications/postman.desktop <<EOL
        #[Desktop Entry]
        #Encoding=UTF-8
        #Name=Postman
        #Exec=postman
        #Icon=/opt/Postman/resources/app/assets/icon.png
        #Terminal=false
        #Type=Application
        #Categories=Development;
        #EOL                            
    def stp_doublecmd(self):
        sCmd = "sudo add-apt-repository ppa:alexx2000/doublecmd"
        sCmd = "sudo apt-get update"
        sCmd = "sudo apt-get install doublecmd-gtk"
    def stp_wmctrl(self):
        sCmd = "sudo apt-get install wmctrl"
    def stp_jabref(self):
        sCmd = "sudo apt-get install jabref"
    def stp_(self):
        sCmd = ""
    def app_setup(self):
        self.act("")
        self.act("")
        
                                 
        

# [] 
class F20work:
    C10=C10os()       
    C20=C20vnc()
    C30=C30disk()  
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "wk_start" : self.wk_start()
        elif actId == "wk_stop" : self.wk_stop()
        elif actId == "wk_setup" : self.wk_setup()
    def __str__(self):
        sCmd = " F20work\n"        
        sCmd += "CXX00 help \n"
        print sCmd
        #gcp_bin_exe_cmd(sCmd, bExe=False)
    def wk_setup(self):
        #C30.act("di_mount") # mount disk        
        C30.act("di7g_mount") # mount disk        
        time.sleep(5) # start                        
        C20.act("vnc_start") # start vnc
        
        # link to mounting disk
        
    #sCmd = "tmux "
    #sCmd = "remarkable"                
    def wk_start(self):
        sCmd = "doublecmd "
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)     
        sCmd = "gnome-terminal"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)     
        sCmd = "/usr/share/smartgit/bin/smartgit.sh"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)     
        sCmd = "/home/dwisianto/d7sc/u0/j/ecl/e18b/eclipse -data /home/dwisianto/d7sc/w0/wc"        
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)     
        sCmd = "geany"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)     
        sCmd = "postman"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)     
        sCmd = "firefox"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)     
        sCmd = "google-chrome"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)     
    #sCmd = "sudo shutdown -h now"
    def wk_stop(self):
        sCmd = "sudo shutdown -h now"
        gcp_bin_exe_cmd(sCmd, bExe=bExeGlobal)     
        # start vnc
        # mount disk
        # link to mounting disk
        print "hi" # start vnc

    
         

# [] template
class CXXtemplate:        
    def act(self,actId):
        if actId == "help": self.__str__()
        elif actId == "doSomething": self.doSomething()
    def __str__(self):
        sCmd = " template \n"        
        sCmd += " help \n"
        gcp_bin_exe_cmd(sCmd, bExe=False)        
    def doSomething(self):
        pass



# []
ACT_DICT={"vm_start":"start a vm",
         "vm_stop":"stop a vm",
         "ssh_to":" connect to vm",
         "scp_to_sc":"copy sc to vm",
         "lst_ci":"external ip for vnc",
         "lst_im":"",
         "lst_fw":"",         
         "ci_im_store":" backup os",
         "ci_im_create":"create image from store"
         }
ACT_ID="help"
bExeGlobal=True 
if __name__ == '__main__':
    
    actId= str(sys.argv[1]) if( len(sys.argv) == 2 ) else ACT_ID
    
    C10 = C10os()
    C20 = C20vnc()
    C30 = C30disk()
    C40 = C40apps()
    F20 = F20work()
    
    C10.act(actId)
    C20.act(actId)
    C30.act(actId)
    C40.act(actId)
    F20.act(actId)
    
    
    

# 
# 