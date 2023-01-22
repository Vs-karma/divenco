# git contributing workflow
## first fork the repo 

## than clone the repo using git clone from your local fork
```
git clone https://github.com/{yourUserName}/divenco.git
```
## create a branch 
```
git checkout -b your-branch-name
```
## do all the changes in your branch 
after your are done 
use the follwing git commands 
```
git add .
git commt -s -m "your msg"
```

## now swithch to main branch 
```
git checkout main
```
## go to your local fork in github and sync the changes 

### now come to your local file and pull all the changes in the main branch

```
git pull
```
## now rebase your main branch 
```
git rebase your-branch-name
```
## iff everything is fine till now push your changes to your local fork and from there create a pull request
```
git push 
```
## AUTHORS 
- yash
- saurabh
- rahil