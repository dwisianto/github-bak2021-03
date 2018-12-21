# AWSEB

- [Java Web Application](#java-web-application)
- [Tutorial1](https://www.javacodegeeks.com/2017/12/amazon-elastic-beanstalk-tutorial.html#sample_webapp)
- https://martinsdeveloperworld.wordpress.com/
- [DynamoDb](dynamoDb.md)
- [S3](s3.md)



# Java Web Application

## Simple REST-API


To get started, we create a new maven project with the following command line:

```bash 
mvn archetype:generate 
    -DgroupId=com.javacodegeeks.ultimate.aws.eb 
    -DartifactId=tomcat-web-service 
    -DarchetypeArtifactId=maven-archetype-webapp 
    -DinteractiveMode=false
```

Afterwards we have a new directory with the name **tomcat-web-service** with the following structure:

```bash
|-- pom.xml
`-- src
    |-- main
    |   `-- webapp
    |       `-- index.jsp
    |       `-- WEB-INF
    |           `-- web.xml
```


The archetype has already created a **web.xml** and an **index.jsp** file. Keep the JSP page because it can be used to test the first version in the cloud. The **web.xml** file needs some editing:


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

With the XML element **display-name** we define how the application is labeled inside the Apache Tomcat server. 
The **servlet** and **servlet-mapping** elements define the Servlet class that is listening for requests and the URL pattern it should listen for. 
In our case we using the pattern /tutorial-service/*, i.e. all URLs that look like http://://tutorial-service/* will be processed by this servlet.

The context name is defined through the name of the war archive that we deploy into tomcat. 
The parameter **jersey.config.server.provider.packages** tells the JAX-B implementation we are going to use to implement the REST-API which Java packages it should scan for annotations. To make this work, we have to create the following directory structure in our maven project: **src/main/java/com/javacodegeeks/ultimate/aws/eb**. 
To tell maven which version of the JAX-B implementation we want to use, 
we copy the following block of dependency information into your **pom.xml** file:


```bash

<properties>
	<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
	<jersey.version>2.26</jersey.version>
	<junit.version>4.12</junit.version>
	<commons-logging>1.1.3</commons-logging>
	<log4j.version>1.2.17</log4j.version>
	<javax-ws-rs-api.version>2.1</javax-ws-rs-api.version>
	<aws-sdk.version>1.11.106</aws-sdk.version>
	<db.dynamodb.local-endpoint>false</db.dynamodb.local-endpoint>
</properties>

<dependencies>
	<dependency>
		<groupId>javax.ws.rs</groupId>
		<artifactId>javax.ws.rs-api</artifactId>
		<version>${javax-ws-rs-api.version}</version>
	</dependency>
	<dependency>
		<groupId>commons-logging</groupId>
		<artifactId>commons-logging</artifactId>
		<version>${commons-logging}</version>
	</dependency>
	<dependency>
		<groupId>log4j</groupId>
		<artifactId>log4j</artifactId>
		<version>${log4j.version}</version>
	</dependency>
	<dependency>
		<groupId>org.glassfish.jersey.containers</groupId>
		<artifactId>jersey-container-servlet</artifactId>
		<version>${jersey.version}</version>
	</dependency>
	<dependency>
		<groupId>org.glassfish.jersey.inject</groupId>
		<artifactId>jersey-hk2</artifactId>
		<version>${jersey.version}</version>
	</dependency>
	<dependency>
		<groupId>junit</groupId>
		<artifactId>junit</artifactId>
		<version>${junit.version}</version>
		<scope>test</scope>
	</dependency>
	<dependency>
		<groupId>org.glassfish.jersey.core</groupId>
		<artifactId>jersey-client</artifactId>
		<version>${jersey.version}</version>
	</dependency>
	<dependency>
		<groupId>org.glassfish.jersey.media</groupId>
		<artifactId>jersey-media-json-jackson</artifactId>
		<version>${jersey.version}</version>
	</dependency>
</dependencies>

<dependencyManagement>
	<dependencies>
		<dependency>
			<groupId>com.amazonaws</groupId>
			<artifactId>aws-java-sdk-bom</artifactId>
			<version>${aws-sdk.version}</version>
			<type>pom</type>
			<scope>import</scope>
		</dependency>
	</dependencies>
</dependencyManagement>
```

Next to the mere API contract (javax.ws.rs-api), 
we are defining to use **jersey-container-servlet** as JAX-B implementation and **jersey-hk2** for dependency injection for jersey. 
As the Amazon SDK is using **commons-logging** we are doing the same. 
As logging service we have chosen the classic **log4j** implementation. 
The **junit** and **jersey-client** dependencies are currently only used for our integration tests.

Having integration tests that can be performed locally eases development much, as we don’t have to upload every time a new version of the application into the AWS cloud. The **aws-java-sdk-bom** dependency is currently not necessary, but as we are going to use the SDK in on of the next steps, we are already including it here. The build section of the **pom.xml** is again a little bit lengthy:

```bash

<build>
	<finalName>tomcat-web-service</finalName>
	<plugins>
		<plugin>
			<groupId>org.apache.maven.plugins</groupId>
			<artifactId>maven-compiler-plugin</artifactId>
			<version>3.7.0</version>
			<configuration>
				<source>1.8</source>
				<target>1.8</target>
			</configuration>
		</plugin>
		<plugin>
			<groupId>org.apache.maven.plugins</groupId>
			<artifactId>maven-surefire-plugin</artifactId>
			<version>2.12.1</version>
			<configuration>
				<excludes>
					<exclude>**/*IntegrationTest*</exclude>
				</excludes>
			</configuration>
		</plugin>
		<plugin>
			<groupId>org.apache.maven.plugins</groupId>
			<artifactId>maven-failsafe-plugin</artifactId>
			<version>2.12.4</version>
			<configuration>
				<includes>
					<include>**/*IntegrationTest*</include>
				</includes>
			</configuration>
			<executions>
				<execution>
					<goals>
						<goal>integration-test</goal>
						<goal>verify</goal>
					</goals>
				</execution>
			</executions>
		</plugin>
		<plugin>
			<groupId>org.apache.tomcat.maven</groupId>
			<artifactId>tomcat7-maven-plugin</artifactId>
			<version>2.2</version>
			<configuration>
				<url>http://localhost:8080/manager</url>
				<server>localhost</server>
				<path>/${project.build.finalName}</path>
				<contextFile>${project.basedir}/src/test/tomcat7-maven-plugin/context.xml</contextFile>
			</configuration>
			<executions>
				<execution>
					<id>start-tomcat</id>
					<phase>pre-integration-test</phase>
					<goals>
						<goal>run-war</goal>
					</goals>
					<configuration>
						<fork>true</fork>
					</configuration>
				</execution>
				<execution>
					<id>stop-tomcat</id>
					<phase>post-integration-test</phase>
					<goals>
						<goal>shutdown</goal>
					</goals>
				</execution>
			</executions>
		</plugin>
	</plugins>
</build>

```

The maven-compiler-plugin is used to define source and target version of the build. This is necessary because the provisioned services have a certain Java version installed and we must therefore compile an artifact that can be executed in the target environment. The **surefire** and failsafe plugin are used to executed the local junit and integration tests. Finally, the **tomcat7-maven-plugin** allows us to start and stop an embedded Apache Tomcat server in the build in order to execute the integration tests.

This step shortens the round trip between development and testing as we don’t have to start or restart an externally installed server each time. As we are not going to use any Tomcat 8 specific features, the **tomcat7-maven-plugin** should be sufficient. As the configuration of the **tomcat7-maven-plugin** already indicates, we need a dedicated context.xml file for the tomcat integration tests. 
The following content is therefore put into a file located at **src/test/tomcat7-maven-plugin/context.xml**:

```bash
<?xml version='1.0' encoding='utf-8'?>
<Context>
    <WatchedResource>WEB-INF/web.xml</WatchedResource>
</Context>
```

Having prepared everything as described above, we are ready to develop our first class:


```bash
package com.javacodegeeks.ultimate.aws.eb;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@Path("/tutorial")
public class TutorialResource {

    private static final Log LOGGER = LogFactory.getLog(TutorialResource.class);

    @GET
    @Produces("text/json")
    @Path("/list-all-courses")
    public Response listAllCourses() {
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("Listing all courses.");
        }
        List tutorials = new ArrayList<>();
        tutorials.add(new Tutorial("Linus Meyer", "Linux"));
        tutorials.add(new Tutorial("Bill Famous", "Microsoft"));
        tutorials.add(new Tutorial("Josh Hotspot", "Java"));
        return Response.status(200).entity(tutorials).build();
    }
}
```

The class is annotated with @Path to tell the JAX-RS framework that all relative URL paths used in the class itself should be prefixed with /tutorial. For the sake of simplicity we have currently only one method: listAllCourses(). Its part of the URL is denoted with another @Path annotation at method level. That an invocation of this REST resource will return a JSON string is specified with the annotation @Produces and the media type text/json.

Finally, we tell the framework that this method is a GET request by using the dedicated annotation @GET. 
Currently we do not have any persistent storage, hence we cannot load data from a datasource. 
Therefore we hard-wire the list of courses and return a list of Tutorial objects. 
The Tutorial class is a simple value object:

```java
public class Tutorial {

    private String author;
    private String title;

    public Tutorial() {

    }

    public Tutorial(String author, String title) {
        this.author = author;
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public String getTitle() {
        return title;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Tutorial tutorial = (Tutorial) o;

        if (author != null ? !author.equals(tutorial.author) : tutorial.author != null) return false;
        if (title != null ? !title.equals(tutorial.title) : tutorial.title != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = author != null ? author.hashCode() : 0;
        result = 31 * result + (title != null ? title.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Tutorial{" +
                "author='" + author + '\'' +
                ", title='" + title + '\'' +
                '}';
    }
}
```


We need to have a default constructor such that the JSON library can deserialize objects of type Tutorial from a string representation. 
The getter and setter methods allow the JSON library to set the corresponding attribute values. 
In this example we also implement the methods equals() and hashCode() as we want to compare instances of Tutorial later on in our integration tests. As mentioned before, building and deploying the application now already to AWS is an option, but it will take some time until the deployment becomes available.

Therefore, we just write an integration test that verifies that our implementation is working as expected to save unnecessary uploads to the AWS cloud (and to save time). 
In the pom.xml file above we have configured that integration tests are named with IntegrationTest in their class name. Hence, we create a class under src/test/javawith the following content:

```java
public class TutorialIntegrationTest {

    @Test
    public void testListAllCourses() {
        Client client = ClientBuilder.newClient();
        WebTarget target = client.target("http://localhost:8080")
			.path("/tomcat-web-service/tomcat-web-service/tutorial/list-all-courses");
        Response response = target.request().get();
        assertThat(response.getStatus(), is(200));
        List tutorials = response.readEntity(new GenericType>(){});
        assertThat(tutorials.size(), is(3));
        assertThat(tutorials, hasItem(new Tutorial("Linus Meyer", "Linux")));
        assertThat(tutorials, hasItem(new Tutorial("Bill Famous", "Microsoft")));
        assertThat(tutorials, hasItem(new Tutorial("Josh Hotspot", "Java")));
    }
}
```

The first line of the method testListAllCourses() creates a new REST client while the second line provides host, port and the path on the server. For our local tests localhost is appropriate. Tomcat runs per default on port 8080. The URL consists as first part of the name of our war file that is deployed to Tomcat. We have defined this in the pom.xml file using the XML element finalName.

GET requests are issued using the method get() on the object returned by request(). If everything is OK, the web service should return the status code 200. In this case it is also supposed to return a list of Tutorial objects. The method readEntity() allows us to define this using an instance of GenericType with two generic types. One for List and one inner type for Tutorial. The resulting list should contain exactly three entries, one entry for each course. To test everything locally, we issue the following command on the local terminal:


```bash
mvn clean verify
```

As the **verify** phase comes after the **integration-test** phase, 
this invocation will also run the previously written integration tests:

```bash
[INFO] --- tomcat7-maven-plugin:2.2:run-war (start-tomcat) @ tomcat-web-service ---
[INFO] Running war on http://localhost:8080/tomcat-web-service
[INFO] Creating Tomcat server configuration at D:\development\glassfish\glassfish-5.1\awseb\awseb\tomcat-web-service\target\tomcat
[INFO] create webapp with contextPath: /tomcat-web-service
[...]
[INFO] 
[INFO] --- maven-failsafe-plugin:2.12.4:integration-test (default) @ tomcat-web-service ---
[INFO] Failsafe report directory: D:\development\glassfish\glassfish-5.1\awseb\awseb\tomcat-web-service\target\failsafe-reports

-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running com.javacodegeeks.ultimate.aws.eb.TutorialIntegrationTest
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 1.443 sec

Results :

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0

[WARNING] File encoding has not been set, using platform encoding UTF-8, i.e. build is platform dependent!
[INFO] 
[INFO] --- tomcat7-maven-plugin:2.2:shutdown (stop-tomcat) @ tomcat-web-service ---
[...]
[INFO]
```

We can see that the tomcat server is started before and after the integration tests. 
At the end of the build the file **tomcat-web-service.war** resides inside the target directory of the our project. 
This is the application that we are going to upload to Amazon Elastic Beanstalk now.

