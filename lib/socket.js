var exports = {};
var socketHandler = require('./sockethandler');

var ws = require('ws'); 

class Socket {

   constructor(host, port){
      if(port){
         host = "ws://" + host + ":" + port;
      }
      this.socket = new ws(host);
      return new socketHandler(this.socket);      
   }
}
module.exports = Socket;

