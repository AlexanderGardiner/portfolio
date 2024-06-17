#!/bin/bash

PROJECTS=(
  "$PWD:3000"
  "$PWD/programmingProjects/webcut:3001"
  "$PWD/programmingProjects/issuetracker/src:3002"
  "$PWD/programmingProjects/octoscout2023:3003"
  "$PWD/programmingProjects/octoscout2024:3004"
  "$PWD/programmingProjects/slimemouldsim:3005"
  "$PWD/programmingProjects/electromagneticparticlesim:3006"
  "$PWD/programmingProjects/platformerv2:3007"
)

CURRENT_DIR=$(pwd)

# Loop through each directory and run npm start with the assigned port in a screen session
for PROJECT in "${PROJECTS[@]}"; do
  DIR="${PROJECT%:*}"   # Use % to get directory part before the colon
  PORT="${PROJECT#*:}"  # Use # to get port part after the colon

  echo "Processing project: $PROJECT"
  echo "Resolved directory: $DIR"
  echo "Assigned port: $PORT"

  if [ -d "$DIR" ]; then
    echo "Directory $DIR exists. Starting npm in $DIR on port $PORT in a new screen session"
    screen -S "server_$PORT" -d -m bash -c "
      echo 'Starting npm in $DIR on port $PORT'
      cd \"$DIR\"
      echo 'Current directory after cd: ' \$(pwd)
      PORT=\"$PORT\" npm start --prefix \"$DIR\"
    "
  else
    echo "Directory $DIR does not exist"
  fi
done

echo "All servers are starting in separate screen sessions."