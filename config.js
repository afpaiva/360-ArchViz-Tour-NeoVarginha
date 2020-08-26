const turnConsoleOn = true;

// Create a Scene instance
let s0 = new Scene('./assets/scenes/00000.jpg', camera);
let s1 = new Scene('./assets/scenes/00001.jpg', camera);
let s2 = new Scene('./assets/scenes/00002.jpg', camera);
let s3 = new Scene('./assets/scenes/00003.jpg', camera);
let s4 = new Scene('./assets/scenes/00004.jpg', camera);
let s5 = new Scene('./assets/scenes/00005.jpg', camera);
let s6 = new Scene('./assets/scenes/00006.jpg', camera);
let s7 = new Scene('./assets/scenes/00007.jpg', camera);
let s8 = new Scene('./assets/scenes/00008.jpg', camera);
let s9 = new Scene('./assets/scenes/00009.jpg', camera);
let s10 = new Scene('./assets/scenes/00010.jpg', camera);
let s11 = new Scene('./assets/scenes/00011.jpg', camera);
let s12 = new Scene('./assets/scenes/00012.jpg', camera);
let s13 = new Scene('./assets/scenes/00013.jpg', camera);
let s14 = new Scene('./assets/scenes/00014.jpg', camera);
let s15 = new Scene('./assets/scenes/00015.jpg', camera);
let s16 = new Scene('./assets/scenes/00016.jpg', camera);
let s17 = new Scene('./assets/scenes/00017.jpg', camera);
let s18 = new Scene('./assets/scenes/00018.jpg', camera);
let s19 = new Scene('./assets/scenes/00019.jpg', camera);
let s20 = new Scene('./assets/scenes/00020.jpg', camera);
let s21 = new Scene('./assets/scenes/00021.jpg', camera);
let s22 = new Scene('./assets/scenes/00022.jpg', camera);
let s23 = new Scene('./assets/scenes/00023.jpg', camera);
let s24 = new Scene('./assets/scenes/00024.jpg', camera);
let s25 = new Scene('./assets/scenes/00025.jpg', camera);
let s26 = new Scene('./assets/scenes/00026.jpg', camera);
let s27 = new Scene('./assets/scenes/00027.jpg', camera);
let s28 = new Scene('./assets/scenes/00028.jpg', camera);
let s29 = new Scene('./assets/scenes/00029.jpg', camera);
let s30 = new Scene('./assets/scenes/00030.jpg', camera);
let s31 = new Scene('./assets/scenes/00031.jpg', camera);
let s32 = new Scene('./assets/scenes/00032.jpg', camera);
let s33 = new Scene('./assets/scenes/00033.jpg', camera);
let s34 = new Scene('./assets/scenes/00034.jpg', camera);
let s35 = new Scene('./assets/scenes/00035.jpg', camera);
let s36 = new Scene('./assets/scenes/00036.jpg', camera);
let s37 = new Scene('./assets/scenes/00037.jpg', camera);
let s38 = new Scene('./assets/scenes/00038.jpg', camera);
let s39 = new Scene('./assets/scenes/00039.jpg', camera);
let s40 = new Scene('./assets/scenes/00040.jpg', camera);
let s41 = new Scene('./assets/scenes/00041.jpg', camera);
let s42 = new Scene('./assets/scenes/00042.jpg', camera);
let s43 = new Scene('./assets/scenes/00043.jpg', camera);
let s44 = new Scene('./assets/scenes/00044.jpg', camera);

// 0
s0.addPoint({
  position: new THREE.Vector3( -48, -6, -7 ),
  name: 'estar',
  scene: s1
});
s0.addPoint({
  position: new THREE.Vector3( -26, -5, -42 ),
  name: 'corredor',
  scene: s4
});
s0.addPoint({
  position: new THREE.Vector3( -35, -8, 34 ),
  name: 'cozinha',
  scene: s8
});
s0.addPoint({
  position: new THREE.Vector3( 12, -9, 47 ),
  name: 'lavabo',
  scene: s9
});
//
// 1
s1.addPoint({
  position: new THREE.Vector3( 46, -7, 17 ),
  name: 'estar',
  scene: s0
});
s1.addPoint({
  position: new THREE.Vector3( 10, -9, 47 ),
  name: 'cozinha',
  scene: s8
});
s1.addPoint({
  position: new THREE.Vector3( -49, -2, 4 ),
  name: 'varanda',
  scene: s5
});
s1.addPoint({
  position: new THREE.Vector3( 4.5, -4.4, -49 ),
  name: 'corredor',
  scene: s4
});
//
// 2
s2.addPoint({
  position: new THREE.Vector3( 42.69, -9.434, -23.75 ),
  name: 'corredor',
  scene: s4
});
//
// 2
s3.addPoint({
  position: new THREE.Vector3( 46, -7, 17 ),
  name: 'corredor',
  scene: s4
});
//
// 4
s4.addPoint({
  position: new THREE.Vector3( 0.3889, -5.973, 49.56 ),
  name: 'estar',
  scene: s1
});
s4.addPoint({
  position: new THREE.Vector3( -43.83, -6.281, -22.61 ),
  name: 'quarto',
  scene: s2
});
s4.addPoint({
  position: new THREE.Vector3( -15.96, -3.449, -46.98 ),
  name: 'quarto',
  scene: s3
});
s4.addPoint({
  position: new THREE.Vector3( 18.28, -3.454, -46.28 ),
  name: 'suíte',
  scene: s7
});
s4.addPoint({
  position: new THREE.Vector3( -0.4930, -6.015, -49.55 ),
  name: 'banho',
  scene: s10
});
//
// 5
s5.addPoint({
  position: new THREE.Vector3( 48, -5, 9 ),
  name: 'estar',
  scene: s1
});
s5.addPoint({
  position: new THREE.Vector3( 40, -5, 28 ),
  name: 'cozinha',
  scene: s8
});
s5.addPoint({
  position: new THREE.Vector3( 36, -5, -33 ),
  name: 'corredor',
  scene: s4
});
//
// 6
s6.addPoint({
  position: new THREE.Vector3( -49.32, -1.383, -6.192 ),
  name: 'suíte',
  scene: s7
});
//
// 7
s7.addPoint({
  position: new THREE.Vector3( -49.32, -1.383, -6.192 ),
  name: 'corredor',
  scene: s4
});
s7.addPoint({
  position: new THREE.Vector3( -1.140, -12.40, 48.26 ),
  name: 'banho',
  scene: s6
});
//
// 8
s8.addPoint({
  position: new THREE.Vector3( 12, -5, -47 ),
  name: 'estar',
  scene: s0
});
s8.addPoint({
  position: new THREE.Vector3( 39.85, -5.408, -29.38 ),
  name: 'estar',
  scene: s1
});
s8.addPoint({
  position: new THREE.Vector3( -19, -5, -45 ),
  name: 'varanda',
  scene: s5
});
//
// 9
s9.addPoint({
  position: new THREE.Vector3( -5.800, -5.419, -49.11 ),
  name: 'estar',
  scene: s0
});
//
// 10
s10.addPoint({
  position: new THREE.Vector3( 8.753, -2.413, 49.02 ),
  name: 'corredor',
  scene: s4
});
//

s0.createScene(scene);
s0.appear();