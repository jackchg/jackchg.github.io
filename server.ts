"use strict"

import express = require('express');

const app = express();
app.use(express.static(__dirname));

async function initServer() {
  const PORT_NUM = 8080;
  app.listen(PORT_NUM, function() {
    console.log('Listening at http://127.0.0.1:' + PORT_NUM
                + ' exporting the directory ' + __dirname + '.');
  });
}
initServer();
