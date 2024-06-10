#!/bin/bash

echo "Starting portfolio server..."
PORT=3000
next start &

echo "Starting webcut server..."
PORT=3001
(cd programmingProjects/webcut && npm run start) &

echo "Starting issuetracker server..."
PORT=3002
(cd programmingProjects/issuetracker/src && npm run start) &

echo "Starting octoscout2023 server..."
PORT=3003
(cd programmingProjects/octoscout2023 && npm run start) &

echo "Starting octoscout2024 server..."
PORT=3004
(cd programmingProjects/octoscout2024 && npm run start) &

echo "Starting slimemouldsim server..."
PORT=3005
(cd programmingProjects/slimemouldsim && npm run start) &

echo "Starting electromagneticparticlesim server..."
PORT=3006
(cd programmingProjects/electromagneticparticlesim && npm run start) &

echo "Starting platformerv2 server..."
PORT=3007
(cd programmingProjects/platformerv2 && npm run start) &

echo "Servers started successfully."

echo ""
read -n 1 -s -r -p "Press any key to stop servers and exit..."

echo ""
echo "Stopping servers..."
pkill -f node

echo "Servers stopped."
