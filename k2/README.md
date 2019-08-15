# Coding

- [devops](#devops)
- [language](#language)


# DevOps

| Web    |        |  
|--------|--------| 
| [ec2](kWs/wEc2) | | 
| [ideEclipse](kWs/wEclipse) | | 
| [iam](kWs/wIam) | Identity and Access Management (IAM) | 
| [codeCommit](kWs/wCodeCommit) | Code Commit |
| [beanstalk](kWs/wBeansTalk) | WebService and WebWorker|
| [s3](kXX/wAwsEb/s3.md) | Object Store |
| [dynamoDb](kXX/wAwsEb/dynamoDb.md) | NoSql |
| [awsEB](kXX/wAwsEb) | Backup  |
| [awsCli](kXX/wAwsCli) | AWS Command Line | 
| [Jackson](kWs/wJackson) | |  
| [Tomcat](kWs/wTomcat) | |   
| [Jersey](kWs/wJersey) | |  

# Language

| Language |  | | 
|--------|--------| | 
| [Gt](kXX/kGt) | Git, SmartGit, Egit  | | 
| [Docker](kXX/kDocker) | Docker | |
| [Eclipse](kXX/kEclipse) | Installation Workspace RemoteSystem | | 
|                         | Cdt | | 
|                         | PyDev | | 
| [Js](kXX/kJs)           | Javascript | | 
|                         | Node  | | 
|                         | Cpp  | | 
|                         | Python  | | 
|                         | Java  | | 
|                         | Alg   | | 
|                         | DataStruct  | | 
| [Jv](kXX/kJv) | Gson Maven Gradle Ant | | 
|               | Gson | |  
|               | Jackson | | 
| [Qa](kXX/kQa) | Coding Question Answer | |  
| [Py](kXX/kPy) | PyDev  [Jupyter](kXX/kJupyter) | | 
| [Db](kXX/kDb) | Database  | | 
| [curl](kXX/kCurl) | | |
| [tmux](kXX/kTmux) | | | 
| [gnuScreen](kXX/kScreen) | | | 
| [webApp](kXX/wApp) | | |
|               | [jetty](kXX/wApp/jetty) [Tomcat](kXX/wApp/tomcat) | |  






# Archive

## ToDo

| Language |  |
|--------|--------|
| [StudyTrails](http://www.studytrails.com/) |  |
| [biVar](https://github.com/schiffner/biVar) | | 
| [nctec17](https://github.com/RamonTavares/NCTEC17-WDS) | | 

## Journal


| column | column | column | column |
|--------|--------|--------|--------|
| giant | | https://en.wikipedia.org/wiki/Biing-Hwang_(Fred)_Juang |
| tsne | | http://scienceai.github.io/tsne-js/ |
|      | | https://distill.pub/2016/misread-tsne/ |
| | | http://colah.github.io/ |
| | | https://github.com/shancarter |
| | | http://kpq.github.io/ |


### Projects


| column | column |
|--------|--------|
| [mlpr](wk18/wk18core/src/ml/) | machine-learning |
| [isl17](wk18/wk18core/src/ml/isl17/) | illinois-structured-prediction |


### Tools


### JaxRS

optional path parameter
http://www.nakov.com/blog/2009/07/15/jax-rs-path-pathparam-and-optional-parameters/
https://developer.ibm.com/code/videos/


http://www.hascode.com/2011/09/rest-assured-vs-jersey-test-framework-testing-your-restful-web-services/
https://stackoverflow.com/questions/33896139/call-a-rest-webservice-from-an-other-project
````
Client client = ClientBuilder.newClient();
WebTarget target = client.target("http://localhost:8080")
                         .path("pmtv2")
                         .path("api")
                         .path("tramitacio")
                         .path("realitzarTramit");

RespostaExpedient response = target.request(MediaType.APPLICATION_JSON)
                                   .post(Entity.json(data)), RespostaExpedient.class);
````


## project

| column | column |
|--------|--------|
| [mlpr](wk18/wk18core/src/ml/) | machine-learning |
| [isl17](wk18/wk18core/src/ml/isl17/) | illinois-structured-prediction |

| Projects |  |
|--------|--------|
| [JForests](../d4/d18/jforests) | art4ml |
| [JLibFM](k18/jlibfm) |  |
| [LVG](k18/lvg) |   |
| [k18](k18) | uima - uimafit - cleartk | 



## Tools

| column | column |
|--------|--------|
| [Jv](kXX/kJv) | Maven Gradle Ant |
| [Gt](kXX/kGt) | SmartGit  |
| [Py](kXX/kPy) | PyDev |
| [Eclipse] | Installation Workspace RemoteSystem PyDev ]


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

## JaxRS

optional path parameter
http://www.nakov.com/blog/2009/07/15/jax-rs-path-pathparam-and-optional-parameters/
https://developer.ibm.com/code/videos/


http://www.hascode.com/2011/09/rest-assured-vs-jersey-test-framework-testing-your-restful-web-services/
https://stackoverflow.com/questions/33896139/call-a-rest-webservice-from-an-other-project
````
Client client = ClientBuilder.newClient();
WebTarget target = client.target("http://localhost:8080")
                         .path("pmtv2")
                         .path("api")
                         .path("tramitacio")
                         .path("realitzarTramit");

RespostaExpedient response = target.request(MediaType.APPLICATION_JSON)
                                   .post(Entity.json(data)), RespostaExpedient.class);
````
