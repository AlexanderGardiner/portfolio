@echo off

echo Building portfolio server...
set PORT=3000
start "portfolio Server" cmd /c "next build"

echo Building webcut server...
set PORT=3001
start "webcut server" cmd /c "cd programmingProjects\webcut && npm run build"
