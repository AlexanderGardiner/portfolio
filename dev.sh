#!/bin/bash

echo "Starting portfolio server..."
PORT=3000 next dev &

echo "Starting webcut server..."
(cd programmingProjects/webcut && PORT=3001 npm run dev) &

echo "Starting issuetracker server..."
(cd programmingProjects/issuetracker/src && PORT=3002 npm run start) &

echo "Starting octoscout2023 server..."
(cd programmingProjects/octoscout2023 && PORT=3003 npm run start) &

echo "Starting octoscout2024 server..."
(cd programmingProjects/octoscout2024 && PORT=3004 npm run start) &

echo "Starting slimemouldsim server..."
(cd programmingProjects/slimemouldsim && PORT=3005 npm run start) &

echo "Starting electromagneticparticlesim server..."
(cd programmingProjects/electromagneticparticlesim && PORT=3006 npm run start) &

echo "Starting platformerv2 server..."
(cd programmingProjects/platformerv2 && PORT=3007 npm run start) &

echo "Servers started successfully."

# Wait for a key press to stop the servers
echo ""
read -n 1 -s -r -p "Press any key to stop servers and exit..."

echo ""
echo "Stopping servers..."
pkill -f node

echo "Servers stopped."