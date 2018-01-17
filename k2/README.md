
## GitHub



## Eclipse

* Installation
* Workspace
* Shell - RemoteSystem
* PyDev


## Location

| column | column | column | column |
|--------|--------|--------|--------|
| [kPy](kPy) | b | c | d | 

## ToDo
* https://github.com/schiffner/biVar
* https://github.com/RamonTavares/NCTEC17-WDS


## Journal


| column | column | column | column |
|--------|--------|--------|--------|
| giant | | https://en.wikipedia.org/wiki/Biing-Hwang_(Fred)_Juang |
| tsne | | http://scienceai.github.io/tsne-js/ |
|      | | https://distill.pub/2016/misread-tsne/ |
| | | http://colah.github.io/ |
| | | https://github.com/shancarter |
| | | http://kpq.github.io/ |


* jaxrs
optional path parameter
http://www.nakov.com/blog/2009/07/15/jax-rs-path-pathparam-and-optional-parameters/
https://developer.ibm.com/code/videos/


http://www.hascode.com/2011/09/rest-assured-vs-jersey-test-framework-testing-your-restful-web-services/
https://stackoverflow.com/questions/33896139/call-a-rest-webservice-from-an-other-project
Client client = ClientBuilder.newClient();
WebTarget target = client.target("http://localhost:8080")
                         .path("pmtv2")
                         .path("api")
                         .path("tramitacio")
                         .path("realitzarTramit");

RespostaExpedient response = target.request(MediaType.APPLICATION_JSON)
                                   .post(Entity.json(data)), RespostaExpedient.class);


### github and ssh

* [github-ssh-key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
* [ssh-multiple](https://dbushell.com/2013/01/27/multiple-accounts-and-ssh-keys/)
*  [multiusers](https://www.keybits.net/post/automatically-use-correct-ssh-key-for-remote-git-repo/)
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


ssh-keygen -t rsa -f ~/.ssh/accountB -C "your_email@youremail.com"

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