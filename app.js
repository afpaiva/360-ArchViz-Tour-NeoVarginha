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