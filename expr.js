"use strict";
const FastBootAppServer = require('fastboot-app-server');

let server = new FastBootAppServer({
  distPath: 'dist'
});

server.start();


//PORT=2323 forever start server.js 
