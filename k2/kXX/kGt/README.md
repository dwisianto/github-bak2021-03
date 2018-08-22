# Git

- basic
- undoing changes
- branches
- rewriting git history
- remote reposistory

- git accounts
- git commands
- git ide


- https://stackoverflow.com/questions/52704/how-do-i-discard-unstaged-changes-in-git
- 

## git help

- git help 
- git help init
- git help add


## git clone


- 
- 
-
 
## git init

- 
-
- 

## git status

## git reset [#git-reset]


## git add

- git add --update :/
    - will update or remove previously tracked files from the entire working tree. It will not add new files.    
- git add -A 
    - It will also update, remove previously tracked files, but it will also add new files. As this command doesn't have the explicit pathspec of :/ that your update command does, depending on your version of git, this may be for all files in the entire working tree, or it may be for the current directory and all subfolders and files.
    
## git rm

## git commit

- git commit -m "myMessage"

## git push

## git pull


## git clean

-- git help clean
-- git clean --dry-run
-- git clean -force 
-- git clean -f -d 
    - to remove directory
    - git clean -fd 
-- git clean -f -X
    - to remove ignored files
    - git clean -fX
-- git clean -f -x 
    - to remove ignored and non-ignored files 
-- git 

## git stash


- git stash list
- git stash save <myMessage>
- git stash pop stash@\{1\}
    - "git stash pop" is basically "git statsh apply" and "git stash drop"
- git stash apply
- git stash drop

### git stash --keep-index

### git stash --include-untracked



### git stash pop error

- git stash pop stash@\{1\}
- error message
error: Your local changes to the following files would be overwritten by merge:
	annotator-for-clinical-data/.classpath
	annotator-for-clinical-data/.settings/org.eclipse.core.resources.prefs
Please commit your changes or stash them before you merge.

- Solution


For those who do have un-committed work, and want to pop their stash without losing that work, here is a way (with thanks to @iFreilicht):

Temporarily stage any uncommitted changes:

git add -u .
Now you can apply your stash without git complaining (hopefully):

git stash pop
Now unstage everything, but leave the files as they are now:

git reset
 

## git reset

- git reset
- git revert


## git branch

- git branch
    - list all available branches
- git branch <newBranchName>
    - create a new branch with the name <newBranchName>
- git checkout branchName
    - asdf
- git checkout -b <branchName>
    - asdf
- git merge <branch>
    - merge <branch> into the current branch
- git delete    
    
### git branch errors

- git add -u .
Now you can apply your stash without git complaining (hopefully):
- git stash pop
Now unstage everything, but leave the files as they are now:
- git reset


## git add

## git revert

- git revert



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

> ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_g_dsm -C "your_email@youremail.com"

> ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_b_dsm -C "your_email@youremail.com"

```
ssh-add
ssh-add 
```


```
~/.ssh/config
git clone ssh://git@github.com/<user>/<repository name>.git
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


## ToDo

- difference between remote and origin