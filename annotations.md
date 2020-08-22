# Annotations

## Sphere

*SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)*

```javascript
//sphere
var geometry = new THREE.SphereGeometry( 5, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
```

## Orbit

*Orbit around a target.*

```javascript
//sphere
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

var controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();

function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}
```

## TextureLoader

```javascript
var texture = new THREE.TextureLoader().load( 'textures/land_ocean_ice_cloud_2048.jpg' );
// immediately use the texture
// for material creation
// var material = new THREE.MeshBasicMaterial( { map: texture } );
```

## Camera

[CameraDoc.](https://threejs.org/docs/index.html#api/en/cameras/Camera)

## Sprite

[SpriteDoc.](https://threejs.org/docs/index.html#api/en/objects/Sprite)

```javascript
var spriteMap = new THREE.TextureLoader().load( "sprite.png" );
var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap } );
var sprite = new THREE.Sprite( spriteMaterial );
scene.add( sprite );
```