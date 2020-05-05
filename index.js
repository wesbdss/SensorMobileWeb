const ws = new WebSocket('ws://192.168.0.106:8001');

ws.onopen= function (event){
  ws.send('Conecta');
};

window.addEventListener("devicemotion", handleMotion, true);

function handleMotion(event) {
  var acceleration = event.acceleration;
  var interval = event.interval;
  var x = acceleration.x;
  var y = acceleration.y;
  var z = acceleration.z;
  var inter = interval;
  $('output').innerHTML = x,y,z;
}
