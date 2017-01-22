### Sockets library (Node.js)

This is just a simple wrapper lib for nodejs

## Client

```javascript
var socket = require('socket').client;

var s = new socket(host [, port]);

s.on(method, data);
s.send(method, data);

```

## Server

```javascript
var server = require('socket').server;

var s = new server();

s.bind(port);

s.on('connection', callback); //callback: (socket)

```
