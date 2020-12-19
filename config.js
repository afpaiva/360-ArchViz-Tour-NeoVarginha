var turnConsoleOn = false;
!document.querySelector("#sceneInput") ?
  turnConsoleOn = false :
  turnConsoleOn = true;

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
// apartamentos acima
// lazer
let s45 = new Scene('./assets/scenes/00045.jpg', camera);
let s46 = new Scene('./assets/scenes/00046.jpg', camera);
let s47 = new Scene('./assets/scenes/00047.jpg', camera);
let s48 = new Scene('./assets/scenes/00048.jpg', camera);
let s49 = new Scene('./assets/scenes/00049.jpg', camera);
let s50 = new Scene('./assets/scenes/00050.jpg', camera);
let s51 = new Scene('./assets/scenes/00051.jpg', camera);
let s52 = new Scene('./assets/scenes/00052.jpg', camera);
let s53 = new Scene('./assets/scenes/00053.jpg', camera);
let s54 = new Scene('./assets/scenes/00054.jpg', camera);
let s55 = new Scene('./assets/scenes/00055.jpg', camera);
let s56 = new Scene('./assets/scenes/00056.jpg', camera);
let s57 = new Scene('./assets/scenes/00057.jpg', camera);
let s58 = new Scene('./assets/scenes/00058.jpg', camera);
let s59 = new Scene('./assets/scenes/00059.jpg', camera);
let s60 = new Scene('./assets/scenes/00060.jpg', camera);
let s61 = new Scene('./assets/scenes/00061.jpg', camera);
// fim lazer
// lobby
let s62 = new Scene('./assets/scenes/00062.jpg', camera);
let s63 = new Scene('./assets/scenes/00063.jpg', camera);
let s64 = new Scene('./assets/scenes/00064.jpg', camera);
let s65 = new Scene('./assets/scenes/00065.jpg', camera);
let s66 = new Scene('./assets/scenes/00066.jpg', camera);
// fim lobby

