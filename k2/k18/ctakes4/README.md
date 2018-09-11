# CTakes4

- [Setup](#setup)
    - ~/DSc/apps/nlp_ctakes4/bin
- [Hello World](#hello-world)
- [Components](#components)
- DeveloperMode
- Personal
    - https://github.com/jamesmasanz
    - https://github.com/tmills
    - [ClearTK](https://cleartk.github.io/cleartk/)
    - https://github.com/weitechen/anafora#README
    - [mtsamples](https://www.mtsamples.com/)      
    
## Setup

- User Installation Guide [Guide](https://cwiki.apache.org/confluence/display/CTAKES/cTAKES+4.0+User+Install+Guide)
    - download the bin and the resources zip files
        - bin : 
        - Resources : cp -R /tmp/resources/* /usr/local/apache-ctakes-4.0.0/resources           
        - dev        
	- UMLS login 
	    - https://uts.nlm.nih.gov/license.html
	    - update the bash_profile 
	         - export ctakes_umlsuser=myusername
	         - export ctakes_umlspw=mypassword
	- HSQL jar files
	    - ~/DSc/apps/db_hsqldb/
	    - Download the hsqldb from the following location
	        - http://central.maven.org/maven2/org/hsqldb/hsqldb/
	        - java -cp  C:\Apps\hsqldb\hsqldb-1.8.0.10.jar   org.hsqldb.util.DatabaseManager
	        - http://central.maven.org/maven2/org/hsqldb/hsqldb/
	    - If the file is located in the c directory then you can use the following jdbc connection
            - C:\cTAKES_3\resources\org\apache\ctakes\dictionary\lookup\fast\customdict\custom.properties
	        - jdbc:hsqldb:\cTAKES_3\resources\org\apache\ctakes\dictionary\lookup\fast\customdict\custom 


GoTo: [ctakes4](#ctakes4)

## Hello World

- Hello World(#hello-world)
    - CVD
    - CPE    
    - Piper
    - Analysis Engines/Pipelines
    - Next Steps

- cd apps/nlp_ctakes4/ctakes4/
- bin/runctakesCVD.sh -desc desc/ctakes-clinical-pipeline/desc/analysis_engine/AggregatePlainTextProcessor.xml
- 

GoTo: [ctakes4](#ctakes4)

## First Applications



GoTo: [ctakes4](#ctakes4)

## Components



### LVG 

GoTo: [ctakes4](#ctakes4)

