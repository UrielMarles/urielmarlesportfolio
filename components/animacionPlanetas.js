import * as THREE from 'three';

export default function AnimarFondo(){
  
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'),});
  renderer.gammaOutput = false;
  renderer.toneMapping = THREE.LinearToneMapping;
  renderer.toneMappingExposure = 0.5;
  
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);
  camera.position.setX(-3);
  renderer.render(scene, camera);
  

  const loader = new THREE.TextureLoader()
  loader.gammaOutput = false;
  loader.toneMapping = THREE.LinearToneMapping;
  loader.toneMappingExposure = 1;

  const spaceTexture = loader.load("/images/espacioGrande.avif");
  const material = new THREE.MeshBasicMaterial({ map: spaceTexture});
  const formaDona = new THREE.TorusGeometry(8, 1, 16, 100);
  const dona = new THREE.Mesh(formaDona, material);

  const angulo = Math.PI / 4; // Ángulo en radianes (ajusta según sea necesario)
  const radio = 5; // Distancia desde el centro del cubo (ajusta según sea necesario)

  const xDona = -2 + radio * Math.cos(angulo);
  const yDona = -4 + radio * Math.sin(angulo);
  const zDona = -5;

  dona.position.set(xDona, yDona, zDona);

  scene.add(dona);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);
  
  Array(400).fill().forEach(addStar);
  
  const UrielImagen = loader.load('/images/URIELSS.png');
  const UrielCubo = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: UrielImagen }));
  UrielCubo.position.z = -5;
  UrielCubo.position.x = 2;
  UrielCubo.material.lights = false;
  scene.add(UrielCubo);
  
  const texturaLuna = new THREE.TextureLoader().load('/images/LUNA.jpg');
  const luna = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32),new THREE.MeshBasicMaterial({map: texturaLuna}));
  luna.position.z = 15;
  luna.position.x = -10;
  scene.add(luna);
  
  const texturaMarte = new THREE.TextureLoader().load('/images/MARTED.png')
  const Marte = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50),new THREE.MeshBasicMaterial({map: texturaMarte}));
  Marte.position.z = 70;
  Marte.position.x = -10;
  scene.add(Marte);
  
  
  function addStar() {
    const formaEstrella = new THREE.SphereGeometry(0.4, 30, 30);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(formaEstrella, material);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
    star.position.set(x, y, z);
    scene.add(star);
  }
  
  function moveCamera() {
    
    const t = document.body.getBoundingClientRect().top;
    luna.rotation.x += 0.05;
    luna.rotation.y += 0.075;
    luna.rotation.z += 0.05;
  
    UrielCubo.rotation.y += 0.1;
    UrielCubo.rotation.z += 0.1;
  
    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;

  }

  
  function animate() {

    requestAnimationFrame(animate);
  
    dona.rotation.x += 0.01;
    dona.rotation.y += 0.005;
    dona.rotation.z += 0.01;
  
    luna.rotation.x += 0.005;

    UrielCubo.rotation.x += 0.005
    UrielCubo.rotation.y += 0.005
    UrielCubo.rotation.z += 0.005
  
    Marte.rotation.x += 0.01
    Marte.rotation.z += 0.01
    renderer.render(scene, camera);

  }

  document.body.onscroll = moveCamera;
  animate();
  moveCamera();
}