# Ec2

- [macos](#macos)
- [centos](#centos)
    - [epel](https://fedoraproject.org/wiki/EPEL)
    - [pyenv](https://github.com/pyenv/pyenv/wiki)
    - [pyenv2](https://gist.github.com/clozed2u/b0421d8af60e26d97372)
    - [Swap Space](#swap-space)
    - [python](#python)
    - [maven](#maven)
- [ubuntu](#ubuntu) 
- References
    - [centOs7Vnc](https://www.youtube.com/watch?v=aiFfHYuumXU)
    - [VNC on EC2 Centos 7.2 AMI](http://devopscube.com/how-to-setup-gui-for-amazon-ec2-rhel-7-instance/)
    - [centos](https://gist.github.com/mikaelMortensenADI/d820435eaee92f518e12f3d92e3a0ce4)
    - [centos6vnc](https://rbgeek.wordpress.com/2012/06/26/how-to-install-vnc-server-on-centos-6/)
    - [vnc-gui](https://stackoverflow.com/questions/25657596/how-to-set-up-gui-on-amazon-ec2-ubuntu-server)


# Launch Instance

## Instance

- image
- size
- tag
    - Name : ec2u19s    
- security group
    - tag


# MACOS

- /etc/ssh/sshd_config
- edit the file etc/ssd/sshd_config by 
Set X11Forwarding to no


# CentOS

## Update 

- Update the server using the following command

```bash
yum repolist
sudo yum -y update # Update the server using the following command.
sudo yum -y install epel-release
sudo yim -y install emacs
```


## VNC

- VNC Password is usually derived from the user password. Setup VNC password for you user account, this is used when you login to your EC2 Desktop The user name is centos. Update the password 

```bash
passwd centos
```

- install the gnome desktop

```bash
sudo yum -y groupinstall "GNOME Desktop"
sudo yum install -y tigervnc-server
```

- Create SystemD the first service file in the etc folder. Replace the username in the file vncserver@1.service with the user centos. Notice the file in the etc folder has different name than the source, i.e. **vncserver@1.service**

```bash
sudo cp /lib/systemd/system/vncserver@.service /etc/systemd/system/vncserver@1.service
sudo emacs -nw /etc/systemd/system/vncserver@1.service
```

- Update the firewall rules

```bash
 # sudo yum install firewalld # if firewall-cmd not found
 # service firewall stop 
 sudo service firewalld start
 sudo firewall-cmd --permanent --zone=public --add-service vnc-server
 sudo firewall-cmd --reload
```

- Edit the **/etc/ssh/sshd_config** , change the "PasswordAuthentication no " to "PasswordAuthentication yes " (Is this optinal?) 

```bash
 sudo systemctl restart network # this command may fail
 sudo systemctl restart sshd # this could be an optional 
 sudo systemctl daemon-reload
 sudo systemctl enable vncserver@:1.service
```

- Start VNC server for the first time need the user to set password

```bash
$ su - centos
$ vncserver -geometry 1440x900
```

```bash
PID=1
GEO=1440x900

all : set

del:
        vncserver -kill :1

set:
        find ./ -name "*~" -delete
        find ./ -name "*$(PID).log" -delete
        find ./ -name "*$(PID).pid" -delete
        vncserver -geometry $(GEO)
        
```

- Connect to VNC server and  connect to cloud server with tunnel forwarding for VNC desktop :1. :2 is 5902, :3 is 5903 and so on.
ssh -L 5901:localhost:5901 -i <your.pem> EC2-user@<public IP/DNS name>

Use localhost:1 as the server name

- Changing resolution of the VNC desktop (optional). Open xterm. xrandr by itself shows all available resolutions.

```bash
xrandr -s <resultion>
```

-  fix [firewall](https://www.tecmint.com/fix-firewall-cmd-command-not-found-error/)

```bash
sudo systemctl start firewalld
sudo systemctl enable firewalld
sudo systemctl status firewalld
```

## Partition

```bash
sudo -i # change to the root user
df -TH # list available disk
fdisk -l # list available disk
mkfs.ext4 /dev/xxx # format the disk
lsblk # to check if the disk is formatted
mount /dev/source /mnt/ebs19a
chown -R ubuntu:ubuntu /dev/ebs19a
ls /mnt
```

```
ls -l /mnt/
chown -R ubuntu:ubuntu /dev/ebs19a
sudo emacs -nw /etc/fstab
/dev/vdb /home2 ext4 defaults 0 0 
```

### Partition Resizing

```bash
sudo emacs -nw /etc/fstab #comment out the device /dev/nvme1n1
sudo umount /dev/sdk#umount the partition
sudo fdisk -l /dev/nvme1n1 
sudo fdisk /dev/nvme1n1
#exist from fdisk
lsblk
sudo mkfs.ext4 /dev/nvme1n1p1
sudo emacs -nw /etc/fstab #comment out the device /dev/nvme1n1
```


## Swap Space

- [swapSpace1](https://dev.to/hardiksondagar/how-to-use-aws-ebs-volume-as-a-swap-memory-5d15)
- [swapSpace2](https://serverfault.com/questions/521790/how-can-i-create-a-swap-partition-on-amazon-ec2-with-ephemeral-storage)
- [swapIncrease](https://www.vembu.com/blog/increase-swap-memory-centos-7/)

- swap space

```bash
sudo swapon -s 
lsblk
sudo mkswap /dev/xvdf
sudo swapon /dev/xvdf
sudo swapon --show
```

- sudo nano /etc/fstab

```bash
/dev/xvdf none swap sw 0 0 df
```

### Resizing Swap space

```bash
sudo swapoff -a
sudo emacs -nw /etc/fstab # comment out the swap partition
df # see existing mapping
ls -l /dev/ # see available devices
fdisk /dev/nvme2n1
print # print the partition table
new # create a new partition
primary # it is primary type
# accept the default values (three steps)
l # list
t # change partition id
82 # for swap information
w # write down the partition information
p # print the partition 
partprobe /dev/nvme2n1p1
sudo mkswap /dev/nvme2n1p1
sudo swapon /dev/nvme2n1p1
sudo swapon --show
```






## Java

- [java-centos7](https://linuxize.com/post/install-java-on-centos-7/)

```bash
sudo yum -y install curl #optional
curl -L -b "oraclelicense=a" -O http://download.oracle.com/jdk-9.0.4_linux-x64_bin.rpm # optional
sudo yum localinstall  jdk-9.0.4_linux-x64_bin.rpm
sudo alternatives config --java
sudo alternatives config --javac
sudo emacs -nw /etc/environment
source /etc/enviroment

echo $JAVA_HOME
```

### Maven

```bash
sudo yum -y install maven
```


## Python


```bash
sudo yum -y install gcc gcc-c++ 
sudo yum -y install zlib zlib-devel
sudo yum -y install libffi-devel 
sudo yum -y install gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel

git clone git://github.com/yyuu/pyenv.git ~/.pyenv
echo 'export PATH="$HOME/.pyenv/bin:$PATH"' >> .bashrc
echo 'eval "$(pyenv init -)"' >> .bashrc

pyenv install 2.7.10
pyenv global 2.7.10
pyenv rehash
```


## Gnome

- remove home folder from desktop
```bash
 gsettings set org.gnome.nautilus.desktop home-icon-visible false
 gsettings set org.gnome.nautilus.desktop trash-icon-visible false
```  



# Ubuntu


## GNOME 

- Setting up ui based ubuntu machine on AWS.

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install ubuntu-desktop
sudo apt-get install vnc4server
sudo apt-get install gnome-panel gnome-settings-daemon metacity nautilus gnome-terminal
```


## GNOME-TERMINAL not working
 
- edit the file /etc/default/locale

LANG="en_US.UTF-8"
LANGUAGE="en_US"

## XSTARTUP

- dot_vnc/xstartup

```bash
#!/bin/sh

export XKL_XMODMAP_DISABLE=1
unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS

[ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
[ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
xsetroot -solid grey
vncconfig -iconic &

gnome-panel &
gnome-settings-daemon &
metacity &
nautilus &
gnome-terminal &
```

- bash

```bash
vncserver
vncserver -kill :portNumber
```






## VNC Client
- connect to the instance


```bash
ec2_u19a:
        ssh -i $(EC2U19a_KEY) ubuntu@$(EC2U19a_IP1).us-east-2.compute.amazonaws.com
```







## Java


- [digitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04)

### Oracle Java

```bash
sudo add-apt-repository ppa:webupd8team/java
sudo apt install oracle-java8-installer
sudo update-alternatives --config java
sudo update-alternatives --config javac
sudo nano /etc/environment
source /etc/environment
echo $JAVA_HOME
```
    


# EBS

- Create an ebs of certain size in a specific region.
- Attach it to an instance and specify the name


```bash
sudo -i # change to the root user
df -TH # list available disk
fdisk -l # list available disk
mkfs.ext4 /dev/xxx # format the disk
lsblk # to check if the disk is formatted
mount /dev/source /mnt/ebs19a
chown -R ubuntu:ubuntu /dev/ebs19a
ls -l /mnt/
chown -R ubuntu:ubuntu /dev/ebs19a
sudo emacs -nw /etc/fstab
```

# EIP

- Elatic IP and attach it to a specific instance





# Eclipse

- /etc/environement
- Use Marketplace to install PyDev and CDT 



# Tomcat

- https://hostpresto.com/community/tutorials/how-to-install-apache-tomcat-9-on-centos-7/
- https://readlearncode.com/cloud/amazon-free-usage-tier-installing-tomcat-7-on-an-ec2-linux-instance/
- https://www.cyberciti.biz/faq/howto-rhel-linux-open-port-using-iptables/
- Misc
    - https://www.rosehosting.com/blog/install-tomcat-9-on-centos-7/
    - https://www.digitalocean.com/community/tutorials/how-to-install-apache-tomcat-7-on-centos-7-via-yum
    - https://serverfault.com/questions/556752/install-tomcat7-on-ec2


```bash
iptables -L -n
lsof -i :8080
netstat -natlp
```

## Tomcat 9




## Tomcat 7

```bash
sudo yum install tomcat
# Most of the important Tomcat files will be located in /usr/share/tomcat. 
# If you already have a Tomcat application that you want to run, you can place it in the /usr/share/tomcat/webapps directory, 
sudo vi /usr/share/tomcat/conf/tomcat.conf
# JAVA_OPTS="-Djava.security.egd=file:/dev/./urandom -Djava.awt.headless=true -Xmx512m -XX:MaxPermSize=256m -XX:+UseConcMarkSweepGC"
# 
```

## install admin packages

```bash
sudo yum install tomcat-webapps tomcat-admin-webapps
# This adds the ROOT, examples, sample, manager, and host-manager web apps to the tomcat/webapps directory.
```

## Web Management Interface


In order to use the manager webapp installed in the previous step, we must add a login to our Tomcat server. We will do this by editing the tomcat-users.xml file:

```bash
    sudo vi /usr/share/tomcat/conf/tomcat-users.xml
```

This file is filled with comments which describe how to configure the file. You may want to delete all the comments between the following lines, or you may leave them if you want to reference the examples:
tomcat-users.xml excerpt

```bash
<tomcat-users>
...
</tomcat-users>
```

You will want to add a user who can access the manager-gui and admin-gui (the management interface that we installed earlier). You can do so by defining a user similar to the example below. Be sure to change the username and password to something secure:

```bash
tomcat-users.xml — Admin User

<tomcat-users>
    <user username="admin" password="password" roles="manager-gui,admin-gui"/>
</tomcat-users>
```

Save and exit the tomcat-users.xml file.

Now we're ready to start the Tomcat service.


## Start Tomcat

To put our changes into effect, restart the Tomcat service:

```bash
    sudo systemctl start tomcat
```

If you started the service earlier for some reason, run the restart command instead:

```bash
    sudo systemctl restart tomcat
```    


## Enable Tomcat Service

If you want Tomcat to run every time the server is booted up, you will need to enable the service:

```bash
    sudo systemctl enable tomcat
```    


## Access the Web Interface




 


# Bak



- Then run following commands and enter the login password for vnc connection:

```bash
su - awsgui

vncserver

vncserver -kill :1

vim /home/awsgui/.vnc/xstartup
```


- When you're done, hit Ctrl + C on the keyboard, type :wq and hit Enter.
Then start vnc server again.

```bash
vncserver
```




- Open up port 5901
 
```bash
    sudo iptables -A INPUT -p tcp --dport 5901 -j ACCEPT
```


- Create new user with password login

```bash
sudo useradd -m awsgui
sudo passwd awsgui
sudo usermod -aG admin awsgui

sudo vim /etc/ssh/sshd_config # edit line "PasswordAuthentication" to yes

sudo /etc/init.d/ssh restart
```
