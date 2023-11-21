@echo off

echo Starting Next.js server...
start "Next.js Server" cmd /c "npm run dev"

echo Starting IssueTracker server...
start "IssueTracker Server" cmd /c "cd programmingProjects\IssueTracker\src && node server.js"

echo Starting OctoScout server...
start "OctoScout Server" cmd /c "cd programmingProjects\octo-scout && node index.js"

echo Starting Static Programming Projects server...
start "Static Programming Projects Server" cmd /c "cd programmingProjects\ && node staticServer.js"

echo Servers started successfully.

echo.
echo Press any key to stop servers and exit...
pause >nul

echo Stopping servers...

taskkill /f /im "node.exe" /t >nul

echo Servers stopped.