

error: 'React-1/' does not have a commit checked out
fatal: adding files failed

To solve this there will be .git folder inside 'React-1' folder delete it 

set remote : git remote add origin repo link


warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it :


resolve this issue = it config --global core.autocrlf true

git commit -m "inital commit"  : no single qoutes