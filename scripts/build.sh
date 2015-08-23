#!/bin/bash
export $( cat .env-production|xargs)
./node_modules/.bin/babel tools --out-dir dist
