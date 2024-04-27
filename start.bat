@echo off

echo Starting Next.js server...
start "Next.js Server" cmd /c "npm run dev"

echo Starting Webcut server...
start "Webcut Server" cmd /c "cd programmingProjects\webcut npm run dev"

echo Starting IssueTracker server...
start "IssueTracker Server" cmd /c "cd programmingProjects\IssueTracker\src && node server.js"

echo Starting OctoScout2023 server...
start "OctoScout2023 Server" cmd /c "cd programmingProjects\octo-scout && node index.js"

echo Starting OctoScout2024 server...
start "OctoScout2024 Server" cmd /c "cd programmingProjects\OctoScout2024v2 && node server.js"

echo Starting Static Programming Projects server...
start "Static Programming Projects Server" cmd /c "cd programmingProjects\ && node staticServer.js"

echo Servers started successfully.

echo.
echo Press any key to stop servers and exit...
pause >nul

echo Stopping servers...

taskkill /f /im "node.exe" /t >nul

echo Servers stopped.