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

There are lots of similar utilities already, but I needed minimalistic one for Node.js environment.

## Limitation

You can't use this utility on browsers. The both client and server must be run on Node.js.

## API

*Note: Not enough compatibility with [Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console)*

### `console.log(msg)`

## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)

## License

MIT
