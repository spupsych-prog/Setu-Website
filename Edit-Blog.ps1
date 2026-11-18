# Setu Blog Editor & Publisher (PowerShell Version)
$ErrorActionPreference = "Stop"

# Ensure we are in the script's directory (the project root)
Set-Location $PSScriptRoot

# ------------------------------------------------------------------
# Cleanup helpers. These only ever touch node processes whose command
# line points inside THIS project folder - never other programs.
# ------------------------------------------------------------------
$ProjectRoot = $PSScriptRoot
$EditorPorts = @(3000, 8081)   # 3000 = Next.js site, 8081 = Decap CMS save server

function Stop-ProcessTree([int]$ProcId) {
    # taskkill /T also stops child processes. Run through cmd so its stderr
    # noise cannot trigger $ErrorActionPreference = "Stop".
    cmd.exe /c "taskkill /PID $ProcId /T /F >nul 2>&1"
}

function Get-ProjectNodeProcesses {
    Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" -ErrorAction SilentlyContinue |
        Where-Object { $_.CommandLine -and $_.CommandLine.IndexOf($ProjectRoot, [System.StringComparison]::OrdinalIgnoreCase) -ge 0 }
}

function Stop-EditorProcesses {
    $found = @(Get-ProjectNodeProcesses)
    foreach ($p in $found) {
        Write-Host "  Stopping editor process (PID $($p.ProcessId))..." -ForegroundColor DarkYellow
        Stop-ProcessTree $p.ProcessId
    }
    return $found.Count
}

function Get-PortOwners([int]$Port) {
    Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue |
        Select-Object -ExpandProperty OwningProcess -Unique
}

function Clear-EditorPorts {
    Write-Host "Checking for old editor processes from this project..." -ForegroundColor Yellow
    $killed = Stop-EditorProcesses
    if ($killed -eq 0) { Write-Host "  None found." -ForegroundColor Gray }

    # Give Windows up to 15 seconds to release the ports
    $deadline = (Get-Date).AddSeconds(15)
    do {
        $busy = @()
        foreach ($port in $EditorPorts) {
            foreach ($ownerPid in @(Get-PortOwners $port)) {
                if ($ownerPid) { $busy += [pscustomobject]@{ Port = $port; ProcId = $ownerPid } }
            }
        }
        if ($busy.Count -eq 0) { break }
        Start-Sleep -Milliseconds 500
    } while ((Get-Date) -lt $deadline)

    if ($busy.Count -gt 0) {
        Write-Host ""
        Write-Host "Cannot start: these ports are in use by something that is NOT part of this editor:" -ForegroundColor Red
        foreach ($b in $busy) {
            $proc = Get-Process -Id $b.ProcId -ErrorAction SilentlyContinue
            $name = if ($proc) { $proc.ProcessName } else { "unknown" }
            Write-Host "  Port $($b.Port) -> $name (PID $($b.ProcId))" -ForegroundColor Red
        }
        Write-Host "Other programs were left alone. Close that program, then run the editor again." -ForegroundColor Red
        Read-Host "Press [ENTER] to close"
        exit 1
    }
    Write-Host "  Ports 3000 and 8081 are free." -ForegroundColor Green
}

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
Clear-EditorPorts

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
# Stop only the processes this editor started (not every node process on the PC)
if ($process) { Stop-ProcessTree $process.Id }
$null = Stop-EditorProcesses

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
