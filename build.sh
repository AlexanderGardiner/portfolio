#!/bin/bash

echo "Building portfolio server..."
PORT=3000
next build &

echo "Building webcut server..."
PORT=3001
(cd programmingProjects/webcut && npm run build) &