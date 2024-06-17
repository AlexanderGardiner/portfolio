# Directories and ports for npm start
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

# Loop through each directory and run npm start with assigned port
for PROJECT in "${PROJECTS[@]}"; do
  DIR="${PROJECT%%:*}"
  PORT="${PROJECT##*:}"

  if [ -d "$DIR" ]; then
    echo "Starting npm in $DIR on port $PORT"
    cd "$DIR"
    PORT=$PORT npm start 
    cd "$CURRENT_DIR" &
  else
    echo "Directory $DIR does not exist"
  fi
done
