# WebApp

- [IDE](#ide)
- [Runtime](#runtime)
    - OpenLiberty
    - [Jetty](#jetty)
    - [Tomcat](#tomcat)
        - [Tomcat And Eclipse](#tomcat-and-eclipse)
- [Liberty](#liberty)
- [Terminology](#terminology)


## IDE

## Runtime

## Jetty

## OpenLiberty 

## Tomcat

### Tomcat and Eclipse 

- Reference 
    - https://www.mulesoft.com/tcat/tomcat-wtp
- Prerequisite: Tomcat is installed
    - brew update
    - brew install tomcat
    - ls /usr/local/Cellar/tomcat
- Install Eclipse tomcat plugin from marketplace
    - tomcat home to /usr/local/Cellar/tomcat/versionNumber/libexec
    - set the context declaration file to TOMCAT_HOME/conf/server.xml     
- Eclipse Plugins - Web Tools Platform (WTP)
    - http://download.eclipse.org/webtools/updates/ 
    - Help > Install New Software
    -  http://download.eclipse.org/webtools/updates
    - Repository Software Site for Web Tools Platform (WTP)    
- Eclipse settings
    - In the Windows > Preferences > General > Web Browser page, select the "Use external web browser" option so the external system browser will be used.​
    - In the Windows > Preferences > Maven option "Download repository index updates on startup" is selected. 
    - Restart Eclipse.
- Create a server instance from your Eclipse workspace
    - You will need an Eclipse instance that has the Tomcat plug-in installed.
    - These steps only need to be done once per version of Tomcat being installed.
    - In Eclipse > Preferences > Server > Runtime Environment. Choose "Server > Runtime Environment" and Select Add
    - Type "tomcat" in the type of runtime environment field and select "Apache tomcat9" Profile
    - Deselect the "Create a new local server" in the checkbox
    - Replace the name with your current tomcat name (e.g.tomcat9)
    - Select "Choose an existing installation" and enter the path to the tomcat instance you installed above. 
    - Select Finish
- Create a tomcat server to run your service
    - The recommendation is to create a server instance for each service. This allows the service to have custom server.env, server.xml and jvm.options files for each service.
    - Select File > New > Other > Server , Type "tomcat" into the server type field. Select "Apache Server " from the list
    - Let the host name default to localhost. Change the server name to the name of your service with the tomcat version to avoid conflicts. This is the name that will show upon the left hand side in the Servers tab. It does not set the profile name, that comes next. Select Next
    - Select New and create a new profile with the name of the service.
    - The http ports are the default ports and cannot be changed in this step. It can be changed later when the server.xml file is updated.
    - Select Finish
    - You should see your profile in the Eclipse "Servers" view tab. Add the Servers tab by selecting Window > Show View > Other > Server.
    - Edit the new Tomcat profile configuration by double clicking on the Tomcat server name in the Servers tab. You must uncheck the "Run applications directly from the workspace" option. You must do this every time you create a new tomcat profile.


GoTo [WebApp](#webapp)

## Liberty

- java -jar ~/openLiberty/18.0.0.1/wlp*.jar ~/liberty/myServerRuntimeEnvironment
- Eclipse > Preference > Server > Runtime Environment
    - Add > Websphere Application Server 
    - Choose an existing installation > websphere >> ~/liberty/myServerRuntimeEnvironment/wlp
- Create a liberty server to run your service
    - create a server for each service allows a service to have a custom server.env, server.xml and jvm.options
    - Eclipse > File > New > Other > Server.  
        - Define New Server
            - Server Type : Websphere Application Server Liberty
            - Server Host Name : localhost
            - Server name : myNameIsNotImportant
            - Server Runtime Environment : myServerRuntimeEnvironment
        - New Liberty Server
            - User Directory : default
            - Server Name : ol18001nlu
            - Template : defaultServer
        - Add and Remove
            - asf
            - 
- Eclipse > Projecct
    - Project Facets
    - Dynamic Web Module
    - Java
    - Javascript
    - Jax-Rs (REST Web Services)


## Terminology


## Misc

- Disable JSON and XML Validation
- Eclipse > Validation > JSON Validator
- [AWS toolkit for Eclipse](https://aws.amazon.com/eclipse/)
- 