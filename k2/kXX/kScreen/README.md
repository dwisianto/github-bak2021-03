# GNU Screen

# QuickStart

Update the prefix to be an upper case j, i.e., Ctrl-Shift-j.

| | |
|-|-|
| screen -list | | 
| screen -ls | | 
| screen -r | |

| | | 
|-|-|
| prefix " | windows list   | 
| prefix c | windows create |
| prefix 1  |                |  
| prefix 2  |                |
| prefix 3  |                |    
| prefix : number 2  | swap current window to window number 2 |
    

# screenrc

Remap the prefix to Ctrl-Shift-j

```bash
escape ^^^
escape ^Jj
```

Reloading screenrc without restarting screen

```bash
prefix : source $HOME/.screenrc
```

hardline status
```bash
# hardline status
hardstatus alwayslastline 
# Very nice tabbed colored hardstatus line
hardstatus string '%{= Kd} %{= Kd}%-w%{= Kr}[%{= KW}%n %t%{= Kr}]%{= Kd}%+w %-= %{KG} %H%{KW}|%{KY}%101`%{KW}|%D %M %d %Y%{= Kc} %C%A%{-}'
# Hide hardstatus: ctrl-a f 
bind f eval "hardstatus ignore"
# Show hardstatus: ctrl-a F
bind F eval "hardstatus alwayslastline"
```

Scroll back 
```
# Cache X lines for scroll back
defscrollback 4000
```


