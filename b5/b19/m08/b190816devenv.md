# EB Local Development Environment 
_August 16, 2019_


- Creating a Project Folder
- Setting Up Source Control
- Configuring a Remote Repository
- [Installing the EB CLI](#aws-elastic-beanstalk-cli-instalation)
- [Installing the AWS CLI](#aws-cli-installation)


## Creating a Project Folder

```
d.aws.eb
  d.eb.app1
    .git
    d.eb.micro10
    d.eb.micro11
  d.aws.eb.app2
    .git
    d.eb.micro20
    d.eb.micro21
    d.eb.micro23
```

## Setting Up Source Control

Use either git or codeCommit to initilize the directory


## Configuring a Remote Repository


After you've created a remote repository for your project, attach it to your local repository with git remote add:

```bash
cd ~/gt/d.aws.eb/
git clone ssh://git-codecommit.us-east-2.amazonaws.com/v1/repos/my-repo
git remote add origin ssh://git-codecommit.us-east-2.amazonaws.com/v1/repos/my-repo
```


## Reference

[aws-eb-devenv](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/chapter-devenv.html)


GoTo > [Top](#the-journey-is-the-reward) 
<pre class="">  ~ All I need is Coffee C|_| ~ </pre>

