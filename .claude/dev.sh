#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
export NODE_PATH="$(which node)"
export PATH="$(dirname $NODE_PATH):$PATH"
cd /Users/jocelynkaufman/brickandyield.co
exec node node_modules/.bin/next dev
