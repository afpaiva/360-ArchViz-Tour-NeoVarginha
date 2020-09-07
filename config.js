const turnConsoleOn = false;

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
  position: new THREE.Vector3( -31.30, -4.618, -38.39 ),
  name: 'corredor',
  scene: s4
});
s0.addPoint({
  position: new THREE.Vector3( -43.04, -6.941, 23.89 ),
  name: 'cozinha',
  scene: s8
});
s0.addPoint({
  position: new THREE.Vector3( -5.418, -9.342, 48.57 ),
  name: 'lavabo',
  scene: s9
});
s0.addPoint({
  position: new THREE.Vector3( 43.01, -5.026, 24.55 ),
  name: 'hall',
  scene: s11
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
// 3
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
  position: new THREE.Vector3( -15.69, -6.641, -46.72 ),
  name: 'quarto',
  scene: s2
});
s4.addPoint({
  position: new THREE.Vector3( -8.461, -5.023, -48.91 ),
  name: 'quarto',
  scene: s3
});
s4.addPoint({
  position: new THREE.Vector3( 11.95, -4.895, -48.12 ),
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
  position: new THREE.Vector3( 10.53, -0.4127, -48.78 ),
  name: 'suíte',
  scene: s7
});
s6.addPoint({
  position: new THREE.Vector3( 10.53, -0.4127, -48.78 ),
  name: 'banho',
  scene: s10
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
// 11
s11.addPoint({
  position: new THREE.Vector3( 8.753, -2.413, 49.02 ),
  name: 'hall',
  scene: s12
});
s11.addPoint({
  position: new THREE.Vector3( 37.30, -5.393, 32.49 ),
  name: 'elevador',
  scene: s44
});
s11.addPoint({
  position: new THREE.Vector3( -0.8217, -5.965, -49.52 ),
  name: 'apartamento',
  scene: s33
});
s11.addPoint({
  position: new THREE.Vector3( -36.63, -4.234, -33.48 ),
  name: 'apartamento',
  scene: s0
});
//
// 12
s12.addPoint({
  position: new THREE.Vector3( -0.8501, -3.158, 49.76 ),
  name: 'apartamento',
  scene: s23
});
s12.addPoint({
  position: new THREE.Vector3( 49.70, -3.650, -1.253 ),
  name: 'hall',
  scene: s13
});
s12.addPoint({
  position: new THREE.Vector3( -11.06, -1.410, -48.57 ),
  name: 'hall',
  scene: s11
});
s12.addPoint({
  position: new THREE.Vector3( 23.90, -5.158, -43.33 ),
  name: 'elevador',
  scene: s44
});
s12.addPoint({
  position: new THREE.Vector3( -0.3628, -2.464, -49.84 ),
  name: 'apartamento',
  scene: s33
});
s12.addPoint({
  position: new THREE.Vector3( -4.683, -1.632, -49.46 ),
  name: 'apartamento',
  scene: s0
});
//
// 13
s13.addPoint({
  position: new THREE.Vector3( 48.71, -9.597, 3.594 ),
  name: 'apartamento',
  scene: s14
});
s13.addPoint({
  position: new THREE.Vector3( -49.68, -3.631, -1.423 ),
  name: 'hall',
  scene: s12
});
s13.addPoint({
  position: new THREE.Vector3( -47.20, -4.286, 15.10 ),
  name: 'apartamento',
  scene: s23
});
//
// 14
s14.addPoint({
  position: new THREE.Vector3( -46.27, -6.096, 17.46 ),
  name: 'hall',
  scene: s13
});
s14.addPoint({
  position: new THREE.Vector3( 12.75, -5.154, -47.84 ),
  name: 'cozinha',
  scene: s15
});
s14.addPoint({
  position: new THREE.Vector3( 46.97, -3.541, 15.96 ),
  name: 'estar',
  scene: s21
});
s14.addPoint({
  position: new THREE.Vector3( 39.39, -3.730, 30.15 ),
  name: 'quarto',
  scene: s18
});
s14.addPoint({
  position: new THREE.Vector3( 28.05, -5.539, 40.91 ),
  name: 'suíte',
  scene: s19
});
s14.addPoint({
  position: new THREE.Vector3( 35.11, -6.219, -34.97 ),
  name: 'varanda',
  scene: s17
});
//
// 15
s15.addPoint({
  position: new THREE.Vector3( -11.91, -5.019, 48.12 ),
  name: 'estar',
  scene: s14
});
s15.addPoint({
  position: new THREE.Vector3( 49.59, -0.8811, -3.725 ),
  name: 'varanda',
  scene: s17
});
s15.addPoint({
  position: new THREE.Vector3( 22.71, -4.476, -44.03 ),
  name: 'cozinha',
  scene: s16
});
s15.addPoint({
  position: new THREE.Vector3( 8.379, -3.192, 49.02 ),
  name: 'estar',
  scene: s21
});
//
// 16
s16.addPoint({
  position: new THREE.Vector3( 25.34, -1.852, 42.77 ),
  name: 'varanda',
  scene: s17
});
s16.addPoint({
  position: new THREE.Vector3( -20.93, -3.886, 45.02 ),
  name: 'estar',
  scene: s15
});
s16.addPoint({
  position: new THREE.Vector3( 0.3472, -1.495, 49.89 ),
  name: 'estar',
  scene: s21
});
//
// 17
s17.addPoint({
  position: new THREE.Vector3( -37.69, -4.576, -32.16 ),
  name: 'cozinha',
  scene: s16
});
s17.addPoint({
  position: new THREE.Vector3( -49.03, -3.342, 8.135 ),
  name: 'estar',
  scene: s15
});
s17.addPoint({
  position: new THREE.Vector3( -30.31, -3.151, 39.30 ),
  name: 'estar',
  scene: s21
});
//
// 18
s18.addPoint({
  position: new THREE.Vector3( -41.42, -2.979, 27.73 ),
  name: 'suíte',
  scene: s19
});
s18.addPoint({
  position: new THREE.Vector3( -48.88, -3.425, 9.686 ),
  name: 'banho',
  scene: s20
});
s18.addPoint({
  position: new THREE.Vector3( -49.51, -2.909, -3.483 ),
  name: 'estar',
  scene: s21
});
//
// 19
s19.addPoint({
  position: new THREE.Vector3( -34.78, -2.579, 35.66 ),
  name: 'banho',
  scene: s22
});
s19.addPoint({
  position: new THREE.Vector3( -33.83, -3.289, -36.40 ),
  name: 'banho',
  scene: s20
});
s19.addPoint({
  position: new THREE.Vector3( -14.16, -3.809, -47.51 ),
  name: 'estar',
  scene: s21
});
//
// 20
s20.addPoint({
  position: new THREE.Vector3( 49.41, -1.787, -5.134 ),
  name: 'quarto',
  scene: s18
});
s20.addPoint({
  position: new THREE.Vector3( 47.14, -3.540, 15.43 ),
  name: 'quarto',
  scene: s19
});
s20.addPoint({
  position: new THREE.Vector3( 39.98, -3.535, -29.45 ),
  name: 'estar',
  scene: s21
});
//
// 21
s21.addPoint({
  position: new THREE.Vector3( -49.60, -0.9308, 3.603 ),
  name: 'estar',
  scene: s14
});
s21.addPoint({
  position: new THREE.Vector3( -21.96, -5.645, 44.29 ),
  name: 'banho',
  scene: s20
});
s21.addPoint({
  position: new THREE.Vector3( 32.04, -4.198, 37.81 ),
  name: 'quarto',
  scene: s18
});
s21.addPoint({
  position: new THREE.Vector3( 1.970, -3.690, 49.62 ),
  name: 'suíte',
  scene: s19
});
s21.addPoint({
  position: new THREE.Vector3( -9.473, -4.132, -48.86 ),
  name: 'estar',
  scene: s15
});
//
// 22
s22.addPoint({
  position: new THREE.Vector3( 47.73, -1.810, -13.76 ),
  name: 'suíte',
  scene: s19
});
//
// 23
s23.addPoint({
  position: new THREE.Vector3( 12.52, -2.412, 48.08 ),
  name: 'cozinha',
  scene: s26
});
s23.addPoint({
  position: new THREE.Vector3( 49.21, -4.485, 5.810 ),
  name: 'estar',
  scene: s24
});
s23.addPoint({
  position: new THREE.Vector3( -10.00, -2.033, -48.86 ),
  name: 'hall',
  scene: s12
});
//
// 24
s24.addPoint({
  position: new THREE.Vector3( -13.83, -3.885, 47.60 ),
  name: 'cozinha',
  scene: s26
});
s24.addPoint({
  position: new THREE.Vector3( 15.53, -1.759, 47.20 ),
  name: 'estar',
  scene: s26
});
s24.addPoint({
  position: new THREE.Vector3( -49.25, -1.208, -7.019 ),
  name: 'hall',
  scene: s23
});
//
// 25
s25.addPoint({
  position: new THREE.Vector3( -3.454, -0.5842, -49.63 ),
  name: 'estar',
  scene: s24
});
s25.addPoint({
  position: new THREE.Vector3( -46.77, -2.341, -16.85 ),
  name: 'cozinha',
  scene: s26
});
s25.addPoint({
  position: new THREE.Vector3( 10.24, -0.8396, 48.85 ),
  name: 'varanda',
  scene: s27
});
s25.addPoint({
  position: new THREE.Vector3( 47.60, -1.312, -14.27 ),
  name: 'banho',
  scene: s28
});
s25.addPoint({
  position: new THREE.Vector3( 46.41, -2.522, 18.01 ),
  name: 'quarto',
  scene: s29
});
s25.addPoint({
  position: new THREE.Vector3( 49.79, -2.291, 1.031 ),
  name: 'suite',
  scene: s30
});
//
// 26
s26.addPoint({
  position: new THREE.Vector3( -2.885, -3.529, -49.54 ),
  name: 'hall',
  scene: s23
});
s26.addPoint({
  position: new THREE.Vector3( 28.68, -3.189, -40.63 ),
  name: 'estar',
  scene: s24
});
s26.addPoint({
  position: new THREE.Vector3( 48.56, -3.431, 10.75 ),
  name: 'estar',
  scene: s25
});
s26.addPoint({
  position: new THREE.Vector3( 30.50, -2.192, 39.20 ),
  name: 'varanda',
  scene: s27
});
//
// 27
s27.addPoint({
  position: new THREE.Vector3( 0.4774, -2.282, -49.84 ),
  name: 'estar',
  scene: s25
});
s27.addPoint({
  position: new THREE.Vector3( -18.55, -3.793, -46.18 ),
  name: 'cozinha',
  scene: s26
});
s27.addPoint({
  position: new THREE.Vector3( 26.86, -3.361, -41.88 ),
  name: 'banho',
  scene: s28
});
//
// 28
s28.addPoint({
  position: new THREE.Vector3( -42.19, -3.923, 26.22 ),
  name: 'estar',
  scene: s25
});
s28.addPoint({
  position: new THREE.Vector3( -27.46, -0.5602, 41.71 ),
  name: 'varanda',
  scene: s27
});
s28.addPoint({
  position: new THREE.Vector3( 3.749, -5.378, 49.32 ),
  name: 'quarto',
  scene: s29
});
s28.addPoint({
  position: new THREE.Vector3( 41.50, -3.349, 27.56 ),
  name: 'suíte',
  scene: s30
});
//
// 29
s29.addPoint({
  position: new THREE.Vector3( 2.645, -1.795, -49.65 ),
  name: 'banho',
  scene: s28
});
s29.addPoint({
  position: new THREE.Vector3( 43.64, -3.872, -23.51 ),
  name: 'suíte',
  scene: s30
});
s29.addPoint({
  position: new THREE.Vector3( -34.19, -2.241, -36.17 ),
  name: 'estar',
  scene: s25
});
//
// 30
s30.addPoint({
  position: new THREE.Vector3( 49.49, -3.195, -3.624 ),
  name: 'suíte',
  scene: s31
});
s30.addPoint({
  position: new THREE.Vector3( 46.03, -5.864, 18.35 ),
  name: 'banho',
  scene: s32
});
s30.addPoint({
  position: new THREE.Vector3( -47.52, -4.778, 13.95 ),
  name: 'quarto',
  scene: s29
});
s30.addPoint({
  position: new THREE.Vector3( -46.64, -5.926, -16.31 ),
  name: 'banho',
  scene: s28
});
s30.addPoint({
  position: new THREE.Vector3( -49.82, -2.842, -0.4370 ),
  name: 'estar',
  scene: s25
});
//
// 31
s31.addPoint({
  position: new THREE.Vector3( -42.50, -3.665, 25.67 ),
  name: 'banho',
  scene: s32
});
s31.addPoint({
  position: new THREE.Vector3( -49.75, -4.165, -0.4896 ),
  name: 'suíte',
  scene: s30
});
//
// 32
s32.addPoint({
  position: new THREE.Vector3( -24.87, -2.052, -43.01 ),
  name: 'estar',
  scene: s30
});
s32.addPoint({
  position: new THREE.Vector3( 34.78, 1.979, -35.71 ),
  name: 'suíte',
  scene: s31
});
//
// 33
s33.addPoint({
  position: new THREE.Vector3( 47.22, -2.657, -15.31 ),
  name: 'estar',
  scene: s34
});
s33.addPoint({
  position: new THREE.Vector3( 49.67, -4.219, 1.287 ),
  name: 'lavabo',
  scene: s35
});
s33.addPoint({
  position: new THREE.Vector3( 14.61, -0.2986, 47.55 ),
  name: 'elevador',
  scene: s44
});
s33.addPoint({
  position: new THREE.Vector3( 1.599, -1.608, 49.76 ),
  name: 'hall',
  scene: s11
});
s33.addPoint({
  position: new THREE.Vector3( -16.42, -5.639, 46.65 ),
  name: 'apartamento',
  scene: s0
});
//
// 34
s34.addPoint({
  position: new THREE.Vector3( -13.87, -2.980, -47.64 ),
  name: 'cozinha',
  scene: s36
});
s34.addPoint({
  position: new THREE.Vector3( 5.466, -1.694, -49.38 ),
  name: 'varanda',
  scene: s37
});
s34.addPoint({
  position: new THREE.Vector3( 33.62, -3.545, -36.56 ),
  name: 'corredor',
  scene: s38
});
s34.addPoint({
  position: new THREE.Vector3( 23.69, -7.370, 43.07 ),
  name: 'lavabo',
  scene: s35
});
s34.addPoint({
  position: new THREE.Vector3( -27.56, -2.814, 41.53 ),
  name: 'hall',
  scene: s33
});
//
// 35
s35.addPoint({
  position: new THREE.Vector3( -49.64, -3.254, -2.013 ),
  name: 'hall',
  scene: s33
});
s35.addPoint({
  position: new THREE.Vector3( -36.31, -0.6844, -34.14 ),
  name: 'estar',
  scene: s34
});
//
// 36
s36.addPoint({
  position: new THREE.Vector3( 15.99, -2.885, 47.00 ),
  name: 'estar',
  scene: s34
});
s36.addPoint({
  position: new THREE.Vector3( 27.41, -5.840, -41.34 ),
  name: 'varanda',
  scene: s37
});
s36.addPoint({
  position: new THREE.Vector3( 49.08, -7.124, -3.599 ),
  name: 'corredor',
  scene: s38
});
//
// 37
s37.addPoint({
  position: new THREE.Vector3( -22.68, -6.939, 43.69 ),
  name: 'cozinha',
  scene: s36
});
s37.addPoint({
  position: new THREE.Vector3( -8.546, -2.435, 49.04 ),
  name: 'estar',
  scene: s34
});
s37.addPoint({
  position: new THREE.Vector3( 25.93, -4.273, 42.33 ),
  name: 'corredor',
  scene: s38
});
//
// 38
s38.addPoint({
  position: new THREE.Vector3( 47.34, -5.210, -14.36 ),
  name: 'quarto',
  scene: s39
});
s38.addPoint({
  position: new THREE.Vector3( 48.94, -3.384, -9.106 ),
  name: 'quarto',
  scene: s40
});
s38.addPoint({
  position: new THREE.Vector3( 49.80, -3.663, 0.2385 ),
  name: 'banho',
  scene: s41
});
s38.addPoint({
  position: new THREE.Vector3( 49.04, -3.830, 7.848 ),
  name: 'suíte',
  scene: s42
});
s38.addPoint({
  position: new THREE.Vector3( -35.33, -2.076, 35.22 ),
  name: 'estar',
  scene: s34
});
s38.addPoint({
  position: new THREE.Vector3( -49.49, -5.446, 1.932 ),
  name: 'cozinha',
  scene: s36
});
s38.addPoint({
  position: new THREE.Vector3( -32.95, -2.915, -37.14 ),
  name: 'varanda',
  scene: s37
});
//
// 39
s39.addPoint({
  position: new THREE.Vector3( 30.64, -2.626, 39.06 ),
  name: 'quarto',
  scene: s42
});
s39.addPoint({
  position: new THREE.Vector3( -29.94, -2.909, 39.61 ),
  name: 'corredor',
  scene: s38
});
//
// 40
s40.addPoint({
  position: new THREE.Vector3( 0.5331, -5.787, 49.58 ),
  name: 'quarto',
  scene: s42
});
s40.addPoint({
  position: new THREE.Vector3( -17.58, -0.6619, 46.63 ),
  name: 'corredor',
  scene: s38
});
s40.addPoint({
  position: new THREE.Vector3( 17.08, 0.1949, 46.81 ),
  name: 'banho',
  scene: s41
});
//
// 41
s41.addPoint({
  position: new THREE.Vector3( -49.91, -0.5545, 0.5937 ),
  name: 'corredor',
  scene: s38
});
s41.addPoint({
  position: new THREE.Vector3( -34.11, -0.2665, 36.36 ),
  name: 'suíte',
  scene: s42
});
s41.addPoint({
  position: new THREE.Vector3( -47.64, -2.316, -13.98 ),
  name: 'quarto',
  scene: s39
});
s41.addPoint({
  position: new THREE.Vector3( -38.53, -6.115, -30.83 ),
  name: 'quarto',
  scene: s40
});
//
// 42
s42.addPoint({
  position: new THREE.Vector3( -9.948, -3.404, -48.81 ),
  name: 'corredor',
  scene: s38
});
s42.addPoint({
  position: new THREE.Vector3( 17.85, -3.092, -46.42 ),
  name: 'banho',
  scene: s41
});
s42.addPoint({
  position: new THREE.Vector3( -49.41, -4.204, -3.930 ),
  name: 'banho',
  scene: s43
});
s42.addPoint({
  position: new THREE.Vector3( 4.059, -3.009, -49.45 ),
  name: 'quarto',
  scene: s40
});
//
// 43
s43.addPoint({
  position: new THREE.Vector3( 49.42, -4.087, -3.880 ),
  name: 'suíte',
  scene: s42
});
//
// 44
s44.addPoint({
  position: new THREE.Vector3( -46.56, -2.615, -17.50),
  name: 'hall',
  scene: s11
});
s44.addPoint({
  position: new THREE.Vector3( -36.71, -3.819, 33.41),
  name: 'hall',
  scene: s12
});
//

const queryString = window.location.search;
if (queryString === "?apt1"){
  s0.createScene(scene);
  s0.appear();
}
else if (queryString === "?apt2"){
  s33.createScene(scene);
  s33.appear();
}
else if (queryString === "?apt3"){
  s14.createScene(scene);
  s14.appear();
}
else if (queryString === "?apt4"){
  s23.createScene(scene);
  s23.appear();
}else{
  s0.createScene(scene);
  s0.appear();
}

function sceneJump(){
  let inputValue = document.getElementById("sceneInput").value;
  let arrScenes = [
     s0,  s1,  s2,  s3,  s4,  s5,  s6,  s7,  s8,  s9,
    s10, s11, s12, s13, s14, s15, s16, s17, s18, s19,
    s20, s21, s22, s23, s24, s25, s26, s27, s28, s29,
    s30, s31, s32, s33, s34, s35, s36, s37, s38, s39,
    s40, s41, s42, s43, s44
  ];
  
  for (let i=0; i<45; i++){

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