// 0
s0.addPoint({
  position: new THREE.Vector3( -46.38, -5.822, 17.62 ),
  name: 'estar',
  scene: s1
});
s0.addPoint({
  position: new THREE.Vector3( -46.16, -4.514, -18.60 ),
  name: 'corredor',
  scene: s4
});
s0.addPoint({
  position: new THREE.Vector3( -26.21, -6.817, 41.99 ),
  name: 'cozinha',
  scene: s8
});
s0.addPoint({
  position: new THREE.Vector3( 20.99, -10.52, 44.10 ),
  name: 'lavabo',
  scene: s9
});
s0.addPoint({
  position: new THREE.Vector3( 48.09, -7.803, -11.20 ),
  name: 'elevador',
  scene: s44
});
//
// 1
s1.addPoint({
  position: new THREE.Vector3( 45.31, -4.676, -20.49 ),
  name: 'estar',
  scene: s0
});
s1.addPoint({
  position: new THREE.Vector3( 10, -9, 47 ),
  name: 'cozinha',
  scene: s8
});
s1.addPoint({
  position: new THREE.Vector3( -43.91, -3.316, 23.60 ),
  name: 'varanda',
  scene: s5
});
s1.addPoint({
  position: new THREE.Vector3( -31.71, -6.400, -38.08 ),
  name: 'corredor',
  scene: s4
});
s1.addPoint({
  position: new THREE.Vector3( 49.55, -4.519, -4.584 ),
  name: 'elevador',
  scene: s44
});
//
// 2
s2.addPoint({
  position: new THREE.Vector3( 39.00, -11.93, 28.88 ),
  name: 'corredor',
  scene: s4
});
//
// 3
s3.addPoint({
  position: new THREE.Vector3( 37.67, -8.483, -31.72 ),
  name: 'corredor',
  scene: s4
});
//
// 4
s4.addPoint({
  position: new THREE.Vector3( 44.82, 4.667, -21.56 ),
  name: 'estar',
  scene: s1
});
s4.addPoint({
  position: new THREE.Vector3( -47.03, -5.819, 15.85 ),
  name: 'quarto',
  scene: s2
});
s4.addPoint({
  position: new THREE.Vector3( -49.01, -4.766, 8.496 ),
  name: 'quarto',
  scene: s3
});
s4.addPoint({
  position: new THREE.Vector3( -48.92, -4.177, -9.169 ),
  name: 'suíte',
  scene: s7
});
s4.addPoint({
  position: new THREE.Vector3( -49.84, -3.426, -0.7383 ),
  name: 'banho',
  scene: s10
});
//
// 5
s5.addPoint({
  position: new THREE.Vector3( 39.13, -4.543, -30.71 ),
  name: 'estar',
  scene: s1
});
s5.addPoint({
  position: new THREE.Vector3( 49.67, -4.145, 3.621 ),
  name: 'cozinha',
  scene: s8
});
s5.addPoint({
  position: new THREE.Vector3( 8.048, -3.090, -49.23 ),
  name: 'corredor',
  scene: s4
});
//
// 6
s6.addPoint({
  position: new THREE.Vector3( 49.87, -3.038, -0.6541 ),
  name: 'suíte',
  scene: s7
});
s6.addPoint({
  position: new THREE.Vector3( -39.90, 1.967, -30.01 ),
  name: 'suíte',
  scene: s7
});
//
// 7
s7.addPoint({
  position: new THREE.Vector3( 26.09, 0.9751, 42.62 ),
  name: 'corredor',
  scene: s4
});
s7.addPoint({
  position: new THREE.Vector3( 42.77, 0.1087, -25.88 ),
  name: 'banho',
  scene: s6
});
//
// 8
s8.addPoint({
  position: new THREE.Vector3( 17.40, -5.373, -46.52 ),
  name: 'estar',
  scene: s0
});
s8.addPoint({
  position: new THREE.Vector3( -12.17, -3.943, -48.30 ),
  name: 'estar',
  scene: s1
});
s8.addPoint({
  position: new THREE.Vector3( -49.78, -3.275, -2.514 ),
  name: 'varanda',
  scene: s5
});
//
// 9
s9.addPoint({
  position: new THREE.Vector3( -44.54, 1.206, -22.64 ),
  name: 'estar',
  scene: s0
});
s9.addPoint({
  position: new THREE.Vector3( 48.12, -10.84, 8.030 ),
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
// 14
s14.addPoint({
  position: new THREE.Vector3( 44.99, -2.792, 21.55 ),
  name: 'elevador',
  scene: s44
});
s14.addPoint({
  position: new THREE.Vector3( -38.44, -0.5458, 31.92 ),
  name: 'cozinha',
  scene: s15
});
s14.addPoint({
  position: new THREE.Vector3( -28.91, -0.9252, 40.74 ),
  name: 'estar',
  scene: s21
});
s14.addPoint({
  position: new THREE.Vector3( -18.82, -6.443, -45.85 ),
  name: 'quarto',
  scene: s18
});
s14.addPoint({
  position: new THREE.Vector3( -3.076, -6.277, -49.47 ),
  name: 'suíte',
  scene: s19
});
s14.addPoint({
  position: new THREE.Vector3( -47.94, -2.472, 13.83 ),
  name: 'varanda',
  scene: s17
});
//
// 15
s15.addPoint({
  position: new THREE.Vector3( 34.55, -1.444, -36.05 ),
  name: 'estar',
  scene: s14
});
s15.addPoint({
  position: new THREE.Vector3( -47.90, -0.3430, -14.18 ),
  name: 'varanda',
  scene: s17
});
s15.addPoint({
  position: new THREE.Vector3( -39.96, -1.909, 29.93 ),
  name: 'cozinha',
  scene: s16
});
s15.addPoint({
  position: new THREE.Vector3( 24.74, -4.052, -43.20 ),
  name: 'estar',
  scene: s21
});
//
// 16
s16.addPoint({
  position: new THREE.Vector3( -13.52, -2.257, -48.04 ),
  name: 'varanda',
  scene: s17
});
s16.addPoint({
  position: new THREE.Vector3( 40.03, -1.919, -29.84 ),
  name: 'estar',
  scene: s15
});
s16.addPoint({
  position: new THREE.Vector3( 29.38, -1.001, -40.43 ),
  name: 'estar',
  scene: s21
});
//
// 17
s17.addPoint({
  position: new THREE.Vector3( 0.5582, -1.814, 49.93),
  name: 'cozinha',
  scene: s16
});
s17.addPoint({
  position: new THREE.Vector3( 48.52, -1.898, 11.85 ),
  name: 'estar',
  scene: s15
});
s17.addPoint({
  position: new THREE.Vector3( 47.49, -2.915, -15.32 ),
  name: 'estar',
  scene: s21
});
//
// 18
s18.addPoint({
  position: new THREE.Vector3( 49.96, -0.01162, 1.087 ),
  name: 'estar',
  scene: s21
});
//
// 19
s19.addPoint({
  position: new THREE.Vector3( 7.128, -11.01, -48.22 ),
  name: 'banho',
  scene: s22
});
s19.addPoint({
  position: new THREE.Vector3( 37.87, -5.154, 32.23 ),
  name: 'estar',
  scene: s21
});
//
// 20
s20.addPoint({
  position: new THREE.Vector3( 30.36, -2.587, -39.60 ),
  name: 'estar',
  scene: s21
});
//
// 21
s21.addPoint({
  position: new THREE.Vector3( 23.59, -3.281, 43.91 ),
  name: 'estar',
  scene: s14
});
s21.addPoint({
  position: new THREE.Vector3( 43.31, -4.960, -24.39 ),
  name: 'banho',
  scene: s20
});
s21.addPoint({
  position: new THREE.Vector3( -3.210, -1.554, -49.83 ),
  name: 'quarto',
  scene: s18
});
s21.addPoint({
  position: new THREE.Vector3( 29.71, -4.406, -39.93 ),
  name: 'suíte',
  scene: s19
});
s21.addPoint({
  position: new THREE.Vector3( -23.04, 0.6129, 44.34 ),
  name: 'estar',
  scene: s15
});
//
// 22
s22.addPoint({
  position: new THREE.Vector3( 9.901, -4.057, 48.79 ),
  name: 'suíte',
  scene: s19
});
s22.addPoint({
  position: new THREE.Vector3( -39.39, 1.915, -30.65 ),
  name: 'suíte',
  scene: s19
});
//
// 23
s23.addPoint({
  position: new THREE.Vector3( -35.90, -0.5029, -34.75 ),
  name: 'cozinha',
  scene: s26
});
s23.addPoint({
  position: new THREE.Vector3( -48.23, 2.854, 12.73 ),
  name: 'estar',
  scene: s24
});
s23.addPoint({
  position: new THREE.Vector3( 44.00, 0.3224, 23.67 ),
  name: 'elevador',
  scene: s44
});
//
// 24
s24.addPoint({
  position: new THREE.Vector3( -13.08, -2.310, -48.16 ),
  name: 'cozinha',
  scene: s26
});
s24.addPoint({
  position: new THREE.Vector3( -35.32, -2.627, -35.29 ),
  name: 'estar',
  scene: s25
});
s24.addPoint({
  position: new THREE.Vector3( 49.32, -2.327, -7.842 ),
  name: 'elevador',
  scene: s44
});
//
// 25
s25.addPoint({
  position: new THREE.Vector3( 30.92, -1.368, 39.20 ),
  name: 'estar',
  scene: s24
});
s25.addPoint({
  position: new THREE.Vector3( 48.75, -5.582, -9.373 ),
  name: 'cozinha',
  scene: s26
});
s25.addPoint({
  position: new THREE.Vector3( -26.01, -0.07016, -42.69 ),
  name: 'varanda',
  scene: s27
});
s25.addPoint({
  position: new THREE.Vector3( -40.61, -1.645, 29.08 ),
  name: 'banho',
  scene: s28
});
s25.addPoint({
  position: new THREE.Vector3( -49.40, -4.037, -6.166 ),
  name: 'quarto',
  scene: s29
});
s25.addPoint({
  position: new THREE.Vector3( -48.69, 1.528, 11.12 ),
  name: 'suite',
  scene: s30
});
//
// 26
s26.addPoint({
  position: new THREE.Vector3( 28.30, -2.226, 41.11 ),
  name: 'elevador',
  scene: s44
});
s26.addPoint({
  position: new THREE.Vector3( -5.626, -2.264, 49.58 ),
  name: 'estar',
  scene: s24
});
s26.addPoint({
  position: new THREE.Vector3( -49.80, -0.5459, 4.228 ),
  name: 'estar',
  scene: s25
});
s26.addPoint({
  position: new THREE.Vector3( -44.32, -0.4302, -23.10 ),
  name: 'varanda',
  scene: s27
});
//
// 27
s27.addPoint({
  position: new THREE.Vector3( 25.16, -0.8618, 43.15 ),
  name: 'estar',
  scene: s25
});
s27.addPoint({
  position: new THREE.Vector3( 40.51, 2.038, 29.20 ),
  name: 'cozinha',
  scene: s26
});
s27.addPoint({
  position: new THREE.Vector3( 2.401, 1.402, 49.87 ),
  name: 'banho',
  scene: s28
});
//
// 28
s28.addPoint({
  position: new THREE.Vector3( 38.19, -3.615, 32.02 ),
  name: 'estar',
  scene: s25
});
s28.addPoint({
  position: new THREE.Vector3( 8.905, -1.857, -49.12 ),
  name: 'estar',
  scene: s25
});
//
// 29
s29.addPoint({
  position: new THREE.Vector3( -14.80, -13.02, 45.94 ),
  name: 'estar',
  scene: s25
});
//
// 30
s30.addPoint({
  position: new THREE.Vector3( -49.82, -2.409, 2.898 ),
  name: 'suíte',
  scene: s31
});
s30.addPoint({
  position: new THREE.Vector3( -45.09, -3.539, -21.19 ),
  name: 'banho',
  scene: s32
});
s30.addPoint({
  position: new THREE.Vector3( 48.47, 2.753, -11.90 ),
  name: 'estar',
  scene: s25
});
//
// 31
s31.addPoint({
  position: new THREE.Vector3( 44.18, -2.487, -23.23 ),
  name: 'banho',
  scene: s32
});
s31.addPoint({
  position: new THREE.Vector3( 49.90, 3.022, -0.08066 ),
  name: 'suíte',
  scene: s30
});
//
// 32
s32.addPoint({
  position: new THREE.Vector3( 41.39, -10.59, -25.93 ),
  name: 'suíte',
  scene: s31
});
//
// 33
s33.addPoint({
  position: new THREE.Vector3( -48.98, -5.238, 8.422 ),
  name: 'estar',
  scene: s34
});
s33.addPoint({
  position: new THREE.Vector3( -48.48, -3.719, -11.60 ),
  name: 'lavabo',
  scene: s35
});
s33.addPoint({
  position: new THREE.Vector3( -1.709, -0.3882, -49.92 ),
  name: 'elevador',
  scene: s44
});
//
// 34
s34.addPoint({
  position: new THREE.Vector3( 7.281, -1.334, 49.41 ),
  name: 'cozinha',
  scene: s36
});
s34.addPoint({
  position: new THREE.Vector3( -12.57, 0.7272, 48.35),
  name: 'varanda',
  scene: s37
});
s34.addPoint({
  position: new THREE.Vector3( -40.23, -0.7290, 29.64 ),
  name: 'corredor',
  scene: s38
});
s34.addPoint({
  position: new THREE.Vector3( -16.14, -3.105, -47.18 ),
  name: 'lavabo',
  scene: s35
});
s34.addPoint({
  position: new THREE.Vector3( 37.47, -1.622, -33.01 ),
  name: 'elevador',
  scene: s44
});
//
// 35
s35.addPoint({
  position: new THREE.Vector3( 17.88, -3.741, 46.49 ),
  name: 'estar',
  scene: s34
});
//
// 36
s36.addPoint({
  position: new THREE.Vector3( -18.20, -1.889, -46.49 ),
  name: 'estar',
  scene: s34
});
s36.addPoint({
  position: new THREE.Vector3( -26.52, -0.1975, 42.36 ),
  name: 'varanda',
  scene: s37
});
s36.addPoint({
  position: new THREE.Vector3( -49.65, -2.463, -5.009 ),
  name: 'corredor',
  scene: s38
});
//
// 37
s37.addPoint({
  position: new THREE.Vector3( 29.57, -1.252, -40.27 ),
  name: 'cozinha',
  scene: s36
});
s37.addPoint({
  position: new THREE.Vector3( 5.123, -2.086, -49.65 ),
  name: 'estar',
  scene: s34
});
s37.addPoint({
  position: new THREE.Vector3( -18.20, -3.261, -46.41 ),
  name: 'corredor',
  scene: s38
});
//
// 38
s38.addPoint({
  position: new THREE.Vector3( -48.11, -5.055, 12.52 ),
  name: 'quarto',
  scene: s39
});
s38.addPoint({
  position: new THREE.Vector3( -49.39, -0.3520, 7.704 ),
  name: 'quarto',
  scene: s40
});
s38.addPoint({
  position: new THREE.Vector3( -49.73, -4.328, -1.710 ),
  name: 'banho',
  scene: s41
});
s38.addPoint({
  position: new THREE.Vector3( -48.99, -3.298, -9.192 ),
  name: 'suíte',
  scene: s42
});
s38.addPoint({
  position: new THREE.Vector3( 27.45, -1.246, -41.70 ),
  name: 'estar',
  scene: s34
});
//
// 39
s39.addPoint({
  position: new THREE.Vector3( 45.55, 4.298, 20.06 ),
  name: 'corredor',
  scene: s38
});
//
// 40
s40.addPoint({
  position: new THREE.Vector3( 32.41, -12.92, -35.77 ),
  name: 'corredor',
  scene: s38
});
//
// 41
s41.addPoint({
  position: new THREE.Vector3( 7.440, -1.994, 49.38 ),
  name: 'corredor',
  scene: s38
});
//
// 42
s42.addPoint({
  position: new THREE.Vector3( 31.72, -8.030, 37.78 ),
  name: 'corredor',
  scene: s38
});
s42.addPoint({
  position: new THREE.Vector3( 26.57, -2.558, -42.26 ),
  name: 'banho',
  scene: s43
});
//
// 43
s43.addPoint({
  position: new THREE.Vector3( -41.52, -1.513, -27.72 ),
  name: 'suíte',
  scene: s42
});
s43.addPoint({
  position: new THREE.Vector3( 18.16, -12.10, 44.95 ),
  name: 'suíte',
  scene: s42
});
//
// 44 - ELEVADOR

s44.addPoint({
  position: new THREE.Vector3( -37.60, -19.89, -26.21),
  name: 'Área de Lazer',
  scene: s45
});
s44.addPoint({
  position: new THREE.Vector3( -39.49, -13.41, -27.52),
  name: 'Apartamento 76,03m²',
  scene: s23
});
s44.addPoint({
  position: new THREE.Vector3( -38.51, -16.84, -27.01),
  name: 'Apartamento 78,40m²',
  scene: s14
});
s44.addPoint({
  position: new THREE.Vector3( -31.72, -13.79, -36.06),
  name: 'Apartamento 100,10m²',
  scene: s0
});
s44.addPoint({
  position: new THREE.Vector3( -31.08, -17.06, -35.20),
  name: 'Apartamento 103,08m²',
  scene: s33
});
s44.addPoint({
  position: new THREE.Vector3( -30.28, -20.06, -34.32),
  name: 'Lobby',
  scene: s62
});
s44.addPoint({
  position: new THREE.Vector3( 38.56, -19.35, 25.17),
  name: 'Área de Lazer',
  scene: s45
});
s44.addPoint({
  position: new THREE.Vector3( 40.35, -13.21, 26.33),
  name: 'Apartamento 76,03m²',
  scene: s23
});
s44.addPoint({
  position: new THREE.Vector3( 39.49, -16.39, 25.83),
  name: 'Apartamento 78,40m²',
  scene: s14
});
s44.addPoint({
  position: new THREE.Vector3( 33.17, -13.46, 34.85),
  name: 'Apartamento 100,10m²',
  scene: s0
});
s44.addPoint({
  position: new THREE.Vector3( 32.38, -16.71, 34.17),
  name: 'Apartamento 103,08m²',
  scene: s33
});
s44.addPoint({
  position: new THREE.Vector3( 31.65, -19.73, 33.25),
  name: 'Lobby',
  scene: s62
});
// fim apartamentos

// area de lazer
// 45
s45.addPoint({
  position: new THREE.Vector3( -0.3318, 0.5150, 49.94),
  name: 'hall',
  scene: s46
});
s45.addPoint({
  position: new THREE.Vector3( 9.209, 0.6380, -49.06),
  name: 'piscina',
  scene: s54
});
s45.addPoint({
  position: new THREE.Vector3( -49.68, -3.207, -1.646),
  name: 'praça',
  scene: s51
});
s45.addPoint({
  position: new THREE.Vector3( 49.70, -1.690, 2.253),
  name: 'elevador',
  scene: s44
});
// 46
s46.addPoint({
  position: new THREE.Vector3( 0.7778, 0.08921, -49.92),
  name: 'hall',
  scene: s45
});
s46.addPoint({
  position: new THREE.Vector3( 19.75, 1.309, 45.79),
  name: 'espaço teen',
  scene: s61
});
s46.addPoint({
  position: new THREE.Vector3( -16.12, 0.08106, 47.10),
  name: 'praça',
  scene: s47
});
s46.addPoint({
  position: new THREE.Vector3( -49.74, -1.327, -1.942),
  name: 'praça',
  scene: s50
});
s46.addPoint({ //elevador
  position: new THREE.Vector3( 49.71, -3.430, 1.276),
  name: 'elevador',
  scene: s44
});
// 47
s47.addPoint({
  position: new THREE.Vector3( 31.80, -1.654, -38.17),
  name: 'hall',
  scene: s46
});
s47.addPoint({
  position: new THREE.Vector3( -26.32, 0.6246, 42.32),
  name: 'academia',
  scene: s48
});
s47.addPoint({
  position: new THREE.Vector3( 47.18, -0.9354, 15.74),
  name: 'espaço teen',
  scene: s61
});
s47.addPoint({
  position: new THREE.Vector3( 49.70, 0.1251, -2.943),
  name: 'espaço gourmet',
  scene: s57
});
s47.addPoint({
  position: new THREE.Vector3( -44.45, -1.703, -22.23),
  name: 'praça',
  scene: s50
});
// 48
s48.addPoint({
  position: new THREE.Vector3( 8.100, -1.990, -49.10),
  name: 'praça',
  scene: s47
});
s48.addPoint({
  position: new THREE.Vector3( -11.69, -6.282, -47.99),
  name: 'praça',
  scene: s50
});
s48.addPoint({
  position: new THREE.Vector3( -8.873, -0.6907, 49.09),
  name: 'academia',
  scene: s49
});
// 49
s49.addPoint({
  position: new THREE.Vector3( 27.44, -0.1830, -41.74),
  name: 'academia',
  scene: s48
});
s49.addPoint({
  position: new THREE.Vector3( 10.40, -0.4101, -48.82),
  name: 'praça',
  scene: s50
});
// 50
s50.addPoint({
  position: new THREE.Vector3( 14.55, -1.982, 47.48),
  name: 'academia',
  scene: s48
});
s50.addPoint({
  position: new THREE.Vector3( 41.11, 2.444, 28.15),
  name: 'praça',
  scene: s47
});
s50.addPoint({
  position: new THREE.Vector3( 39.14, -2.670, -30.53),
  name: 'hall',
  scene: s46
});
s50.addPoint({
  position: new THREE.Vector3( 0.7132, -0.1517, -49.92),
  name: 'praça',
  scene: s51
});
// 51
s51.addPoint({
  position: new THREE.Vector3( 38.07, 1.560, -31.93),
  name: 'hall',
  scene: s45
});
s51.addPoint({
  position: new THREE.Vector3( 1.544, -0.3418, 49.83),
  name: 'praça',
  scene: s50
});
s51.addPoint({
  position: new THREE.Vector3( 5.295, -1.071, -49.43),
  name: 'piscina',
  scene: s52
});
// 52
s52.addPoint({
  position: new THREE.Vector3( 37.16, -1.562, -33.04),
  name: 'piscina',
  scene: s53
});
s52.addPoint({
  position: new THREE.Vector3( 49.72, -1.166, -2.236),
  name: 'piscina',
  scene: s54
});
s52.addPoint({
  position: new THREE.Vector3( 1.721, -1.035, 49.78),
  name: 'praça',
  scene: s51
});
// 53
s53.addPoint({
  position: new THREE.Vector3( 49.91, -0.9210, -0.4735),
  name: 'piscina',
  scene: s55
});
s53.addPoint({
  position: new THREE.Vector3( 14.03, -0.2580, 47.73),
  name: 'hall',
  scene: s45
});
s53.addPoint({
  position: new THREE.Vector3( -26.72, 3.773, 41.93),
  name: 'piscina',
  scene: s52
});
// 54
s54.addPoint({
  position: new THREE.Vector3( 45.59, -0.5375, -20.21),
  name: 'piscina',
  scene: s55
});
s54.addPoint({
  position: new THREE.Vector3( 43.60, 0.01979, 23.98),
  name: 'espaço gourmet',
  scene: s56
});
s54.addPoint({
  position: new THREE.Vector3( -21.12, 1.493, 45.05),
  name: 'hall',
  scene: s45
});
s54.addPoint({
  position: new THREE.Vector3( -49.73, -0.9753, 2.222),
  name: 'piscina',
  scene: s52
});
// 55
s55.addPoint({
  position: new THREE.Vector3( -49.55, -0.4552, 4.379),
  name: 'piscina',
  scene: s54
});
s55.addPoint({
  position: new THREE.Vector3( -47.55, -0.4369, 14.59),
  name: 'piscina',
  scene: s52
});
s55.addPoint({
  position: new THREE.Vector3( 10.38, 1.872, 48.75),
  name: 'espaço gourmet',
  scene: s56
});
// 56
s56.addPoint({
  position: new THREE.Vector3( 0.9177, 0.5258, 49.88),
  name: 'espaço gourmet',
  scene: s57
});
s56.addPoint({
  position: new THREE.Vector3( -5.428, -0.6274, -49.43),
  name: 'piscina',
  scene: s55
});
// 57
s57.addPoint({
  position: new THREE.Vector3( -0.7086, -0.5043, -49.91),
  name: 'espaço gourmet',
  scene: s56
});
s57.addPoint({
  position: new THREE.Vector3( 27.14, -0.7731, 41.87),
  name: 'espaço kids',
  scene: s58
});
s57.addPoint({
  position: new THREE.Vector3( -49.42, -0.8211, 5.513),
  name: 'praça',
  scene: s47
});
s57.addPoint({
  position: new THREE.Vector3( -36.13, 0.1655, 34.39),
  name: 'espaço teen',
  scene: s61
});
// 58
s58.addPoint({
  position: new THREE.Vector3( -14.19, -0.8499, -47.65),
  name: 'espaço gourmet',
  scene: s57
});
s58.addPoint({
  position: new THREE.Vector3( -30.90, 0.1369, 39.01),
  name: 'espaço teen',
  scene: s59
});
// 59
s59.addPoint({
  position: new THREE.Vector3( 32.36, -1.139, -37.74),
  name: 'espaço kids',
  scene: s58
});
s59.addPoint({
  position: new THREE.Vector3( -44.24, -1.163, 22.67),
  name: 'espaço teen',
  scene: s60
});
s59.addPoint({
  position: new THREE.Vector3( -33.63, 0.9866, -36.71),
  name: 'espaço teen',
  scene: s61
});
// 60
s60.addPoint({
  position: new THREE.Vector3( -2.048, 1.982, -49.70),
  name: 'espaço teen',
  scene: s61
});
s60.addPoint({
  position: new THREE.Vector3( 46.45, 0.9340, -18.14),
  name: 'espaço teen',
  scene: s59
});
// 61
s61.addPoint({
  position: new THREE.Vector3( 43.71, -0.2203, -23.76),
  name: 'espaço gourmet',
  scene: s57
});
s61.addPoint({
  position: new THREE.Vector3( 49.91, -0.8556, 0.4747),
  name: 'espaço kids',
  scene: s58
});
s61.addPoint({
  position: new THREE.Vector3( 43.12, 0.04115, 24.89),
  name: 'espaço teen',
  scene: s59
});
s61.addPoint({
  position: new THREE.Vector3( 14.63, -1.784, 47.47),
  name: 'espaço teen',
  scene: s60
});
s61.addPoint({
  position: new THREE.Vector3( -29.85, 0.6694, -39.83),
  name: 'praça',
  scene: s47
});
s61.addPoint({
  position: new THREE.Vector3( -2.103, 0.2922, -49.78),
  name: 'hall',
  scene: s46
});
//
// fim area lazer
// lobby
s62.addPoint({
  position: new THREE.Vector3( 3.891, -0.3893, -49.84),
  name: 'hall elevadores',
  scene: s66
});
s62.addPoint({
  position: new THREE.Vector3( 11.97, 0.2850, 48.53),
  name: 'acesso',
  scene: s63
});
// 63
s63.addPoint({
  position: new THREE.Vector3( 21.01, -2.108, -45.27),
  name: 'lobby',
  scene: s62
});
s63.addPoint({
  position: new THREE.Vector3( 49.92, 0.1116, -1.903),
  name: 'acesso',
  scene: s64
});
// 64
s64.addPoint({
  position: new THREE.Vector3( -49.96, -0.1793, -0.9666),
  name: 'acesso',
  scene: s63
});
s64.addPoint({
  position: new THREE.Vector3( 16.41, 1.811, -47.15),
  name: 'espaço pet',
  scene: s65
});
// 65
s65.addPoint({
  position: new THREE.Vector3( -36.01, -0.2699, -34.64),
  name: 'acesso',
  scene: s64
});
// 66
s66.addPoint({
  position: new THREE.Vector3( 44.67, -5.616, -21.67),
  name: 'elevador',
  scene: s44
});
s66.addPoint({
  position: new THREE.Vector3( -9.582, -6.088, -48.64),
  name: 'elevador',
  scene: s44
});
s66.addPoint({
  position: new THREE.Vector3( -46.35, -4.727, -18.03),
  name: 'elevador',
  scene: s44
});
// fim lobby


// To create a link to a scene
const queryString = window.location.search;
if (queryString === "?ap1"){
  s0.createScene(scene);
  s0.appear();
}
else if (queryString === "?ap2"){
  s33.createScene(scene);
  s33.appear();
}
else if (queryString === "?ap3"){
  s14.createScene(scene);
  s14.appear();
}
else if (queryString === "?ap4"){
  s23.createScene(scene);
  s23.appear();
}
else if (queryString === "?lazer"){
  s45.createScene(scene);
  s45.appear();
}
else if (queryString === "?lobby"){
  s64.createScene(scene);
  s64.appear();
}
else if (queryString === "?elevador"){
  s44.createScene(scene);
  s44.appear();
}
else
{
  window.location.href = "fac.html";
}

function sceneJump(){
  let inputValue = document.getElementById("sceneInput").value;
  let arrScenes = [
     s0,  s1,  s2,  s3,  s4,  s5,  s6,  s7,  s8,  s9,
    s10, s11, s12, s13, s14, s15, s16, s17, s18, s19,
    s20, s21, s22, s23, s24, s25, s26, s27, s28, s29,
    s30, s31, s32, s33, s34, s35, s36, s37, s38, s39,
    s40, s41, s42, s43, s44, s45, s46, s47, s48, s49,
    s50, s51, s52, s53, s54, s55, s56, s57, s58, s59,
    s60, s61, s62, s63, s64, s65, s66
  ];
  
  for (let i=0; i<arrScenes.length; i++){

    arrScenes[i].sprites.forEach((sprite)=>{
      TweenLite.to(sprite.scale, 1, {
          x: 0,
          y: 0,
          z: 0,
          onComplete: () => {
            arrScenes[i].scene.remove(sprite);
          }
      });
    });
    
    if (inputValue == i){
      arrScenes[inputValue].createScene(scene);
      arrScenes[inputValue].appear();
    }
  }
  document.getElementById("sceneInput").value = '';
}

