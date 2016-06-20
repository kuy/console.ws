[![NPM Package][npm_img]][npm_site]
[![Travis][ci_img]][ci_site]
[![Dependency Status][david_img]][david_site]

# console.ws

WebSocket-powered lightweight remote console.log() for Node.js.

## Install

```
npm install --save-dev console.ws
```

## Usage

### 1. Start console.ws server

```
./node_modules/.bin/console
```

### 2. Use in your code

```es6
import console from 'console.ws';

console.log('Hello Console!');
```

## Why?

I'm using for debugging of before/after hooks in WebdriverIO's config file.
In `wdio.conf.js` file, the output from `console.log()` is not captured and shown in the terminal.

## FAQ

### Lightweight?

**console.ws** depends on WebSocket implementation [ws](https://github.com/websockets/ws) module, not [Socket.IO](http://socket.io/).

### `Module not found: Error: Cannot resolve module 'tls'`

If you're using [webpack](https://webpack.github.io/), please tweak your `webpack.config.js` file
to ignore `console.ws` and `tls` modules because Webpack can't handle some native modules correctly.

Here is the error detail.

```
ERROR in ./~/ws/lib/WebSocketServer.js
Module not found: Error: Cannot resolve module 'tls' in /path/to/project/node_modules/ws/lib
 @ ./~/ws/lib/WebSocketServer.js 15:10-24
```

## Limitation

You can't use **console.ws** on browsers. The both client and server must be run on Node.js.

## API

*Note: Not enough [compatibility](https://github.com/kuy/console.ws/issues/2) with [Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console)*

### `console.log(msg)`

## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)

## License

MIT

[npm_img]: https://img.shields.io/npm/v/console.ws.svg
[npm_site]: https://www.npmjs.org/package/console.ws
[ci_img]: https://img.shields.io/travis/kuy/console.ws/master.svg?style=flat-square
[ci_site]: https://travis-ci.org/kuy/console.ws
[david_img]: https://img.shields.io/david/kuy/console.ws.svg
[david_site]: https://david-dm.org/kuy/console.ws
