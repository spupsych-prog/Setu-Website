# Setu Blog Editor & Publisher (PowerShell Version)
$ErrorActionPreference = "Stop"

# Ensure we are in the script's directory (the project root)
Set-Location $PSScriptRoot

Clear-Host
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "       SETU BLOG EDITOR & PUBLISHER" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Detecting current branch..." -ForegroundColor Yellow
$branch = git rev-parse --abbrev-ref HEAD
Write-Host "Pulling latest changes from origin/$branch..." -ForegroundColor Yellow
git pull origin $branch

Write-Host ""
Write-Host "Starting the local system in the background..." -ForegroundColor Yellow
# Start the CMS server in a hidden window
$process = Start-Process "npm.cmd" -ArgumentList "run cms" -WindowStyle Hidden -WorkingDirectory $PSScriptRoot -PassThru

# Wait a few seconds for the server to start before opening the browser
Start-Sleep -Seconds 5

# Open the browser immediately to the admin page
Start-Process "http://localhost:3000/admin/index.html"

# Open a second tab for the live blog preview
Start-Sleep -Seconds 1
Start-Process "http://localhost:3000/blog"

Clear-Host
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "         SETU BLOG EDITOR IS ACTIVE" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your browser has been opened to the Blog Editor." -ForegroundColor White
Write-Host "You can write, edit, and save posts there." -ForegroundColor White
Write-Host ""
Write-Host "IMPORTANT: Keep this window open while you work." -ForegroundColor Red
Write-Host ""
Write-Host ">> WHEN YOU ARE COMPLETELY FINISHED <<" -ForegroundColor Yellow
Read-Host "Press [ENTER] here to close the editor and publish your changes to the live site"

Write-Host ""
Write-Host "Shutting down the editor..." -ForegroundColor Yellow
# Kill the node processes spun up by npm run cms safely
Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue
if ($process) { Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue }

Write-Host ""
$choice = Read-Host "Do you want to save and publish now? (y/n)"

if ($choice -eq "y") {
    Write-Host ""
    Write-Host "1. Adding latest changes..." -ForegroundColor Green
    git add .
    
    Write-Host "2. Saving updates..." -ForegroundColor Green
    git commit -m "Blog updates via Setu Editor"
    
    Write-Host "3. Uploading to live site (origin/$branch)..." -ForegroundColor Green
    git push origin $branch
    
    Write-Host ""
    Write-Host "SUCCESS: Your updates have been published!" -ForegroundColor Cyan
    Write-Host "It will take about 2-3 minutes for the live site to update." -ForegroundColor Gray
} else {
    Write-Host ""
    Write-Host "Changes were saved locally but NOT published to the live site." -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to close this window..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
