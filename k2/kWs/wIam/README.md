# IAM 

Identity and Access Management (IAM)

# Managing Users & Access

## Step 1: Create a Group


Groups are utilities that help you establish permissions to a group of users. As a first step, visit the [Groups](https://console.aws.amazon.com/iam/home#/groups) section within Identity and Access Management (IAM) console and create a new group.

![GitHub Logo](images/aws-create-new-group.png)

## Step 2: Attach Policies to your Group

Once you've created a group, you'll need to grant access. Here are a few policies I offer to CodeCommit contributors.

- AWSCodeCommitFullAccess offers full access to CodeCommit.
- IAMSelfManageServiceSpecificCredentials allows developers a way to authenticate using git credentials.
- IAMUserSSHKeys enables users to authenticate using SSH credentials.
- IAMReadOnlyAccess provides IAM read-only access.

This is what your group should look like.

![GitHub Logo](images/aws-create-user.png)

## Step 3:


