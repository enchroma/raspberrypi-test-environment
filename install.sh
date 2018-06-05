#!/usr/bin/env sh

# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
# nvm install 9.4.0
# nvm alias default 9.4.0
rm -rf public/static/4afc
git clone https://github.com/enchroma/4afc.git public/static/4afc
npm i
npm run build
./start.sh


