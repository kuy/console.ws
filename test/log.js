const { assert, test, fixture } = require('./helper');
const rewire = require('rewire');
const td = require('testdouble');
const WebSocket = require('ws');

function before() {
  const console = rewire('../lib');

  const $WebSocket = td.func(WebSocket);
  const $on = $WebSocket.prototype.on = td.func('on');
  td.when($on('open', td.matchers.isA(Function))).thenDo((type, fn) => fn());
  const $send = $WebSocket.prototype.send = td.func('send');
  console.__set__('WebSocket', $WebSocket);

  const $queue = td.object(Array);
  console.__set__('queue', $queue);

  return { console, $queue, $WebSocket, $on, $send };
}

function fakeWS(context, name) {
  context[name] = td.object(context.$WebSocket);
  context.console.__set__(name.slice(1), context[name]);

  context[name].on = td.func('on');
  context[name].send = td.func('send');

  return context;
}

function after() {
  td.reset();
}

test('log > before init: message should be queued and start init', fixture({ before: () => {
  return before();
}, after }, context => {
  const { console, $WebSocket, $on, $queue } = context;

  console.log('test #1');

  td.verify($queue.push('test #1'));

  td.verify($WebSocket('ws://localhost:5013'));
  td.verify($on('open', td.matchers.isA(Function)));
}));

test('log > while init: message should be queued', fixture({ before: () => {
  return fakeWS(before(), '$tmp');
}, after }, context => {
  const { console, $queue, $tmp } = context;

  console.log('test #2');

  td.verify($queue.push('test #2'));
  td.verify($tmp.on('open', td.matchers.isA(Function)), { times: 0, ignoreExtraArgs: true });
}));

test('log > after init: message should be sent immediately', fixture({ before: () => {
  return fakeWS(before(), '$ws');
}, after }, context => {
  const { console, $queue, $ws } = context;

  console.log('test #3');

  td.verify($queue.push('test #3'), { times: 0, ignoreExtraArgs: true });
  td.verify($ws.send('test #3'));
}));
