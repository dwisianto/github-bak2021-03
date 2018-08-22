
# Coding


## Tools

| column | column |
|--------|--------|
| [Qa](kXX/kQa) | Coding Question Answer | 
| [Jv](kXX/kJv) | Maven Gradle Ant |
| [Py](kXX/kPy) | PyDev |
| [Eclipse] | Installation Workspace RemoteSystem PyDev |
| [Gt](kXX/kGt) | SmartGit  |
| [Db](kXX/kDb) | Database  | 

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


## Archive

### Projects


| column | column |
|--------|--------|
| [mlpr](wk18/wk18core/src/ml/) | machine-learning |
| [isl17](wk18/wk18core/src/ml/isl17/) | illinois-structured-prediction |


### Tools


