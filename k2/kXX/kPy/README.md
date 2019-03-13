# Python

- [Python With Non Root](#python-with-non-root)
- [Interpreter](#interpreter)
     - pythonpath
     - pyenv
         - installation
         - routine1
     - [Ref1](https://medium.com/@jordanthomasg/python-development-on-macos-with-pyenv-virtualenv-ec583b92934c)
     - [Ref2](https://pybee.org/contributing/how/first-time/setup/)     
     - [Ref3-pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv) 
     - [Ref4-Tutorial1](https://medium.com/@henriquebastos/the-definitive-guide-to-setup-my-python-workspace-628d68552e14)
- [Language Reference](#language-reference)
- [Package Module Extension](#package-module-extension)
     - [the-hitchhikers-guide-to-packaging](https://the-hitchhikers-guide-to-packaging.readthedocs.io/en/latest/index.html)
     - [package-in-python](http://zetcode.com/articles/packageinpython/)
     - [Setup.py](https://jichu4n.com/posts/how-to-add-custom-build-steps-and-commands-to-setuppy/)
     
     
## Python With Non Root

### Python Bin


- mkdir ~/py27a
- mkdir ~/py27b
- wget https://www.python.org/ftp/python/2.7.11/Python-2.7.11.tgz
- tar zxfv Python-2.7.11.tgz
- find ~/python -type d | xargs chmod 0755
- cd Python-2.7.11
- ./configure --prefix=~/py27b
- make && make install
Notice the prefix option, it is mandatory for this to work. The value of prefix option is to specify where to put the related output of make command, by default it is in the /usr/local/ and we don't want that so we use our own customized directory.


 
Here comes another important step. By the default, if we type python command, it will use the default python of the system. We are going to update the environment variables to force the shell to use our new python. Edit ~/.bashrc_profile and add the following lines:

````bash
export PATH=$HOME/python/Python-2.7.11/:$PATH
export PYTHONPATH=$HOME/python/Python-2.7.11
````

Finally, refresh the current session by running the command:

````bash
source ~/.bashrc_profile
````
You might need to logout and login again for the environment to update properly. At this point, you should be able to see a new python. To check, run this command:

````bash
which python
````

it should show you the path to the python binary file, which is located in your home directory: ~/python/Python-2.7.11/python


### Pip


Pip is a program used to help us easily install python packages, it is similar to rubygems in Ruby world. After installing python locally as described in the first step, it is very easy to install pip.

Run the following command to install pip as a local user

````bash
wget --no-check-certificate https://bootstrap.pypa.io/get-pip.py -O - | python - --user
````

After finishing the installation, we need to update our PATH variable. Open ~/.bashrc_profile and add the following line:

````bash
export PATH=$HOME/.local/bin:$PATH
````

Again, reload the session by the command source ~/.bashrc_profile or logout and login. Then, check if pip command is available:

````bash
which pip
````

It should show a path pointing to your local directory: ~/.local/bin

Having both python and pip installed as a local user, you can install any other packages you want without worrying about other parts of the whole system. This is extremely useful in case you want to experiment with new things.




## Interpreter

- PYTHONPATH
- setup.py
- pip 
- pyenv shims
- virtual environment

GoTo: [Top](#python)

### PYTHONPATH



GoTo: [Top](#python)

### Anancoda

- export ANANCONDA_DIR=~/ananconda2
- export PYHONNOUSERSITE=True
- wget http://repo.continuum.io/archive/Anaconda2-4.3.0-Linux-x86_64.sh
- bash Anaconda2-4.3.0-Linux-x86_64.sh
- ANANCONDA_DIR/conda create --name venv273a
- source ANANCONDA_DIR/bin/activate venv273a
- 

### Pyenv

- pyenv
    - pyenv 
    - pyenv version
    - pyenv versions   

- pyenv global 2.7.8
- pyenv local 2.7.8

GoTo: [Top](#python)

#### Routine 1

- pyenv version
- pyenv versions
- pyenv virtualenvs 

GoTo: [Top](#python)

#### Routine 21 : install uninstal virtual environment

- pyenv version
- pyenv versions
- pyenv virtualenvs
- pyenv virtualenv activate myEnv 
- pyenv virtualenv deactivate myEnv

GoTo: [Top](#python)

#### Routine 22 : activate deactivate virtual environment

- pyenv version
- pyenv versions
- pyenv virtualenvs
- pyenv virtualenv activate myEnv 
- pyenv virtualenv deactivate myEnv

GoTo: [Top](#python)

####  Installation

- brew update 
- brew install pyenv # install python interpreters
- brew install pyenv-virtualenv # to configure "global environment"
- brew install pyenv-virtualenvwrapper # to work on different projects

- add the following to ~/.bash_profile
    - export PYENV_VIRTUALENV_DISABLE_PROMPT=1    
    - export WORKON_HOME="$HOME/.pyenv.ve"
    - export PYENV_ROOT="$HOME/.pyenv"
    - export PATH="$PYENV_ROOT/bin:$PATH"
    - eval "$(pyenv init -)"
    - eval "$(pyenv virtualenv-init -)"
    

GoTo: [Top](#python)

    
#### List of available python

- pyenv install --list
- pyenv install 3.4.1
- pyenv rehash
- pyenv global 3.4.1
- pyenv version

#### special virtual environment

- pyenv virtualenv 3.6.0 python3base 
- pyenv virtualenv 2.7 python2base
- pyenv activate python3base
- pyenv deactivate
- pyenv uninstall python3base


- pyenv global 3.6.0 2.71.13 python3base python2base

- pyenv which python3base
- pyenv which python2base
- pyenv version




#### pyenv-virtualenv

- pyenv 
- pyenv versions
- pyenv virtualenv 3.6.4 venv364a
- pyenv virtualenvs
- pyenv activate venv364
- pyenv deactivate

- pyenv shell venv364a
- pyenv shell venv364a --unset


 

#### pyenv local vs pyenv global


- pyenv gobal 
- pyenv local 
 


## Package Module Extension

There are (at least) three possible ways to install a python package in your $HOME directory. 
All of them have to be followed by a configuration of your PYTHONPATH environment.


### package template


```
  setup.py
  mypackage/__init__.py 
```
$ python setup.py sdist
$ python setup.py clean -all

```
>>> import sys
>>> sys.path
['',
 '/usr/local/lib/python2.6',
 '/usr/local/lib/python2.6/site-packages',
 ...]
>>> import mypackage
>>> mypackage.__file__
'mypackage/__init__.py'
```


### pip installation for a user

- pip install --user <packagename>


GoTo: [Top](#python)

### Install from source

- python setup.py sdist
- python setup.py develop
- python setup.py install --prefix=$HOME/.local


After you installed a python pacakge to your home directory or any other custom location, you need to add that location to your PYTHONPATH. This only has to be done once. The exact path depends on the python version it was installed with. If you followed the instructions above, this path is ~/.local/lib/pythonX.Y/site-packages, where X and Y are the major and minor version of the python you are using (e.g. 2.7 or 3.4). You can check it with python --version. The command to add this location to your environment is

GoTo: [Top](#python)

### Routine

#### Routine 1

#### Routine 2


## Language Reference


This section contains a Python reference documentation.

### Built-in Functions

| column | column | column | column |
|--------|--------|--------|--------|
| type | | | |
| isinstance | | |
| locals | | |
| globals | | | 

### Files

### String

### List

### Keywords


## Deep Learning


- [install-numpy](https://www.quora.com/How-do-I-install-NumPy-into-Python)
- scipy
- theano 
- https://shawnwun.github.io/talks/DL4NLG_20160906.pdf




