const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ url:'192.168.0.106',port: 8001});
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    if (message != "Conecta"){
        var men = JSON.parse(message);
        console.log('received: %s %s %s %s',men.x,men.y,men.z,men.inter);
    }else{
      console.log("Alguem conectou!!");
    }
    console.log('received: %s ',message);
    
  });
});

console.log("Rodando");