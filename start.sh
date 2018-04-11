#!/usr/bin/env sh

pm2 stop 0
pm2 start server.js --name 0 --env production
