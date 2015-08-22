export $( cat .env|xargs)
export NODE_ENV=testing

./node_modules/mocha/bin/mocha \
  --reporter nyan \
  --compilers js:mocha-babel \
  tools/**/*.spec.js
