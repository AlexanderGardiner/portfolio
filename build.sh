# Directories and ports for npm start
PROJECTS=(
  "."
  "./programmingProjects/webcut"
)

CURRENT_DIR=$(pwd)

# Loop through each directory and run npm start with assigned port
for PROJECT in "${PROJECTS[@]}"; do
  DIR="${PROJECT%%:*}"

  if [ -d "$DIR" ]; then
    echo "Building npm in $DIR"
    cd "$DIR"
    npm run build &
    cd "$CURRENT_DIR"
  else
    echo "Directory $DIR does not exist"
  fi
done
