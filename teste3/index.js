//sensor detect
window.addEventListener("devicemotion", handleMotion, true);
var a = document.getElementById('ace-x');
$('#ace-x').html(0);
$('#ace-y').html(0);
$('#ace-z').html(0);
$('#inter').html(0);
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function handleMotion(event) {
    var acceleration = event.acceleration;
    var interval = event.interval;
    $('#ace-x').html(acceleration.x.toFixed(3));
    $('#ace-y').html(acceleration.y.toFixed(3));
    $('#ace-z').html(acceleration.z.toFixed(3));
    $('#inter').html(interval);
    sleep(100);
    
}



function main() {
    const my_canvas = document.getElementById('canvas');
    const renderer = new THREE.WebGLRenderer({ canvas:my_canvas });
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, my_canvas.offsetWidth / my_canvas.offsetHeight, 0.1, 1000);
    camera.position.z=50;

    var geometry = new THREE.BoxGeometry(20, 20, 20);
    var material = new THREE.MeshLambertMaterial({ color: 0xfd59d7 });
    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    
    var light = new THREE.PointLight(0xFFFF00);
    light.position.set(10, 0, 25);

    scene.add(light);
    
    var render = function () {
        requestAnimationFrame(render);

        cube.rotation.x += parseInt($("#ace-x").html());
        cube.rotation.y += parseInt($("#ace-y").html());
        camera.updateProjectionMatrix();

        renderer.render(scene, camera);
    };

    render();
}

main();