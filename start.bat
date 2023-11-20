@echo off

echo Starting Next.js server...
start "Next.js Server" cmd /c "npm run dev"

echo Starting Express server...
start "Express Server" cmd /c "cd programmingProjects\IssueTracker\src && node server.js"

echo Servers started successfully.