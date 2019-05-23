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
    /home/centos/.jupyter
    /home/centos/.pyenv/versions/ve37/etc/jupyter
    /usr/local/etc/jupyter
    /etc/jupyter
data:
    /home/centos/.local/share/jupyter
    /home/centos/.pyenv/versions/ve37/share/jupyter
    /usr/local/share/jupyter
    /usr/share/jupyter
runtime:
    /run/user/1000/Jupyter
```

Jupyter search for the kernels in the data directories in the order they are displayed. First, we need to find out where pyenv is storing our k_means environment, and we do it by executing the following:

```bash
:~$ pyenv activate ve37
:~$ pyenv which python
/home/centos/.pyenv/versions/ve37/bin/python
:~$ pyenv deactivate
```

Now we are ready to create our kernel. First let's create the folder:

```bash
  mkdir /run/user/1000/jupyter/kernels/ve37
 kernel.json
 ```
 
If you now run jupyter notebook you will have the new kernel available! 
 
 ```bash
 {
 "argv": [ "/home/centos/.pyenv/versions/ve37/bin/python", "-m", "ipykernel",
          "-f", "{connection_file}"],
 "display_name": "ve37",
 "language": "python"
}
 ```
 
# local
 
# aws 