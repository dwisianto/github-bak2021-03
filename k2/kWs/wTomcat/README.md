# Tomcat


- [Quick Start](#quick-start)
- [Unit Test](#unit-test)
- [JaxRs Analyzer]((#jaxrs-analyzer)
- Reference
    - [Martin Mois](https://martinsdeveloperworld.wordpress.com/)
    - [ultimate beanstalk tutorial](https://www.javacodegeeks.com/2017/12/amazon-elastic-beanstalk-tutorial.html)
    - http://www.yilmazhuseyin.com/blog/dev/curl-tutorial-examples-usage/
    - [kill-lsof](https://askubuntu.com/questions/346394/how-to-write-a-shscript-to-kill-9-a-pid-which-is-found-via-lsof-i)
- 

# Quick Start

- mvn generate a web project
- update the "properties"  section of the pom.xml 

```bash

	<properties>		
		<javax-ws-rs-api.version>2.1</javax-ws-rs-api.version>
		<jersey.version>2.26</jersey.version>
		<tomcat7-maven-plugin.version>2.2</tomcat7-maven-plugin.version>
		<maven-surefire-plugin.version>2.12.1</maven-surefire-plugin.version>
		<maven-failsafe-plugin.version>2.12.4</maven-failsafe-plugin.version>		
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<maven.compiler.source>1.8</maven.compiler.source>
		<maven.compiler.target>1.8</maven.compiler.target>
		<junit.version>4.12</junit.version>
		<commons-logging.version>1.1.3</commons-logging.version>
		<log4j.version>1.2.17</log4j.version>
	</properties>
	
	
```

- update the "dependencies" section of the pom.xml
 
```bash

	<dependencies>
		<dependency>
			<groupId>javax.ws.rs</groupId>
			<artifactId>javax.ws.rs-api</artifactId>
			<version>${javax-ws-rs-api.version}</version>
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
			<groupId>org.glassfish.jersey.core</groupId>
			<artifactId>jersey-client</artifactId>
			<version>${jersey.version}</version>
		</dependency>
		<dependency>
			<groupId>org.glassfish.jersey.media</groupId>
			<artifactId>jersey-media-json-jackson</artifactId>
			<version>${jersey.version}</version>
		</dependency>
		<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>${junit.version}</version>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>log4j</groupId>
			<artifactId>log4j</artifactId>
			<version>${log4j.version}</version>
		</dependency>
		<dependency>
			<groupId>commons-logging</groupId>
			<artifactId>commons-logging</artifactId>
			<version>${commons-logging.version}</version>
		</dependency>				
	</dependencies>

```

- Update the build section of the pom.xml

```bash

	<build>
		<finalName>tomcat-web-service-final-name</finalName>
		<plugins>
			<plugin>
				<groupId>org.apache.tomcat.maven</groupId>
				<artifactId>tomcat7-maven-plugin</artifactId>				
				<version>${tomcat7-maven-plugin.version}</version>
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
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-surefire-plugin</artifactId>
				<version>${maven-surefire-plugin.version}</version>
				<configuration>
					<excludes>
						<exclude>**/*IntegrationTest*</exclude>
					</excludes>
				</configuration>
			</plugin>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-failsafe-plugin</artifactId>
				<version>${maven-failsafe-plugin.version}</version>
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
		</plugins>
	</build>	

```

- Create the file context.xml in src/test/tomcat7-maven-plugin/context.xml

```bash

<?xml version='1.0' encoding='utf-8'?>
<Context>
    <WatchedResource>WEB-INF/web.xml</WatchedResource>
</Context>

```




- src/main/webapp/WEB-INF/web.xml

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





- src/main/java/Hello


```bash

package d.ws.hw;

public class Hello {

	private String id;
	private String name;    

	public Hello() {

	}

	public Hello(String author, String title) {
		this.name = author;
		this.id = title;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		Hello tutorial = (Hello) o;

		if (id != null ? !id.equals(tutorial.id) : tutorial.id != null) return false;
		if (name != null ? !name.equals(tutorial.name) : tutorial.name != null) return false;        

		return true;
	}

	@Override
	public int hashCode() {
		int result = name != null ? name.hashCode() : 0;
		result = 31 * result + (id != null ? id.hashCode() : 0);
		return result;
	}

	@Override
	public String toString() {
		return "Hello{" +
				"id='" + id + '\'' +
				", name='" + name + '\'' +
				'}';
	}
	

}

```


- src/main/resource/TutorialResource


```bash

package d.ws.hw;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@Path("/hello")
public class HelloResource {

    private static final Log LOGGER = LogFactory.getLog(HelloResource.class);

    @GET
    @Produces("text/json")
    @Path("/world")
    public Response listAllCourses() {
    	
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("Listing all courses.");
        }
        
        List<Hello> tutorials = new ArrayList<Hello>();
        tutorials.add(new Hello("Linus Meyer", "Linux"));
        tutorials.add(new Hello("Bill Famous", "Microsoft"));
        tutorials.add(new Hello("Josh Hotspot", "Java"));
        return Response.status(200).entity(tutorials).build();
    }
    
}

```

# Unit Test


```bash

package d.ws.hw;

import org.glassfish.jersey.logging.LoggingFeature;
import org.junit.Ignore;
import org.junit.Test;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.Response;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.hamcrest.core.Is;
import org.hamcrest.core.IsCollectionContaining;
import org.junit.Assert;

public class TutorialIntegrationTest {

    private static final Logger LOGGER = Logger.getLogger(TutorialIntegrationTest.class.getName());

    @Test
    public void testListAllCourses() {
        Client client = ClientBuilder.newClient();
        WebTarget target = client.target("http://localhost:8080").path("/tomcat-web-service/tutorial-service/tutorial/list-all-courses");
        Response response = target.request().get();
        
        Assert.assertThat(response.getStatus(), Is.equalTo(200));
        //List<Tutorial> tutorials = response.readEntity(new GenericType<List<Tutorial>>(){});
        Assert.assertThat(tutorials.size(), Is.equalTo(3));
        Assert.assertThat(tutorials, IsCollectionContaining.hasItem(new Tutorial("Linus Meyer", "Linux")));
        Assert.assertThat(tutorials, IsCollectionContaining.hasItem(new Tutorial("Bill Famous", "Microsoft")));
        Assert.assertThat(tutorials, IsCollectionContaining.hasItem(new Tutorial("Josh Hotspot", "Java")));
    }
    
}
   
```


# JaxRs Analyzer



