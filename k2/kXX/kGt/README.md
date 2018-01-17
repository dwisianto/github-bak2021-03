

## Git


| comment | description |
|--------|--------|
| init | |
| push | |
| pull | |
| clone | |


### Initilize

```
git init


```

### Configuration

ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_g_dsm -C "your_email@youremail.com"
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_b_dsm -C "your_email@youremail.com"

~/.ssh/config
```

```



### Muliple Users and Multiple Accounts


### github and ssh

* [github-ssh-key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
* [ssh-multiple](https://dbushell.com/2013/01/27/multiple-accounts-and-ssh-keys/)
*  [multiusers](https://www.keybits.net/post/automatically-use-correct-ssh-key-for-remote-git-repo/)

Verbatim code
```
#activehacker account
Host github.com-user1
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_activehacker

#jexchan account
Host github.com-user2
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_jexchan
```

```
Host bitbucket.org
  User git
  Hostname bitbucket.org
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa

Host bitbucket-accountB
  User git
  Hostname bitbucket.org
  PreferredAuthentications publickey
  IdentitiesOnly yes
  IdentityFile ~/.ssh/accountB
```




```
Host github.com-dwisianto
     HostName github.com
     User dwisianto
     IdentityFile ~/.ssh/id_rsa
     PreferredAuthentications publickey
     IdentitiesOnly yes
Host *
     HostName github.com
     User yuanyuanli66
     IdentityFile ~/.ssh/id_rsa_yyl66
     PreferredAuthentications publickey
     IdentitiesOnly yes
```
