# Docker

- [Quick Start](#quick-start)
    - [docker-mac-os](`)
    - [setup_docker_on_mac](https://pewpewthespells.com/blog/setup_docker_on_mac.html)
    - [docker-toolbox](https://sourabhbajaj.com/mac-setup/Docker/)
    - [bash-completion](https://blog.alexellis.io/docker-mac-bash-completion/)
    - [docker-labs](https://github.com/docker/labs/)
- [Installation](#installation)
- [Setup](#setup) 
- [Potential Problem](#potential-problem)
- Tutorial
    - [docker-labs](https://github.com/docker/labs/)
    - [tomcat-in-docker-with-cron-on-aws](http://ivarprudnikov.com/tomcat-in-docker-with-cron-on-aws)
	- https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes




# Quick Start

- docker ps # a list of running container
- docker image ls
- docker container ls 
- docker container ls --all

List Docker commands
- docker 
- docker container --help
- docker image --help

Display Docker version and info
- docker --version
- docker version
- docker info

Execute docker image
- docker run hello world

List Docker containers (running, all, all in quite mode)
- docker container ls
- docker container ls --all
- docker container ls -aq




GoTo [Top](#docker)

# Installation CentOs


GoTo [Top](#docker)


# Installation

- installation
    - brew install docker 
    - brew install docker-compose 
    - brew install docker-machine 
    - brew install xhyve 
    - brew install docker-machine-driver-xhyve
        - If you have done it that you’ve received notice that docker-machine-driver-xhyve has to run as root, so you have to execute that commands:
            - sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
            - sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
        - Both commands will ask you for a password. Don’t worry to type it in a command line.
- If everything goes ok then you can create your first docker machine, just type this command:
   - docker-machine create default --driver xhyve --xhyve-experimental-nfs-share
- This command, as you suppose, creates a docker machine, using the xhyve driver.
--xhyve-experimental-nfs-share – this flag allows you to share each file in your /Users/ folder between Mac OS and Linux run on Docker.
- Because you can have a lot docker machine, you can type this command in your terminal:
    - eval $(docker-machine env default)
- It registers a few variables, which allow you to use default docker machine without typing “default” each time.





GoTo [Top](#docker)


## Setup


- 

GoTo [Top](#docker)

## Potential Problem

### 

### 

GoTo [Top](#docker)



### Containers

#### Dockerfile

Part [part2](https://docs.docker.com/get-started/part2/#prerequisites). Create an empty directory. Change directories (cd) into the new directory, create a file called Dockerfile, copy-and-paste the following content into that file, and save it. Take note of the comments that explain each statement in your new Dockerfile.

Dockerfile
````bash
 # Use an official Python runtime as a parent image
FROM python:2.7-slim

 # Set the working directory to /app
WORKDIR /app

 # Copy the current directory contents into the container at /app
COPY . /app

 # Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

 # Make port 80 available to the world outside this container
EXPOSE 80

 # Define environment variable
ENV NAME World

 # Run app.py when the container launches
CMD ["python", "app.py"]
````

#### app


Create two more files, requirements.txt and app.py, and put them in the same folder with the Dockerfile. This completes our app, which as you can see is quite simple. When the above Dockerfile is built into an image, app.py and requirements.txt is present because of that Dockerfile’s COPY command, and the output from app.py is accessible over HTTP thanks to the EXPOSE command.

requirement
````bash
Flask
Redis
````

app.py
````bash
from flask import Flask
from redis import Redis, RedisError
import os
import socket

 # Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route("/")
def hello():
    try:
        visits = redis.incr("counter")
    except RedisError:
        visits = "<i>cannot connect to Redis, counter disabled</i>"

    html = "<h3>Hello {name}!</h3>" \
           "<b>Hostname:</b> {hostname}<br/>" \
           "<b>Visits:</b> {visits}"
    return html.format(name=os.getenv("NAME", "world"), hostname=socket.gethostname(), visits=visits)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
````
Now we see that pip install -r requirements.txt installs the Flask and Redis libraries for Python, and the app prints the environment variable NAME, as well as the output of a call to socket.gethostname(). Finally, because Redis isn’t running (as we’ve only installed the Python library, and not Redis itself), we should expect that the attempt to use it here fails and produces the error message.

Note: Accessing the name of the host when inside a container retrieves the container ID, which is like the process ID for a running executable.

That’s it! You don’t need Python or anything in requirements.txt on your system, nor does building or running this image install them on your system. It doesn’t seem like you’ve really set up an environment with Python and Flask, but you have.


#### Build the app

We are ready to build the app. 
Make sure you are still at the top level of your new directory. 
Here’s what ls should show:

````bash
$ ls
Dockerfile		app.py			requirements.txt
````

Now run the build command. This creates a Docker image, which we’re going to tag using -t so it has a friendly name.

docker build -t friendlyhello .

Where is your built image? It’s in your machine’s local Docker image registry:

$ docker image ls

REPOSITORY            TAG                 IMAGE ID
friendlyhello         latest              326387cea398



#### Run the app

Run the app, mapping your machine’s port 4000 to the container’s published port 80 using -p:

docker run -p 4000:80 friendlyhello

You should see a message that Python is serving your app at http://0.0.0.0:80. But that message is coming from inside the container, which doesn’t know you mapped port 80 of that container to 4000, making the correct URL http://localhost:4000.

Go to that URL in a web browser to see the display content served up on a web page.


````
docker run -d -p 4000:80 hw1a
````

docker container ls



#### Share your image

To demonstrate the portability of what we just created, let’s upload our built image and run it somewhere else. After all, you need to know how to push to registries when you want to deploy containers to production.

A registry is a collection of repositories, and a repository is a collection of images—sort of like a GitHub repository, except the code is already built. An account on a registry can create many repositories. The docker CLI uses Docker’s public registry by default.

Note: We use Docker’s public registry here just because it’s free and pre-configured, but there are many public ones to choose from, and you can even set up your own private registry using Docker Trusted Registry.

##### Tag the image

The notation for associating a local image with a repository on a registry is username/repository:tag. The tag is optional, but recommended, since it is the mechanism that registries use to give Docker images a version. Give the repository and tag meaningful names for the context, such as get-started:part2. This puts the image in the get-started repository and tag it as part2.

Now, put it all together to tag the image. Run docker tag image with your username, repository, and tag names so that the image uploads to your desired destination. The syntax of the command is:
 

### Services


#### Prerequisites

- Install Docker version 1.13 or higher.
- Get Docker Compose. On Docker for Mac and Docker for Windows it’s pre-installed, so you’re good-to-go. On Linux systems you need to install it directly. On pre Windows 10 systems without Hyper-V, use Docker Toolbox.
- Read the orientation in Part 1.
- Learn how to create containers in Part 2.
- Make sure you have published the friendlyhello image you created by pushing it to a registry. We use that shared image here.
- Be sure your image works as a deployed container. Run this command, slotting in your info for username, repo, and tag: docker run -p 4000:80 username/repo:tag, then visit http://localhost:4000/.


#### Introduction

#### About





