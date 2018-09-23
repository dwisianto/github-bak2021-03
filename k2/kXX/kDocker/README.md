# Docker

- [Quick Start](#quick-start)
    - [docker-mac-os](https://pilsniak.com/how-to-install-docker-on-mac-os-using-brew/)
    - [setup_docker_on_mac](https://pewpewthespells.com/blog/setup_docker_on_mac.html)
    - [docker-toolbox](https://sourabhbajaj.com/mac-setup/Docker/)
    - [bash-completion](https://blog.alexellis.io/docker-mac-bash-completion/)
- [Installation](#installation)
- [Setup](#setup) 
- [Potential Problem](#potential-problem)


## Quick Start

- 
-

GoTo [Top](#docker)

## Installation

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