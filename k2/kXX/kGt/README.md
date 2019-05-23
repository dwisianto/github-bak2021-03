# Git

- [Git Configuration](#git-configuration)
    - [ssh-key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-mac)
    - [ssh-agent](https://medium.freecodecamp.org/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca)
- [Routine](#routine)
    - [Setup Local and Remote Repository](#setup-local-and-remote-repository)
    - [Fetch Pull Rebase Autostash](#fetch-pull-rebase-autostash)
    - [status-add reset checkout](#status-add-reset-checkout)    
- [Clean](#git-clean)    
- [Stash](#stash)    
    - [tutorial-stash-a](https://hackernoon.com/how-to-git-stash-your-work-the-correct-way-199af0b99cc9)
- [Branch](#git-branch)
    - [faq-rebase-vs-merge](https://stackoverflow.com/questions/804115/when-do-you-use-git-rebase-instead-of-git-merge)
- [Diff](#diff)
    - [file-diff-branches](https://stackoverflow.com/questions/4099742/how-to-compare-files-from-two-different-branches)
- [Log](#log)
    - [log-of-a-file](https://stackoverflow.com/questions/278192/view-the-change-history-of-a-file-using-git-versioning)    
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
    - [egit-rebase-interactive](https://www.instructables.com/id/How-to-Rebase-Interactive-With-Eclipse-eGit/)


---

# Git Configuration

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


# Routine

- git pull is essentially "git fetch" and "git merge"
[git_fetch_and_merge](https://longair.net/blog/2009/04/16/git-fetch-and-merge/)

## How to Keep two branch in sync

```bash
git checkout master
git commit -am "message"
git checkout gh-pages
git merge --ff-only master
```

GoTo [Top](#git)

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

| | |
|-|-|
| git help clean | |  
| git clean --dry-run | |
| git clean -n | dry run |
| git clean -force | |
| git clean -f -d | remove a directory |
| git clean -fd  | to remove directory |  
| git clean -f -X | to remove ignored files |
| git clean -fX | |
| git clean -f -x | to remove ignored and non-ignored files |


## git size

Estimate size of a sandbox

```bash
git gc
git count-objects -vH
```



# stash

Suppose you are implementing a new feature for your product. 
Your code is in progress and suddenly a customer escalation comes. 
Because of this, you have to keep aside your new feature work for a few hours. 
You cannot commit your partial code and also cannot throw away your changes. 
So you need some temporary space, where you can store your partial changes and later on commit it.

First, you want to save out unfinished work changes without committing them.
 
```bash
git stash
```

Your working directory is now clean and all uncommitted local changes have been saved! 
At this point, you’re free to make new changes, create new commits, switch branches, and perform any other Git operations.




| | | 
|-|-|
| git stash | | 
| git stash save "savingMessage" | save a stash with a message |
| git stash --include-untracked  | save untracked files | 
| git stash --include-untracked | | 
| | | 
| git stash list | | 
| git stash list --date=relative # sort by date | | 
| git stash --keep-index | | 
| | | 
| git stash pop stash@\{1\} | | 
| "git stash pop" is basically "git statsh apply" and "git stash drop" | | 
| git stash apply | | 
| git stash drop  | | 
| | | 
| git stash clear | | 
| | | 
| git stash clear | | 




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




# git branch


| Command | Description |
|-|-|
| git branch | list branches in the sandbox |   
| git branch -all | list all available branches |  
| git checkout anExistingBranchName | checkout an existing branch |
| git checkout -b **branchName** | checkout an existing branch |
| | | 
| git branch **myNewBranchName** | create a new local branch |
| git push -u origin **myNewBranchName** | push local branch to remote origin |
| git push --set-upstream origin **myNewBranchName** | push local branch to remote origin |
| | |
| git push origin --delete feature/login| deleting a remote branch |       
| git branch -d feature/login | deleting a local branch | 
| git branch -d -f feature/login | deleting a local branch that contains unmerged changes | 
| | git delete |
| ToDo: Still don't quite understand merge branch| git merge <branch> |
|  |  merge <branch> into the current branch |

### Merge and Rebase

- **merge**  : all changes in one branch and merges them into another branch in one commit.
    - Let's say you have created a branch for the purpose of developing a single feature.
    - When you want to bring those changes back to master, you probably want to merge.
    - You don't care about maintaining all of the interim commits
- **rebase** : I want the point at which I branch to move to a new starting point
    - You start doing some development. Another developer made an unrelated change.
    - You want to pull and rebase to base your changes from the current version from the repo.
- **rebase interactive** :




### Merging MasterBranch and LocalBranch

Merge from the MasterBranch to the LocalBranch

````bash
git checkout master
git pull
git checkout myLocalBranch
git merge master
````

Merge from the LocalBranch to the MasterBranch

```bash
git checkout master
git merge myLocalBranch
git push origin master
```

### Rebase 



Rebase means you use another branch as the new base for your work.
If you have a branch *master*, and you create a branch to implement a new feature *myBranch*.
Of course the master branch is the base of your new feature.

At certain point, you want to add new feature into the *master* branch.
You can swtich to the master branch and merge *myBranch* branch:

```bash
git checkout master
git merge myBranch
```

The drawback is that a new dummy commit is added. Spaghetti-history also occurs.
The solution is to do **rebase**.

```javascript
git checkout myBranche
git rebase master
git push # optional
```

you may update the origin/myBranch by doing "git push". and then merge it in **master**

```javascript
git checkout master
git merge myBranch
```

This time, since the *myBranch* branch has the same commits of the master plus the commits with the new feature.
The merge will be just a fast-forward.

### Change the remote a branch is tracking

[how-to-change-the-remote-a-branch-is-tracking](https://stackoverflow.com/questions/4878249/how-to-change-the-remote-a-branch-is-tracking)


### git branch errors

- git add -u .
Now you can apply your stash without git complaining (hopefully):
- git stash pop
Now unstage everything, but leave the files as they are now:
- git reset


# Diff

| | | 
|-|-|
| git diff | |
| git diff --cached | | 
| git diff --staged | |
| git diff HEAD fileName | to show the diff for a specific file |
| git diff branch1:file branch2:file | | 

[Top](#git) 

# Log



[Top](#git) 
 

# QuickStart

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

```bash
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

# Glossary

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


# ToDo

### Urgent

### Important

### Idealist

- difference between remote and origin
- cheatsheet
    - [github](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
    - [bitbucket]()
- https://stackoverflow.com/questions/52704/how-do-i-discard-unstaged-changes-in-git
