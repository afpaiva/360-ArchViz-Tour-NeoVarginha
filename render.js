
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
      let intersect = rayCaster.intersectObject(s0.sphere);
      if (intersect.length > 0){
          let debug = document.querySelector(".debug");
          debug.innerHTML = intersect[0].point.x.toPrecision(4)
           + ", "
           + intersect[0].point.y.toPrecision(4)
           + ", "
           + intersect[0].point.z.toPrecision(4);
      }
  }
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
      }
  })
  if (foundSprite === false && spriteActive){
      hotspotLabel.classList.remove('is-active');
      spriteActive = false;
  }
}

window.addEventListener('resize', onResize);
container.addEventListener('click', onClick);
container.addEventListener('mousemove', onMouseMove);