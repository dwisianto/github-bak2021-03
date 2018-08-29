# Git

- [Git Configuration](#git-configuration)
- [Routine](#routine)
    - [Setup Local and Remote Repository](#setup-local-and-remote-repository)
    - [status-add reset checkout](#status-add-reset-checkout)
- [Git Branch](#git-branch)
- undoing changes
- rewriting git history
- remote reposistory

- git accounts
- git commands
- ide
    - smartgit
    - githubDesktop : 
    - egit : eclipse git



## Git Configuration

### git help

- git help 
- git help init
- git help add

### Git Config

- git config --global user.name "myName"
    - set the name you want attached to your commit transactions
- git config --global user.email "emailAddress"
    - set the email you want attached to your commit transactions
- git config --global color.ui auto
    - enables helpful colorization of command line output
    

## Routine

- git pull is essentially "git fetch" and "git merge"
[git_fetch_and_merge](https://longair.net/blog/2009/04/16/git-fetch-and-merge/)


### Setup Local and Remote Repository

- git init <projectName>
    - create a new local repository with the specific name
- git init --raw <projectName>
    - create a raw local repository
- git clone <githhubProject>
    - clone a remote github project 
    
GoTo [Top](#git)

### status add reset checkout

- git status 
- git add -A . # approved all modified files but not untracked file 
- git status
- git reset HEAD <file> # to unstage but keep the modification
- git checkout -- <file> # to discard changes in the local repository
- git commit -m <message>

GoTo [Top](#git)

###  add-reset-commit


- git status
- git diff  # show file differences not yet staged
- git add <file> # to update what will be committed
- git checkout -- <file> # to discard changes in the working directory
- git diff --staged # show file differences between staging and the last file version
- git reset [file] # unstages the file but preserve its contents
- git commit -m "[descriptive message]" # records file pe	rmanently in version history

GoTo [Top](#git)
 
### Routine2 : Branches

- git branch
- git branch [branch-name] # create a new branch
- git checkout [branch-name] # 
- git merge [branch] # combine the specified branch history into the current branch
- git branch -d [branch-name] # delete the specified branch



### Refactor FileNames

- git rm [file] # dletes the file from the working directory and stages the deletion
- git rm --cached [file] # removes the file from version control but perserves the file locally
- git mv "file-original" "file-renamed" # changes the file name and prepares it for commit


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
 # activehacker account
Host github.com-user1
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_activehacker

 # jexchan account
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

## Glossary

- 
- remote
- origin
- master
- https://www.quora.com/What-does-git-remote-and-origin-mean
- branch
- merge
- stash
- 


## ToDo

### Urgent

### Important

### Idealist

- difference between remote and origin
- cheatsheet
    - [github](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
    - [bitbucket]()
- https://stackoverflow.com/questions/52704/how-do-i-discard-unstaged-changes-in-git


