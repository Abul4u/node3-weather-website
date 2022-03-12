# Generate ssh keygen

ssh-keygen -t rsa -b 4096 -C "your_email_id"

## check the ssh key available or not

ls -a -l ~/.ssh

### Agent Pid

eval "$(ssh-agent -s)"

#### Add ssh key

ssh-add ~/.ssh/id_rsa

#### get the id_rsa.pub key

cat ~/.ssh/id_rsa.pub

#### test the ssh key

ssh -T git@github.com
