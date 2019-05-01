# 


# Installation

```bash
pyenv activate ve37
pip install numpy
pip install pandas
pip install ipykernel
pyenv deactivate
pip list | grep jupyter
```


# Create your isolated Jupyter python kernel


```bash
 pyenv activate ve37
 pyenv which python
/Users/motta/.pyenv/versions/ve37/bin/python
 pyenv deactivate
 mkdir /Users/motta/Library/Jupyter/kernels/ve37
 ```
 
 kernel.json
 
 ```bash
 {
 "argv": [ "/Users/motta/.pyenv/versions/ve37/bin/python", "-m", "ipykernel",
          "-f", "{connection_file}"],
 "display_name": "ve37",
 "language": "python"
}
 ```