# Python

- [Interpreter](#interpreter)
     - [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv) 
     - [Tutorial1](https://medium.com/@henriquebastos/the-definitive-guide-to-setup-my-python-workspace-628d68552e14)
     - [Ref1](https://medium.com/@jordanthomasg/python-development-on-macos-with-pyenv-virtualenv-ec583b92934c)
     - [Ref2](https://pybee.org/contributing/how/first-time/setup/)     
- [Language Reference](#language-reference)
- [Package Module Extension](#package-module-extension)
     - [the-hitchhikers-guide-to-packaging](https://the-hitchhikers-guide-to-packaging.readthedocs.io/en/latest/quickstart.html)
     - [package-in-python](http://zetcode.com/articles/packageinpython/)


## Interpreter

- PYTHONPATH
- setup.py
- pip 
- pyenv shims
- virtual environment

GoTo: [Top](#python)

### PYTHONPATH




### Pyenv

- pyenv
    - pyenv 
    - pyenv version
    - pyenv versions   

- pyenv global 2.7.8
- pyenv local 2.7.8



GoTo: [Top](#python)

####  Installation

- brew update 
- brew install pyenv # install python interpreters
- brew install pyenv-virtualenv # to configure "global environment"
- brew install pyenv-virtualenvwrapper # to work on different projects

- add the following to ~/.bash_profile
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


- pyenv global 3.6.0 2.71.13 python3base python2base

- pyenv which python3base
- pyenv which python2base
- pyenv version




### pyenv-virtualenv

- pyenv 
- pyenv versions
- pyenv virtualenv 3.6.4 venv364a
- pyenv virtualenvs

- pyenv activate venv364
- pyenv deactivate

- pyenv shell venv364a
- pyenv shell venv364a --unset


 

### pyenv local vs pyenv global


- pyenv gobal 
- pyenv local 
 


## Package Module Extension

There are (at least) three possible ways to install a python package in your $HOME directory. All of them have to be followed by a configuration of your environment, more specifically the PYTHONPATH.




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
