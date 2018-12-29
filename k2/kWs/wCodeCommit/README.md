# CodeCommit


- [Initial Configuration for AWS CodeCommit](#initial-configuration-for-aws-codecommit)
- [Configure Credentials on Linux, macOS, or Unix](#configure-credentials-on-linux-macos-or-unix) 
- [Connect to the AWS CodeCommit Console and Clone the Repository](#connect-to-the-aws-codecommit-console-and-clone-the-repository)
- Reference
    - [sshConfig](https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-ssh-unixes.html)
-      

# Initial Configuration for AWS CodeCommit

- **Available**: Git is installed in the local machine
- **Available**: AWS account
- **Available**: IAM user
- In the IAM console, in the navigation pane, choose **Users**, and then choose the IAM user you want to configure for AWS CodeCommit access.
- On **the Permissions tab**, choose **Add Permissions**.
- In **Grant permissions**, choose **Attach existing policies** directly.
- Select **AWSCodeCommitFullAccess** from the list of policies, or another managed policy for AWS CodeCommit access. For more information about managed policies for AWS CodeCommit, see [AWS Managed (Predefined) Policies for AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#managed-policies)


# Configure Credentials on Linux, macOS, or Unix

- From the terminal on your local machine, run the ssh-keygen command, and follow the directions to save the file to the .ssh directory for your profile. This generates:
    - The codecommit_rsa file, which is the private key file.
    - The codecommit_rsa.pub file, which is the public key file.
- Run the following command to display the value of the public key file (codecommit_rsa.pub):
    - cat ~/.ssh/codecommit_rsa.pub
    - pbcopy < ~/.ssh/codecommit_rsa.pub
- Sign in to the AWS Management Console and open the [IAM console](https://console.aws.amazon.com/iam/).
- In the IAM console, in the navigation pane, choose Users, and from the list of users, choose your IAM user.
- On the user details page, choose the **Security Credentials** tab, and then choose Upload SSH public key.
- Paste the contents of your SSH public key into the field, and then choose Upload SSH public key.
- Copy or save the information in SSH Key ID (for example, APKAEIBAERJR2EXAMPLE).
- On your local machine, use a text editor to create a config file in the ~/.ssh directory, and then add the following lines to the file, where the value for User is the SSH key ID you copied earlier:
    - Host git-codecommit.*.amazonaws.com
    - User APKAEIBAERJR2EXAMPLE
    - IdentityFile ~/.ssh/codecommit_rsa 
- From the terminal, run the following command to change the permissions for the config file: 
    - chmod 600 config    
- Run the following command to test your SSH configuration:
    - ssh git-codecommit.us-east-2.amazonaws.com
    - ssh -v git-codecommit.us-east-2.amazonaws.com      
    

 

# Connect to the AWS CodeCommit Console and Clone the Repository

- Open the [AWS CodeCommit console](https://console.aws.amazon.com/codesuite/codecommit/home)
- In the region selector, choose the region where the repository was created. Repositories are specific to an AWS region. For more information, see Regions and Git Connection Endpoints.
- Choose the repository you want to connect to from the list. This opens the Code page for that repository. If you see a Welcome page instead of a list of repositories, there are no repositories associated with your AWS account. To create a repository, see Create an AWS CodeCommit Repository or follow the steps in the Git with AWS CodeCommit Tutorial tutorial.
- Copy the SSH URL to use when connecting to the repository.
- Open a terminal. From the /tmp directory, using the SSH URL you copied, run the git clone command to clone the repository. For example, to clone a repository named MyDemoRepo to a local repo named my-demo-repo in the US East (Ohio) region:
- git clone ssh://git-codecommit.us-east-2.amazonaws.com/v1/repos/MyDemoRepo my-demo-repo

    Note

    If you successfully tested your connection, but the clone command fails, you might not have the necessary access to your config file, or another setting might be in conflict with your config file. Try connecting again, this time including the SSH key ID in the command. For example:

    git clone ssh://Your-SSH-Key-ID@git-codecommit.us-east-2.amazonaws.com/v1/repos/MyDemoRepo my-demo-repo

    For more information, see Access Error: Public Key Is Uploaded Successfully to IAM but Connection Fails on Linux, macOS, or Unix Systems.

    For more information about how to connect to repositories, see Connect to the AWS CodeCommit Repository by Cloning the Repository.

