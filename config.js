const turnConsoleOn = true;

// Create a Scene instance
let s0 = new Scene('./assets/scenes/1.jpg', camera);
let s1 = new Scene('./assets/scenes/2.jpg', camera);
let s2 = new Scene('./assets/scenes/3.jpg', camera);

s0.addPoint({
    position: new THREE.Vector3( -49, 0, -0 ),
    name: 'Calçada',
    scene: s1
});
s0.addPoint({
    position: new THREE.Vector3( -49, 70, -0 ),
    name: 'cachorro',
    scene: s2
});
s1.addPoint({
    position: new THREE.Vector3( -49, 20, -0 ),
    name: 'Rua',
    scene: s2
});
s2.addPoint({
    position: new THREE.Vector3( -49, 30, -0 ),
    name: 'bola',
    scene: s0
})

s0.createScene(scene);
s0.appear();