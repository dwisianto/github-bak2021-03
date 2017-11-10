# dwisianto.github.io


## ToDo
* https://github.com/schiffner/biVar
* https://github.com/RamonTavares/NCTEC17-WDS

## Journal
| | | |
|-|-|-|
| | | |
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
