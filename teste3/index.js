//sensor detect
window.addEventListener("devicemotion", handleMotion, true);
var a = document.getElementById('ace-x');
$('#ace-x').html("null");
$('#ace-y').html("null");
$('#ace-z').html("null");
$('#inter').html("null");
function handleMotion(event) {
    var acceleration = event.acceleration;
    var interval = event.interval;
    $('#ace-x').html(acceleration.x.toFixed(3));
    $('#ace-y').html(acceleration.y.toFixed(3));
    $('#ace-z').html(acceleration.z.toFixed(3));
    $('#inter').html(interval);
    a.innerHTML = acceleration.x.toFixed(3);
}


function main() {
    const canvas = $("#canvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var geometry = new THREE.BoxGeometry(20, 20, 20);
    var material = new THREE.MeshLambertMaterial({ color: 0xfd59d7 });
    var cube = new THREE.Mesh(geometry, material);

    var light = new THREE.PointLight(0xFFFF00);
    light.position.set(10, 0, 25);

    scene.add(light);
    scene.add(cube);
    var render = function () {
        requestAnimationFrame(render);

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
        camera.updateProjectionMatrix();

        renderer.render(scene, camera);
    };

    render();
}
main();
