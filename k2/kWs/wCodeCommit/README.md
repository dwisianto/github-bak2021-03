# CodeCommit


- [Initial Configuration for AWS CodeCommit](initial-configuration-for-aws-codecommit)
- [Configure Credentials on Linux, macOS, or Unix](configure-credentials-on-linux-macOS-or-unix) 
- [Connect to the AWS CodeCommit Console and Clone the Repository](connect-to-the-aws-codecommit-console-and-clone-the-repository)
- Reference
    - [sshConfig](https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-ssh-unixes.html)

# Initial Configuration for AWS CodeCommit

- Available: Git
- Available: AWS account
- Available: IAM user
- Available:     
- In the IAM console, in the navigation pane, choose Users, and then choose the IAM user you want to configure for AWS CodeCommit access.
- On the Permissions tab, choose Add Permissions.
- In Grant permissions, choose Attach existing policies directly.
- Select **AWSCodeCommitFullAccess** from the list of policies, or another managed policy for AWS CodeCommit access. For more information about managed policies for AWS CodeCommit,

# Configure Credentials on Linux, macOS, or Unix

- From the terminal on your local machine, run the ssh-keygen command, and follow the directions to save the file to the .ssh directory for your profile. This generates:
    - The codecommit_rsa file, which is the private key file.
    - The codecommit_rsa.pub file, which is the public key file.
- Run the following command to display the value of the public key file (codecommit_rsa.pub):
    - cat ~/.ssh/codecommit_rsa.pub
    - pbcopy < ~/.ssh/codecommit_rsa.pub
- Sign in to the AWS Management Console and open the IAM console at https://console.aws.amazon.com/iam/.
- In the IAM console, in the navigation pane, choose Users, and from the list of users, choose your IAM user.
- On the user details page, choose the Security Credentials tab, and then choose Upload SSH public key.
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

