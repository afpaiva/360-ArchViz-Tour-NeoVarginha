const container = document.body;
const hotspotLabel = document.querySelector(".hotspotLabel");
let hotspotLabelActive = false;

// Create a scene with camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Load a texture and create a material
const texture = new THREE.TextureLoader().load('./assets/scenes/1.jpg');
const material = new THREE.MeshBasicMaterial( {
    map: texture,
    side: THREE.DoubleSide
} );

// Create a geometry -> sphere &AND apply the material
const geometry = new THREE.SphereGeometry( 50, 32, 32 );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// Hotspots
function addTooltip (position, label) {

    let spriteMap = new THREE.TextureLoader().load( "./assets/hotspot.png" );
    let spriteMaterial = new THREE.SpriteMaterial( {
        map: spriteMap
    } );
    let sprite = new THREE.Sprite( spriteMaterial );
    sprite.name = label;
    sprite.position.copy(position.clone().normalize().multiplyScalar(30));
    sprite.scale.multiplyScalar(2);
    scene.add( sprite );
}

// Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

// Set controls
const controls = new THREE.OrbitControls( camera, renderer.domElement);
controls.rotateSpeed = 0.4;
controls.enableZoom = false;
controls.autoRotate = true;
camera.position.set(1, 0 , 0);
controls.update();

// Animate Frames
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

// Set window size 100% WxH
function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

const rayCaster = new THREE.Raycaster();

function onClick(e){
    let mouse = new THREE.Vector2(
        ( e.clientX / window.innerWidth ) * 2 - 1,
        -1*(( e.clientY / window.innerHeight ) * 2 - 1),
    );
    rayCaster.setFromCamera(mouse, camera);
    let intersectS = rayCaster.intersectObjects(scene.children);
    intersectS.forEach(function (intersectS) {
        if (intersectS.object.type === 'Sprite') {
            console.log(intersectS.object.name);
        }
    })

    // Open to find an intersection between sphere and raycast
        /*
            let intersect = rayCaster.intersectObject(sphere);
            if (intersect.length > 0){
                console.log(intersect[0].point);
            }
        */
}

function onMouseMove(e){
    let mouse = new THREE.Vector2(
        ( e.clientX / window.innerWidth ) * 2 - 1,
        -1*(( e.clientY / window.innerHeight ) * 2 - 1),
    );
    rayCaster.setFromCamera(mouse, camera);
    let foundSprite = false;
    let intersectS = rayCaster.intersectObjects(scene.children);
    intersectS.forEach(function (intersectS) {
        if (intersectS.object.type === 'Sprite') {
            let p = intersectS.object.position.clone().project(camera);
            //hotspotLabel.style.top  = ((-1 * p.y + 1) * window.innerHeight / 2) + 'px';
            //hotspotLabel.style.left = ((p.x + 1 ) * window.innerWidth / 2) + 'px';
            hotspotLabel.classList.add('is-active');
            hotspotLabelActive = true;
            foundSprite = true;
        }
    })
    if (foundSprite === false && hotspotLabelActive){
        hotspotLabel.classList.remove('is-active');
    }
}

addTooltip(new THREE.Vector3(
    -49,
    0.48,
    -0.17
    ), 'Ponto!');

window.addEventListener('resize', onResize);
container.addEventListener('click', onClick);
container.addEventListener('mousemove', onMouseMove);