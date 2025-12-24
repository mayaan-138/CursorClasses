# Script to push codebase to GitHub
# Run this in PowerShell after Git is installed

Write-Host "Initializing git repository..." -ForegroundColor Green
git init

Write-Host "Adding all files..." -ForegroundColor Green
git add .

Write-Host "Creating initial commit..." -ForegroundColor Green
git commit -m "Initial commit: PlayHub landing page with Tic Tac Toe and Chess games"

Write-Host "Setting main branch..." -ForegroundColor Green
git branch -M main

Write-Host "Adding remote repository..." -ForegroundColor Green
git remote add origin https://github.com/mayaan-138/CursorClasses.git

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "Done! Your code is now on GitHub." -ForegroundColor Green

