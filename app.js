const turnConsoleOn = true;

const container = document.querySelector(".viewport");
const hotspotLabel = document.querySelector(".hotspotLabel");
let spriteActive = false;
const hostspotScale = 2.5;

class Scene {

    constructor (image, camera){
        this.image = image;
        this.points = [];
        this.sprites = [];
        this.scene = null;
        this.camera = camera;
    }

    createScene (scene) {
        this.scene = scene;
        // Load a texture and create a material
        const texture = new THREE.TextureLoader().load(this.image);
        const material = new THREE.MeshBasicMaterial( {
            map: texture,
            side: THREE.DoubleSide,
            transparent: true
        } );

        // Create a geometry -> sphere &AND apply the material
        const geometry = new THREE.SphereGeometry( 50, 32, 32 );
        this.sphere = new THREE.Mesh( geometry, material );
        this.scene.add( this.sphere );
        this.points.forEach(this.addTooltip.bind(this))
    }

    addPoint (point) {
        this.points.push(point);
    }

    addTooltip (point) {

        let spriteMap = new THREE.TextureLoader().load( "./assets/hotspot.png" );
        let spriteMaterial = new THREE.SpriteMaterial( {
            map: spriteMap
        } );
        let sprite = new THREE.Sprite( spriteMaterial );
        sprite.name = point.name;
        sprite.position.copy(point.position.clone().normalize().multiplyScalar(30));
        sprite.scale.multiplyScalar(hostspotScale);
        this.scene.add( sprite );
        this.sprites.push(sprite);
        sprite.onClick = () =>{
            this.destroy();
            point.scene.createScene(scene);
            point.scene.appear();
        }
    }

    destroy (){
        this.camera.zoom = 0.5;
        TweenLite.to(this.camera, 1, {
            zoom: 1,
            onUpdate: () => {
            this.camera.updateProjectionMatrix();
            }
        });
        TweenLite.to(this.sphere.material, 1, {
            opacity: 0,
            onComplete: () => {
                this.scene.remove(this.sphere);
            }
        });
        this.sprites.forEach((sprite)=>{
            TweenLite.to(sprite.scale, 1, {
                x: 0,
                y: 0,
                z: 0,
                onComplete: () => {
                    this.scene.remove(sprite);
                }
            });
        })
    }

    appear (){
        this.camera.zoom = 0.5;
        TweenLite.to(this.camera, .8, {
            zoom: 1,
            onUpdate: () => {
            this.camera.updateProjectionMatrix();
            }
        }).delay(0.5);
        this.sphere.material.opacity = 0;
        TweenLite.to(this.sphere.material, 1, {
            opacity: 1
        });
        this.sprites.forEach((sprite)=>{
            sprite.scale.set(0,0,0);
            TweenLite.to(sprite.scale, 1, {
                x: hostspotScale,
                y: hostspotScale,
                z: hostspotScale
            });
        })
    }

}

// Create a scene with camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Create a scene instance
let s = new Scene('./assets/scenes/1.jpg', camera);
let s2 = new Scene('./assets/scenes/2.jpg', camera);

s.addPoint({
    position: new THREE.Vector3( -49, 0, -0 ),
    name: 'Calçada',
    scene: s2
})
s2.addPoint({
    position: new THREE.Vector3( -49, 20, -0 ),
    name: 'Rua',
    scene: s
})
s.createScene(scene);
s.appear();

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
            intersectS.object.onClick()
        }
    })

    // Open to find an intersection between sphere and raycast
    if (turnConsoleOn){
        let intersect = rayCaster.intersectObject(sphere);
        if (intersect.length > 0){
            console.log(intersect[0].point);
        }
    }
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
            hotspotLabel.style.top  = (((-1 * p.y + 1) * window.innerHeight / 2)-55) + 'px';
            hotspotLabel.style.left = (((p.x + 1 ) * window.innerWidth / 2)+20) + 'px';
            hotspotLabel.classList.add('is-active');
            hotspotLabel.innerHTML = intersectS.object.name;
            spriteActive = intersectS.object;
            foundSprite = true;
            /*
            TweenLite.to(intersectS.object.scale, 0.3, {
                x: hostspotScale * 1.3,
                y: hostspotScale * 1.3,
                z: hostspotScale * 1.3
            })
            */
        }
    })
    if (foundSprite === false && spriteActive){
        hotspotLabel.classList.remove('is-active');
        /*
        TweenLite.to(spriteActive.scale, 0.3, {
            x: hostspotScale,
            y: hostspotScale,
            z: hostspotScale
        })
        */
        spriteActive = false;
    }
}

/*
addTooltip(new THREE.Vector3(
-49,
0,
-0
), 'Calçada');

addTooltip(new THREE.Vector3(
-41,
-12,
-24
), 'Ponte');
*/

window.addEventListener('resize', onResize);
container.addEventListener('click', onClick);
container.addEventListener('mousemove', onMouseMove);