var exports = {};
var ws = require('ws').Server;
var EventEmitter = require('events');
var emitter = new EventEmitter();
var socketHandler = require('./sockethandler');

var server;


class SocketServer extends EventEmitter {
   constructor(){
      super();
   }

   bind (port){
      this.port = port;
      this.server = new ws({
         port: port
      });
      this.server.on('connection', function(sock){
         this.emit('connection', new socketHandler(sock));
      }.bind(this));
   }

   stop(){
      this.server.close();
   }
}

module.exports = SocketServer;
