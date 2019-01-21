# Ec2


- [centos](https://gist.github.com/mikaelMortensenADI/d820435eaee92f518e12f3d92e3a0ce4)
- https://rbgeek.wordpress.com/2012/06/26/how-to-install-vnc-server-on-centos-6/
- [vnc-gui](https://stackoverflow.com/questions/25657596/how-to-set-up-gui-on-amazon-ec2-ubuntu-server)


# Launch Instance

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


# EBS

- Create an ebs of certain size
- Attach it to an instance
- Connect to the running instance

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
```



# CentOS



## Update 

- [epel](https://fedoraproject.org/wiki/EPEL)

```bash
yum repolist
sudo yum -y update # Update the server using the following command.
sudo yum -y install epel-release
sudo yim -y install emacs

```


## VNC


- [centOs7Vnc](https://www.youtube.com/watch?v=aiFfHYuumXU)
- [VNC on EC2 Centos 7.2 AMI](http://devopscube.com/how-to-setup-gui-for-amazon-ec2-rhel-7-instance/)


- Update the server using the following command.

```bash
sudo yum -y update
sudo yum install firewalld # firewall-cmd not found
sudo yum -y install emacs
```

```bash
sudo yum -y groupinstall "GNOME Desktop"
sudo yum install -y tigervnc-server
```

- Setup VNC password for you user account, this is used when you login to your EC2 Desktop The user name is centos. Update the password 

```bash
passwd centos
```

- Create SystemD the first service file in the etc folder

```
cp /lib/systemd/system/vncserver@.service /etc/systemd/system/vncserver@1.service
```
- Replace the username in the file vncserver@1.service with the user centos

```bash
```

- Update the firewall rules

```bash
sudo yum install firewalld # firewall-cmd not found
$ # service firewall stop 
$ service firewall start
$ firewall-cmd --permanent --zone=public --add-service vnc-server
$ firewall-cmd --reload
```

- Edit the /etc/ssh/sshd_config , change the "PasswordAuthentication no " to "PasswordAuthentication yes " 

```bash
- sudo systemctl restart network
- sudo systemctl restart sshd
```

- Start VNC server

```bash
$ sudo systemctl daemon-reload
$ sudo sytemctl enable vncserver@:1
$ su - centos
$ vncserver -geometry 1440x900
```

- Connect to cloud server with tunnel forwarding for VNC desktop :1. :2 is 5902, :3 is 5903 and so on.
ssh -L 5901:localhost:5901 -i <your.pem> EC2-user@<public IP/DNS name>


8. Connect to VNC server 
Use localhost:1 as the server name

9. Changing resolution of the VNC desktop (optional)
Open xterm
#xrandr by itself shows all available resolutions.
xrandr -s <resultion>


### Firewall

- [fix](https://www.tecmint.com/fix-firewall-cmd-command-not-found-error/)

```
sudo systemctl start firewalld
sudo systemctl enable firewalld
sudo systemctl status firewalld
```


## Java

- [java-centos7](https://linuxize.com/post/install-java-on-centos-7/)

```bash
sudo yum -y install curl 
curl -L -b "oraclelicense=a" -O http://download.oracle.com/jdk-9.0.4_linux-x64_bin.rpm
sudo yum localinstall  jdk-9.0.4_linux-x64_bin.rpm
sudo emacs -nw /etc/environment
source /etc/enviroment
echo $JAVA_HOME
sudo alternatives config --java
```

## Mount


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
