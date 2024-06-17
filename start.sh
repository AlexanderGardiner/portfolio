#!/bin/bash

PROJECTS=(
  ".:3000"
  "./programmingProjects/webcut:3001"
  "./programmingProjects/issuetracker/src:3002"
  "./programmingProjects/octoscout2023:3003"
  "./programmingProjects/octoscout2024:3004"
  "./programmingProjects/slimemouldsim:3005"
  "./programmingProjects/electromagneticparticlesim:3006"
  "./programmingProjects/platformerv2:3007"
)

CURRENT_DIR=$(pwd)

# Loop through each directory and run npm start with the assigned port
for PROJECT in "${PROJECTS[@]}"; do
  (
    DIR="${PROJECT%%:*}"
    PORT="${PROJECT##*:}"

    if [ -d "$DIR" ]; then
      echo "Starting npm in $DIR on port $PORT in a new screen session"
      cd "$DIR"
      screen -dmS "server_$PORT" bash -c "PORT=$PORT npm start"
    else
      echo "Directory $DIR does not exist"
    fi
  )
done

echo "All servers are starting in separate screen sessions."
