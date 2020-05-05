
window.addEventListener("devicemotion", handleMotion, true);
var a = document.getElementById('ace-x');
$('#ace-x').html(null);
$('#ace-y').html(null);
$('#ace-z').html(null);
$('#inter').html(null);
function handleMotion (event) {
  var acceleration = event.acceleration;
  var interval = event.interval;
  $('#ace-x').html(acceleration.x.toFixed(3));
  $('#ace-y').html(acceleration.y.toFixed(3));
  $('#ace-z').html(acceleration.z.toFixed(3));
  $('#inter').html(interval);
  a.innerHTML = acceleration.x.toFixed(3);
}