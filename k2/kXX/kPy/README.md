# Python

- 
- [Interpreter](#interpreter)
- [Language Reference](#language-reference)
- [Package Module Extension](#package-module-extension)


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
    
    
    
Reference
- [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv)


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
- [Tutorial1](https://medium.com/@henriquebastos/the-definitive-guide-to-setup-my-python-workspace-628d68552e14)
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


- [Ref1](https://medium.com/@jordanthomasg/python-development-on-macos-with-pyenv-virtualenv-ec583b92934c)
- [Ref2](https://pybee.org/contributing/how/first-time/setup/)
 



## Package Module Extension

- 


### setup.py

- python setup.py sdist
- python setup.py develop
- [ref1](https://the-hitchhikers-guide-to-packaging.readthedocs.io/en/latest/quickstart.html)


### pip


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
