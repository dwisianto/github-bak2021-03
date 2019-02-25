# Tmux


- [Quick Start](#quick-start)
- [windows](#sessions)
- [sessions](#windows-tabs)
- [Panes](#panes-splits)
- [Copy Mode](#copy-mode)
- [Add On](#add-on)



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

GoTo: [tmux](#tmux) 

# Sessions

|   |   | 
| - | - | 
| s | list session    | 
| $ | rename session  | 

GoTo: [tmux](#tmux)

# Windows Tabs

|   |   | 
| - | - | 
| w | list windows  | 
| c | create windows  | 
| & | kill windows  |  
| , | name window  |  
| f | find window  |  
| :swap-window -t windowNumber| swap current widndows with a specific number  | 
| :swap-window -s sourceWindow -t targetWindow | swap current widndows with a specific number  | 

GoTo: [tmux](#tmux)

# Panes Splits

|   |   | 
| - | - | 
| %  | vertical split  | 
| "  | horizontal split  |
| x  | kill |  
| z  | toggle zoom |  

|   |   |
| - | - | 
| resize-pane -D 20 | resize down | 
| resize-pane -U 20 | resize up   | 
| resize-pane -L 20 | resize left |
| resize-pane -R 20 | resize right | 

GoTo: [tmux](#tmux)

# Copy Mode




GoTo: [tmux](#tmux)

# Add On


- [tmux-resurrect](https://github.com/tmux-plugins/tmux-resurrect)
- [tmux-continuum](https://github.com/tmux-plugins/tmux-continuum)

GoTo: [tmux](#tmux)