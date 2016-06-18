#!/usr/bin/env node

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 5013 });

wss.on('connection', function connection(ws) {
  ws.on('message', function onMessage(message) {
    console.log(message);
  });
});
