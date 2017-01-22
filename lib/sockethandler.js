var ws = require('ws');
var EventEmitter = require('events');
var exports = {};

class SocketHandler extends EventEmitter {
   
   constructor (socket){
      super();
      this.socket = socket;
      this.socket.on('open', function(){
         this.emit('open', socket);
      }.bind(this));

      this.socket.on('close', function(){
         this.emit('close', socket);
      }.bind(this));

      socket.on('message', function(data){
         if(typeof(data) !== 'object'){
            data = JSON.parse(data);
         }
         console.log(data);
         if(data.method){
            this.emit(data.method, data.data);
         }
      }.bind(this));
   }
   
   send(command, data){
      console.log("Sending: " + command);
      this.socket.send(JSON.stringify({method: command, data: data}));      
   }
}
module.exports = SocketHandler;
