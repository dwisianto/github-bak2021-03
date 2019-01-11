# Beanstalk

- [Introduction](#introduction)
- [Concepts](#concepts)
- [Java Web Application](#java-web-application)
- Reference
    - [ultimate](https://www.javacodegeeks.com/2017/12/amazon-elastic-beanstalk-tutorial.html)
    - [colintoh](https://colintoh.com/aws-elastic-beanstalk-survival-guide)

# Introduction

Amazon Elastic Beanstalk is a service that lets you use a set of existing Amazon AWS services to host your application. In contrast to more generic services like EC2, you do not have to provide an image of a machine that is deployed into a cloud, but you only provide a ready to run application that is hosted inside a predefined environment at Amazon AWS.

Amazon lets you choose between different predefined environments and sets up everything necessary to run the application on behalf of you. This service is therefore suitable for you if you want to concentrate on the application itself and not so much on the underlying operating system and server. However, as Elastic Beanstalk uses under the hood existing services like EC2, S3, CodeCommit or Route 53, you have full control over you application.

# Concepts

Amazon Elastic Beanstalk defines a set of terms that are used throughout the service and therefore must be understood from the beginning on. An Application is a set of components that not only encompasses different versions of your application but also configurations for environments the application is deployed to. An application version is a deployable artifact that is labeled and stored inside an Amazon S3 bucket. It can therefore be restored at a later point in time. An environment is a set of Amazon AWS resources that is used to run a specific version of the application. Different environments can be configured and a version of the application can run in different environments.

Different environments can exist at the same time and can also serve different versions of the same application. An environment consists of two tiers: the web server environment and the worker environment. While the web server environment serves HTTP requests the worker environment reads messages from a queue and processes them. This way applications can use the “worker queue” pattern to decouple business logic from serving HTTP request. An environment configuration encompasses the settings of an environment. Applying this configuration will let Amazon AWS create the corresponding resources. Existing templates can be used to create configurations and are therefore called Configuration Templates.




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


The archetype has already created a **web.xml** and an **index.jsp** file. 
Keep the JSP page because it can be used to test the first version in the cloud. 
The **web.xml** file needs some editing:

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
In our case we using the pattern /tutorial-service/*, i.e. all URLs that look like http://://tutorial-service/* will be processed by this servlet. The context name is defined through the name of the war archive that we deploy into tomcat. 

The parameter **jersey.config.server.provider.packages** tells the JAX-B implementation we are going to use to implement the REST-API which Java packages it should scan for annotations. To make this work, we have to create the following directory structure in our maven project: **src/main/java/com/javacodegeeks/ultimate/aws/eb**. 
To tell maven which version of the JAX-B implementation we want to use, 
we copy the following block of dependency information into your **pom.xml** file:


```bash

<properties>
	<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
	<maven.compiler.source>1.8</maven.compiler.source>
	<maven.compiler.target>1.8</maven.compiler.target>
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

Next to the mere API contract (**javax.ws.rs-api**), 
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

This step shortens the round trip between development and testing as we don’t have to start or restart an externally installed server each time. As we are not going to use any Tomcat 8 specific features, the **tomcat7-maven-plugin** should be sufficient. As the configuration of the **tomcat7-maven-plugin** already indicates, we need a dedicated **context.xml** file for the tomcat integration tests. 
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

The class is annotated with @Path to tell the JAX-RS framework that all relative URL paths used in the class itself should be prefixed with **/tutorial**. For the sake of simplicity we have currently only one method: listAllCourses(). Its part of the URL is denoted with another @Path annotation at method level. That an invocation of this REST resource will return a JSON string is specified with the annotation @Produces and the media type **text/json**.

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
In the pom.xml file above we have configured that integration tests are named with IntegrationTest in their class name. Hence, we create a class under src/test/java with the following content:

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


# Deployment using the Web Interface

If you haven’t created an Amazon AWS account yet, you should do so now by pointing your browser the following URL and clicking on the link labeled “Create an AWS account”. During the following steps you will have to provide the typical personal information plus a valid credit card. The latter is necessary to allow Amazon to bill the resources you have used. When you create a new account, you are eligible for the “Free Tier”.

For the first 12 month you can use currently up to 750 hours computing power on EC2, 5 GB standard storage on S3. This is more than sufficient for our tutorial. Once you have setup a working AWS account, you can create your first application. Therefore, point your browser to the following URL and fill out the name of your application as well as the optional description:


The next page asks us whether we are going to setup a web server environment or a worker environment. Our sample REST application fits best in the first type of environment; hence, we click on “Create web server”.



For a web server environment, we must set the configuration and the type. We choose “Tomcat” as predefined configuration and “Single instance” as type. This way Amazon provides us an EC2 instance with installed Apache Tomcat server. We do not choose auto scaling at this point, because for our sample one instance is enough.


The following page requests to specify the application version. We select therefore the second option and choose the war file our maven build has produced before.

Alternatively, we could also provide a link to an artifact we have uploaded before to Amazon S3 or chose one of Amazon’s sample applications.



As mentioned before, our application gets its own CNAME. The CNAME can therefore be provided using the following page. “Check availability” allows us to verify that the name is still free. If we would plan to use a relational database or a virtual private cloud network. In our simple example we do not need both resources, hence we just click on “Next”



In the “Configuration Details” sections we can choose a server type. A t2.micro instance is sufficient for our experiments, but if you prefer you can choose a larger instance. The EC2 documentation describes the available instance types in more detail. The remaining input fields can be left as they are, as we do not have any specific requirements for the disc of the instances or the health reporting. A EC2 key pair is also not necessary.

Environment tags can be used to identify environments in cost allocation reports or can be used to in general to manage environments and permissions. For our first sample application, tags are not necessary but you are free to provide them.

The “Permissions” page allows to define an instance profile and a service role. The instance profile is the IAM role that is used by your application to communicate with other AWS services while the service role is to monitor the environment.



Finally, an overview page presents all information for verification. If you are satisfied with your choices, you can click on “Launch” and let Amazon AWS create all the resources for you. Once the process has finished, you can see a new environment in your console:


A click on this environment leads to the following dashboard:

Here you can see all events of your environment, the running version and the configuration. Now that the application is up and running, we can point our browser to the following URL:


As expected the browser displays a JSON array with three Tutorial items.



