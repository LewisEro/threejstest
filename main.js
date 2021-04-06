console.log('Hello World')

var drawDistanceMax = 1000;
var drawDistanceMin = 0.1;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight, drawDistanceMin, drawDistanceMax);
var renderer = new THREE.WebGLRenderer();

//color pallete
var black = "rgb(0,0,0)";
var white = "rgb(255,255,255)";
var red = "rgb(255,0,0)";
var green = "rgb(10,200,10)";
var blue = "rgb(10,10,200)";
var gold = "rgb(180,180,50)";

var fogEffect = 1;

renderer.setClearColor(white);
renderer.setSize(window.innerWidth,window.innerHeight);

var axes = new THREE.AxesHelper(30);
scene.add(axes);

//plane

var planeGeometry = new THREE.PlaneGeometry(70,30,1,1);
var planeMaterial = new THREE.MeshBasicMaterial({color:green});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5*Math.PI;
scene.add(plane);

//cube

var cubeGeometry = new THREE.BoxGeometry(6,6,6);
var cubeMaterial = new THREE.MeshLambertMaterial({color:red});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -10;
cube.position.y = 3;
cube.position.z = 3;
scene.add(cube);

//sphere

var sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
var sphereMaterial = new THREE.MeshLambertMaterial({color:blue, wireframe:false});
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 25;
sphere.position.y = 16;
sphere.position.z = 0;
scene.add(sphere);

//cylinder
 
var cylinderGeometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
var cylinderMaterial = new THREE.MeshLambertMaterial({color:gold});
var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.x = 0;
cylinder.position.y = 0;
scene.add(cylinder);

//pyramid

var pyramidGeometry = new THREE.CylinderGeometry( 1, 5, 20, 32 );
var pyramidMaterial = new THREE.MeshLambertMaterial({color:gold});
var pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
pyramid.position.x = -25;
pyramid.position.y = 10;
scene.add(pyramid);

//donut

var donutGeometry = new THREE.TorusGeometry(5, 2);
var donutMaterial = new THREE.MeshLambertMaterial({color:red});
var donut = new THREE.Mesh(donutGeometry, donutMaterial);
donut.position.x = 12.5;
donut.position.y = 5;
donut.rotation.x = -0.5*Math.PI;
scene.add(donut);


//fog
if (fogEffect){
	scene.fog = new THREE.Fog(0xffffff, 10, 175);
}

//spotlight
var spotlight = new THREE.SpotLight(0xffffff);
spotlight.position.set(-40,60,40);
scene.add(spotlight);

camera.position.x =50;
camera.position.y =50;
camera.position.z =50;
camera.lookAt(scene.position);

var step =0;
var tickSpeed = 0.005;

function renderScene(){
	// make updates to position, rotation of objects in the Scene
	step += tickSpeed;

	donut.rotation.x = 10*(step);

	cylinder.position.x = 30*Math.sin(step);
	cylinder.position.y = 30*Math.sin(step);
	cylinder.position.z = 30*Math.sin(step);
	cylinder.rotation.x = 10*(step);
	cylinder.rotation.y = 10*(step);
	cylinder.rotation.z = 10*Math.sin(step);



	camera.position.x = 60*Math.cos(step);
	camera.position.z = 60*Math.sin(step);
	camera.lookAt(scene.position);

	requestAnimationFrame(renderScene);
	renderer.render(scene,camera); 


}

$("#our_threejs_animation").append(renderer.domElement);
//renderer.render(scene,camera); 

//call our renderScene function to add "time" to our scene
renderScene()



