# Ec2

- 
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


# VNC


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




# EBS

```bash
sudo -i # change to the root user
df -TH # list available disk
fdisk -l # list available disk
mkfs.ext4 /dev/xxx # format the disk
lsblk # to check if the disk is formatted
mount /dev/source /mnt/ebs19a
ls /mnt
```

```
ls -l /mnt/
chown -R ubuntu:ubuntu /dev/ebs19a

```



# Java


- [digitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04)

## Oracle Java

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
