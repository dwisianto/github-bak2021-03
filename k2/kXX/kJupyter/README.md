# Jupyter

- [installation](#installation)
- [local](#local)
- [aws](#aws) 


# Installation


```bash
pyenv activate ve37
python -m pip install --upgrade pip
python -m pip install jupyter
pip install numpy
pip install pandas
pip install ipykernel
pip list | grep jupyter
jupyter --path
pyenv deactivate
```

Jupyter path will show the config, data, and runtime path

```bash
:~$ jupyter --paths
config:
    /Users/motta/.jupyter
    /Users/motta/.pyenv/versions/2.7.3/etc/jupyter
    /usr/local/etc/jupyter
    /etc/jupyter
data:
    /Users/motta/Library/Jupyter
    /Users/motta/.pyenv/versions/2.7.3/share/jupyter
    /usr/local/share/jupyter
    /usr/share/jupyter
runtime:
    /Users/motta/Library/Jupyter/runtime
```

Jupyter search for the kernels in the data directories in the order they are displayed. First, we need to find out where pyenv is storing our k_means environment, and we do it by executing the following:

```
:~$ pyenv activate k_means
:~$ pyenv which python
/Users/motta/.pyenv/versions/k_means/bin/python
:~$ pyenv deactivate
```

Now we are ready to create our kernel. First let's create the folder:



If you now run jupyter notebook you will have the new kernel available!






```bash
 pyenv activate ve37
 pyenv which python
/Users/motta/.pyenv/versions/ve37/bin/python
 pyenv deactivate
 mkdir /Users/motta/Library/Jupyter/kernels/ve37
 ```
 
 
 ```bash
 jupyther 
 mkdir /users/1000/Library/jupyter/kernels/ve37
 kernel.json
 ```
 
 ```bash
 {
 "argv": [ "/Users/motta/.pyenv/versions/ve37/bin/python", "-m", "ipykernel",
          "-f", "{connection_file}"],
 "display_name": "ve37",
 "language": "python"
}
 ```
 
# local
 
# aws 