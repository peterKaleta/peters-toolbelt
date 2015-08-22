#!/bin/bash
export $( cat .env-production|xargs)
./node_modules/.bin/webpack \
  --colors \
  --verbose \
  --devtool eval \
  --progress \
  --display-chunks \
  --content-base build \
  --optimize-occurence-order \
  --bail
