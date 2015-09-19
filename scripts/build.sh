#!/bin/bash
export $( cat .env-production|xargs)
mkdir dist
./node_modules/.bin/babel tools --out-file dist/index.js --ignore **/spec.js
