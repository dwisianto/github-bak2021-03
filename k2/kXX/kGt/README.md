# Git

- [Git Configuration](#git-configuration)
    - [ssh-key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-mac)
- [Routine](#routine)
    - [Setup Local and Remote Repository](#setup-local-and-remote-repository)
    - [Fetch Pull Rebase Autostash](#fetch-pull-rebase-autostash)
    - [status-add reset checkout](#status-add-reset-checkout)    
- [Clean](#git-clean)    
- [Stash](#git-stash)    
- [Branch](#git-branch)
- git accounts
    - ssh keys
- git commands
    - undoing changes
    - rewriting git history
    - remote reposistory
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

### Fetch Pull Rebase Autostash

We want to update the sandbox with the latest changes from others. 
The current changes will be stashed away.  

- git fetch
- git pull --rebase --autostash
- git stash list

GoTo [Top](#git)    

### clean local and untracked files from the current working tree

- git clean --dry-run # it is a dry run to show what will be deleted
- git clean
- git clean --f -d # to clean directory
    - git clean -fd
    - git clean --force  
- git clean -f -X  # to clean ignored files
    - git clean -fX
- git clean -f -x # to clean ignored and non-ignored files
    - git clean -fx
    
GoTo [Top](#git)    

### status add reset checkout

- git status 
- git log 
- git add -A . # approved all modified files but not untracked file 
- git status            # all changes files are staged 
- git reset HEAD specificFileName # to unstage but keep the modification
- git checkout -- specificFileName # to discard changes in the local repository
- git commit -m commitMessage

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

### revert 1 : 

- git add -A . # add all 
- git commit -m "commitMessages"
- git log # remember the hashCode of the commit
- git show hasCode #
- git revert #

### revert 2 : reset --hard

- Forget everything: Don't want to keep track of anything
- git log
- git reset --hard 

 
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


### Stash pop and reset

- git stash list --date=relative
- git stash pop stash@{0}
- git reset --hard


### git rebase vs git merge

- git rebase # accept other's changes and try to mix the changes together
- git merge # accept others' changes and continue with me
- git pull --rebase --autostash
- git stash show 
- git stash show -p
    - If there is a conflict then we can show the difference
- git mergetool


## git add

- git add --update :/
    - will update or remove previously tracked files from the entire working tree. It will not add new files.    
- git add -A 
    - It will also update, remove previously tracked files, but it will also add new files. As this command doesn't have the explicit pathspec of :/ that your update command does, depending on your version of git, this may be for all files in the entire working tree, or it may be for the current directory and all subfolders and files.
    

## git clean

- git help clean
- git clean --dry-run
- git clean -force 
- git clean -f -d 
    - to remove directory
    - git clean -fd 
- git clean -f -X
    - to remove ignored files
    - git clean -fX
- git clean -f -x 
    - to remove ignored and non-ignored files 

## git stash

- git stash list
    - git stash list --date=relative # sort by date
- git stash --keep-index
- git stash --include-untracked
 sta- git stash save <myMessage>
- git stash pop stash@\{1\}
    - "git stash pop" is basically "git statsh apply" and "git stash drop"
- git stash apply
- git stash drop


### git stash pop conflict



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
 



## git branch

- git branch --all
    - list all available branches
- git branch
    - 
- git branch aNewBranchName
    - create a new branch with the name aNewBranchName
- git checkout anExistingBranchName    
- git checkout -b <branchName>
- git merge <branch>
    - merge <branch> into the current branch
    - ToDo: Still don't quite understand merge branch
- git delete    
    - ToDo: don't undersand 
    
### git branch errors

- git add -u .
Now you can apply your stash without git complaining (hopefully):
- git stash pop
Now unstage everything, but leave the files as they are now:
- git reset







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
Host github.com-userName1
     HostName github.com
     User username1
     IdentityFile ~/.ssh/id_rsa
     PreferredAuthentications publickey
     IdentitiesOnly yes
Host *
     HostName github.com
     User userName2
     IdentityFile ~/.ssh/id_rsa_yyl66
     PreferredAuthentications publickey
     IdentitiesOnly yes
```

## Glossary

- git add
- git status
- git log
- git diff
- git add
- git reset
- git revert
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


