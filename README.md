# console.ws

WebSocket powered remote console.log() for Node.js.

## Install

```
npm install --save-dev console.ws
```

## Usage

### 1. Run console.ws server

```
./node_modules/.bin/console
```

### 2. Use in your code

```es6
import console from 'console.ws';

console.log('Hello Console!');
```

## Why?

I used this utility for debugging before/after hooks in WebdriverIO's config file.

## FAQ

### Error: `Module not found: Error: Cannot resolve module 'tls'`

If you use console.ws with webpack/browserify, please setup your webpack/browserify config
to ignore `console.ws` and `tls` modules.

Here is a full error output.

```
ERROR in ./~/ws/lib/WebSocketServer.js
Module not found: Error: Cannot resolve module 'tls' in /path/to/project/node_modules/ws/lib
 @ ./~/ws/lib/WebSocketServer.js 15:10-24
```

## Limitation

You can't use this utility on browsers. The both client and server must be run on Node.js.

## API

*Note: Not enough compatibility with [Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console)*

### `console.log(msg)`

## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)

## License

MIT
