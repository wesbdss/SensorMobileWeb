
window.addEventListener("devicemotion", handleMotion, true);

function handleMotion(event) {
  var acceleration = event.acceleration;
  var interval = event.interval;
  $('ace-x').html(acceleration.x.toFixed(3));
  $('ace-y').html(acceleration.y.toFixed(3));
  $('ace-z').html(acceleration.z.toFixed(3));
  $('inter').html(interval);
}