

all: sev_unz

MVN_GRP_ID=d.io
MVN_PJ_NAME=d.wb
MVN_VER=0.1
MVN_MD_NAME_WEB=d.io.wb

gen_mvn_root_project:
	mvn archetype:generate \
	-DgroupId=$(MVN_GRP_ID) \
	-DartifactId=$(MVN_PJ_NAME) \
	-Dversion=$(MVN_VER) \
	-DarchetypeGroupId=org.codehaus.mojo.archetypes \
	-DarchetypeArtifactId=pom-root \
	-DarchetypeVersion=RELEASE \
	-DinteractiveMode=false

gen_mvn_module_web:
	mvn archetype:generate \
	-DgroupId=$(MVN_GRP_ID) \
	-DartifactId=$(MVN_MD_NAME_WEB) \
	-Dversion=$(MVN_VER) \
	-DarchetypeArtifactId=maven-archetype-webapp \
	-DarchetypeVersion=RELEASE \
	-DinteractiveMode=false




# #############


MVN_MD_NAME_UTIL=ws1-util
MVN_MD_NAME_BAG=sp-bag
MVN_MD_NAME_PIPE=ws-pipe
MVN_MD_NAME_SRVC1=ws-srvc1
MVN_MD_NAME_SRVC2=ws-srvc2
MVN_MD_NAME_CORE=ws-core
MVN_MD_NAME_W2_XLET1=w2-xlet1
MVN_MD_NAME_W2_XLET2=w2-xlet2
MVN_MD_NAME_W2_XLET3=w2-xlet3






gen_mvn_module_bag:
	mvn archetype:generate \
	-DgroupId=$(MVN_GRP_ID) \
	-DartifactId=$(MVN_MD_NAME_BAG) \
	-DarchetypeArtifactId=maven-archetype-quickstart \
	-DarchetypeVersion=RELEASE \
	-DinteractiveMode=false








gen_mvn_module_core:
	mvn archetype:generate \
	-DgroupId=$(MVN_GRP_ID) \
	-Dversion=$(MVN_VER) \
	-DartifactId=$(MVN_MD_NAME_CORE) \
	-DarchetypeArtifactId=maven-archetype-webapp \
	-DarchetypeVersion=RELEASE \
	-DinteractiveMode=false


gen_mvn_module_pipe_bak:
	mvn archetype:generate \
	-DartifactId=$(MVN_MD_NAME_PIPE) \
	-DarchetypeArtifactId=maven-archetype-quickstart \
	-DarchetypeVersion=RELEASE \
	-DinteractiveMode=false
	
gen_mvn_module_pipe:
	mvn archetype:generate \
	-DgroupId=$(MVN_GRP_ID) \
	-DartifactId=$(MVN_MD_NAME_PIPE) \
	-Dversion=$(MVN_VER) \
	-DarchetypeArtifactId=maven-archetype-webapp \
	-DarchetypeVersion=RELEASE \
	-DinteractiveMode=false

gen_mvn_module_srvc1:
	mvn archetype:generate \
	-DartifactId=$(MVN_MD_NAME_SRVC1) \
	-DarchetypeArtifactId=maven-archetype-webapp \
	-DarchetypeVersion=RELEASE \
	-DinteractiveMode=false

gen_mvn_module_srvc2:
	mvn archetype:generate \
	-DgroupId=$(MVN_GRP_ID) \
	-DartifactId=$(MVN_MD_NAME_SRVC2) \
	-Dversion=$(MVN_VER) \
	-DarchetypeArtifactId=maven-archetype-webapp \
	-DarchetypeVersion=RELEASE \
	-DinteractiveMode=false

gen_mvn_module_w2_xlet3:
	mvn archetype:generate \
	-DgroupId=$(MVN_GRP_ID) \
	-DartifactId=$(MVN_MD_NAME_W2_XLET3) \
	-Dversion=$(MVN_VER) \
	-DarchetypeArtifactId=maven-archetype-webapp \
	-DarchetypeVersion=RELEASE \
	-DinteractiveMode=false




gen_mvn_all: gen_mvn_root_project gen_mvn_module_bag gen_mvn_module_pipe gen_mvn_module_srvc1 gen_mvn_module_srvc2
	@echo "Update pom.xml"
	@echo $(MVN_PJ_NAME)/$(MVN_MD_NAME_PIPE)/pom.xml
	@echo $(MVN_PJ_NAME)/$(MVN_MD_NAME_SRVC1)/pom.xml
	@echo $(MVN_PJ_NAME)/$(MVN_MD_NAME_SRVC2)/pom.xml



svc_list:
	netstat -nlp 

svc_scrum:
	cd $(MVN_PJ_NAME)/$(MVN_MD_NAME_SCRUM); \
	mvn jetty:run

svc_start:
	cd $(MVN_PJ_NAME)/$(MVN_MD_NAME_PIPE); \
	mvn jetty:start &
	cd $(MVN_PJ_NAME)/$(MVN_MD_NAME_SRVC1); \
	mvn jetty:start &
	cd $(MVN_PJ_NAME)/$(MVN_MD_NAME_SRVC2); \
	mvn jetty:start &
svc_stop:
	cd $(MVN_PJ_NAME)/$(MVN_MD_NAME_PIPE); \
	mvn jetty:stop &
	cd $(MVN_PJ_NAME)/$(MVN_MD_NAME_SRVC1); \
	mvn jetty:stop &
	cd $(MVN_PJ_NAME)/$(MVN_MD_NAME_SRVC2); \
	mvn jetty:stop &
svc_run:
	cd $(MVN_PJ_NAME)/$(MVN_MD_NAME_PIPE); \
	mvn jetty:run &
	cd $(MVN_PJ_NAME)/$(MVN_MD_NAME_SRVC1); \
	mvn jetty:run &
	cd $(MVN_PJ_NAME)/$(MVN_MD_NAME_SRVC2); \
	mvn jetty:run &



cln_ecl:
	find $(MVN_PJ_NAME) -name ".classpath" -delete
	find $(MVN_PJ_NAME) -name ".project" -delete

# #############

ecl:
	cd $(PO_NAME); mvn eclipse:eclipse -Dwtpversion=2.0

cln:
	rm -rf $(MVN_PJ_NAME)



# #############
FName=Jersey
sev_zip:
	7za a $(FName).7za -mx=9 $(FName)

sev_unz:
	7za x $(FName).7za


orig_zip:
	7za a $(FName)-original.7za -mx=9 $(FName)-original
orig_unzip:
	7za x $(FName)-original.7za

sev_mcln:
	rm -rf $(FNAME)-original

