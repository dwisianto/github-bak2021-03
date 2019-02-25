# Tmux

- [Quick Start](#quick-start)
- [windows](#sessions)
- [sessions](#windows-tabs)
- [Panes](#panes-splits)

# Quick Start

|   |   |
| - | - |
| ~/.tmux.conf | | 
| tmux source-file ~/.tmux.conf | | 
| tmux     |   | 
| tmux ls  |   | 
| tmux a -t targetName  |  attach a specific session | 
| tmux new -s myName  | start new session with name  |
| tmux kill-session -t myName  |   |

| | | 
| - | - |
| : |  prompt |  
| d |  detach | 
| t |  big clock | 
| ? |  list shortcut | 

 

# Sessions

|   |   | 
| - | - | 
| s | list session    | 
| $ | rename session  | 


# Windows Tabs

|   |   | 
| - | - | 
| w |   | 
| c |   | 
| & |   |  
| , | name window  |  
| f | find window  |  
| :swap-window -t windowNumber| swap current widndows with a specific number  | 


# Panes Splits

|   |   | 
| - | - | 
|   |   | 
|   |   | 
|   |   |  



# Copy Mode






# Add On


- [tmux-resurrect](https://github.com/tmux-plugins/tmux-resurrect)
- [tmux-continuum](https://github.com/tmux-plugins/tmux-continuum)

