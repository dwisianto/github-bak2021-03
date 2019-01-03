# Tomcat


# Quick Start


- mvn generate a web project
- update the pom xml

```bash

	<properties>
		<javax-ws-rs-api.version>2.1</javax-ws-rs-api.version>
		<jersey.version>2.26</jersey.version>	
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>	
		<maven.compiler.source>1.8</maven.compiler.source>
		<maven.compiler.target>1.8</maven.compiler.target>
		<junit.version>4.12</junit.version>
		<commons-logging.version>1.1.3</commons-logging.version>
		<log4j.version>1.2.17</log4j.version>
	</properties>
	
```

- update the build section
 
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


- Update the build-section of the pom.xml

```bash
	<build>
		<finalName>tomcat-web-service-name</finalName>
		<plugins>
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

- 


```bash

package com.javacodegeeks.ultimate.aws.eb;

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

import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsCollectionContaining.hasItem;
import static org.junit.Assert.assertThat;

public class TutorialIntegrationTest {

    private static final Logger LOGGER = Logger.getLogger(TutorialIntegrationTest.class.getName());

    @Test
    public void testListAllCourses() {
        Client client = ClientBuilder.newClient();
        WebTarget target = client.target("http://localhost:8080").path("/tomcat-web-service/tutorial-service/tutorial/list-all-courses");
        Response response = target.request().get();
        assertThat(response.getStatus(), is(200));
        //List<Tutorial> tutorials = response.readEntity(new GenericType<List<Tutorial>>(){});
        //assertThat(tutorials.size(), is(3));
        //assertThat(tutorials, hasItem(new Tutorial("Linus Meyer", "Linux")));
        //assertThat(tutorials, hasItem(new Tutorial("Bill Famous", "Microsoft")));
        //assertThat(tutorials, hasItem(new Tutorial("Josh Hotspot", "Java")));
    }
    
}
    
```


