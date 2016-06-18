'use strict';

var WebSocket = require('ws');
var ws, tmp;
var queue = [];

function flush() {
  queue.forEach(function flushEach(msg) {
    ws.send(msg);
  });
  queue = [];
}

module.exports = {
  log: function log(message) {
    if (typeof ws === 'undefined') {
      queue.push(message);
      if (typeof tmp === 'undefined') {
        tmp = new WebSocket('ws://localhost:5013');
        tmp.on('open', function onOpen() {
          ws = tmp;
          tmp = undefined;
          flush();
        });
      }
    } else {
      ws.send(message);
    }
  }
};
