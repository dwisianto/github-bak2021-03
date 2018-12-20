# AWSEB

- [Tutorial1](https://www.javacodegeeks.com/2017/12/amazon-elastic-beanstalk-tutorial.html#sample_webapp)
- asdf
- asdf

To get started, we create a new maven project with the following command line:

```bash 
mvn archetype:generate 
    -DgroupId=com.javacodegeeks.ultimate.aws.eb 
    -DartifactId=tomcat-web-service 
    -DarchetypeArtifactId=maven-archetype-webapp 
    -DinteractiveMode=false
```

Afterwards we have a new directory with the name tomcat-web-service with the following structure:

```bash
|-- pom.xml
`-- src
    |-- main
    |   `-- webapp
    |       `-- index.jsp
    |       `-- WEB-INF
    |           `-- web.xml
```

The archetype has already created a web.xml for us and an index.jsp file. 
The latter can be used to later simply test the first version in the cloud, 
hence we do not delete the JSP page yet. 
The web.xml file needs some editing:

	
```bash

<!DOCTYPE web-app PUBLIC
 "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
 "http://java.sun.com/dtd/web-app_2_3.dtd" >

<web-app>
	<display-name>tutorial-webapp</display-name>

	<servlet>
		<servlet-name>RestServlet</servlet-name>
		<servlet-class>org.glassfish.jersey.servlet.ServletContainer</servlet-class>
		<init-param>
			<param-name>jersey.config.server.provider.packages</param-name>
			<param-value>com.javacodegeeks.ultimate.aws.eb</param-value>
		</init-param>
		<load-on-startup>1</load-on-startup>
	</servlet>
	<servlet-mapping>
		<servlet-name>RestServlet</servlet-name>
		<url-pattern>/tutorial-service/*</url-pattern>
	</servlet-mapping>
</web-app>
```