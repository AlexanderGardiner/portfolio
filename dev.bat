@echo off

echo Starting portfolio server...
set PORT=3000
start "portfolio Server" cmd /c "npm run dev"

echo Starting webcut server...
set PORT=3001
start "webcut server" cmd /c "cd programmingProjects\webcut && npm run dev"

echo Starting issuetracker server...
set PORT=3002
start "issutracker Server" cmd /c "cd programmingProjects\issuetracker\src && npm run start"

echo Starting octoscout2023 server...
set PORT=3003
start "octoscout2023 Server" cmd /c "cd programmingProjects\octoscout2023 && npm run start"

echo Starting octoscout2024 server...
set PORT=3004
start "octoscout2024 Server" cmd /c "cd programmingProjects\octoscout2024 && npm run start"

echo Starting slimemouldsim server...
set PORT=3005
start "slimemouldsim Server" cmd /c "cd programmingProjects\slimemouldsim && npm run start"

echo Starting electromagneticparticlesim server...
set PORT=3006
start "electromagneticparticlesim Server" cmd /c "cd programmingProjects\electromagneticparticlesim && npm run start"

echo Starting platformerv2 server...
set PORT=3007
start "platformerv2 Server" cmd /c "cd programmingProjects\platformerv2 && npm run start"

echo Servers started successfully.

echo.
echo Press any key to stop servers and exit...
pause >nul

echo Stopping servers...

taskkill /f /im "node.exe" /t >nul

echo Servers stopped.