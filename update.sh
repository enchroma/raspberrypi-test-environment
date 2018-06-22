#!/usr/bin/env sh

# rm -rf public/static/4afc
# rm -rf public/static/after-image-v1
# git clone https://github.com/enchroma/4afc.git public/static/4afc
# git clone https://github.com/enchroma/after-image-v1.git public/static/after-image-v1

cd public/static/4afc
git pull
cd ../after-image-v1
git pull
