
const ip = '192.168.15.3:4000';
window.addEventListener("click", (e) => { alert(objectPadrao.status); sendUpdate(); })
var objectPadrao;

window.addEventListener("deviceorientation", handleOrientation,true);
function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;
  // var ballPos = (gamma / 90) * 200;

  $('.absolute').html(absolute);
  $('.alpha').html(alpha.toFixed(3));
  $('.beta').html(beta.toFixed(3));
  $('.gamma').html(gamma.toFixed(3));


  // $('.ball').css('transform', 'translateX(' + ballPos + 'px)');
  objectPadrao.orientation.absolute = absolute;
  objectPadrao.orientation.alpha = alpha;
  objectPadrao.orientation.beta = beta;
  objectPadrao.orientation.gamma = gamma;
  sendUpdate()

}

window.addEventListener("devicemotion", handleMotion, true);

function handleMotion(event) {
  var acceleration = event.acceleration;
  var interval = event.interval;
  // $('.accelerationx').html(acceleration.x.toFixed(3));
  // $('.accelerationy').html(acceleration.y.toFixed(3));
  // $('.accelerationz').html(acceleration.z.toFixed(3));
  // $('.interval').html(interval);

  objectPadrao.motion.acceleration = acceleration;
  objectPadrao.motion.interval = interval;
  sendUpdate()
}


const ws = new WebSocket("ws://" + ip);

const sendUpdate = () => {

  ws.send(JSON.stringify(objectPadrao));

}

ws.onopen = function (event) {
  objectPadrao = {
    "name": null,
    "status": null,
    "orientation": {
      "absolute": null,
      "alpha": null,
      "beta": null,
      "gamma": null
    },
    "motion": {
      "interval": null,
      "acceleration": null
    }
  }
  objectPadrao.name = prompt("Qual seu nome?");
  objectPadrao.status = "CONECTADO"

  $("#name").html(objectPadrao.name);
  $("#status").html(objectPadrao.status);
  // $("#status").style("color:green;");
}


// aaaaaaaaa
// window.addEventListener("deviceorientation", handleOrientation, true);

// function handleOrientation(event) {
//   var absolute = event.absolute;
//   var alpha    = event.alpha;
//   var beta     = event.beta;
//   var gamma    = event.gamma;
//   var ballPos = (gamma/90)*200;
  
//   $('.absolute').html(absolute);
//   $('.alpha').html(alpha.toFixed(3));
//   $('.beta').html(beta.toFixed(3));
//   $('.gamma').html(gamma.toFixed(3));
//   $('.ball').css('transform','translateX(' + ballPos + 'px)');
  
  
// }

// window.addEventListener("devicemotion", handleMotion, true);

// function handleMotion(event) {
//   var acceleration = event.acceleration;
//   var interval = event.interval;
//   $('.accelerationx').html(acceleration.x.toFixed(3));
//   $('.accelerationy').html(acceleration.y.toFixed(3));
//   $('.accelerationz').html(acceleration.z.toFixed(3));
//   $('.interval').html(interval);
// }
