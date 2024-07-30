import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Configuração da cena, câmera e renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);

// Controles de órbita
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // ativar amortecimento (inercial)
controls.dampingFactor = 0.25; // fator de amortecimento
controls.screenSpacePanning = false; // pan na direção da tela
controls.minDistance = 2; // distância mínima do zoom
controls.maxDistance = 500000; // distância máxima do zoom

// Carregar texturas
const textureLoader = new THREE.TextureLoader();

const CM = textureLoader.load('/src/models/textures/bluedog_Apollo_CM.png');
const CMNRM = textureLoader.load('/src/models/textures/bluedog_Apollo_CM_NRM.png');

const parachutes = textureLoader.load('/src/models/textures/bluedog_Apollo_Parachutes.png');
const parachuteCover = textureLoader.load('/src/models/textures/bluedog_Apollo_ParachuteBay.png');

const heatshieldNRM = textureLoader.load('/src/models/textures/bluedog_Apollo_Heatshield_NRM.png');

const heatshield = textureLoader.load('/src/models/textures/bluedog_Apollo_Heatshield.png');
const dockingPort = textureLoader.load('/src/models/textures/bluedog_Apollo_DockingPort.png');

// Carregar modelo FBX
const loader = new FBXLoader();
loader.load('/src/models/source/cm.fbx', function (object) {
    // Imprimir os nomes das Mesh
    object.traverse(function (child) {
        if (child.isMesh) {
            console.log(child.name); // Imprimir o nome da Mesh
        }
    });

    // Aplicar texturas e materiais metálicos
    object.traverse(function (child) {
        if (child.isMesh) {
            if (child.name.includes('CM')) {
                child.material = new THREE.MeshStandardMaterial({
                    map: CM,
                    roughness: 0.3, // Ajuste o valor conforme necessário
                    metalness: 1, // Ajuste o valor conforme necessário
                    normalMap: CMNRM
                });
            }
            if (child.name.includes('Parachute_Cover')) {
                child.material = new THREE.MeshStandardMaterial({
                    map: parachuteCover,
                    roughness: 0.5, 
                    metalness: 1.10 
                });
            }
            if (child.name.includes('Heatshield')) {
                child.material = new THREE.MeshStandardMaterial({
                    map: heatshield,
                    roughness: 0.5, 
                    metalness: 1, 
                    normalMap: heatshieldNRM
                });
            }
            if (child.name.includes('Docking_Port')) {
                child.material = new THREE.MeshStandardMaterial({
                    map: dockingPort,
                    roughness: 0.5, 
                    metalness: 0 
                });
            }
        }
    });

    scene.add(object);
    animate();
});

// Adicionar luz ambiente
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // intensidade de 0.5
scene.add(ambientLight);

// Adicionar luz direcional que ilumina de cima e de baixo
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // intensidade de 1
scene.add(directionalLight);

// Configurar posição da luz direcional
function updateDirectionalLight() {
    const time = Date.now() * 0.0005; // Alterar o valor de multiplicação para ajustar a velocidade da rotação
    directionalLight.position.set(Math.sin(time) * 10, 5, Math.cos(time) * 10).normalize();
}

// Função de animação
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // somente requerido se enableDamping estiver true
    updateDirectionalLight(); // Atualiza a posição da luz direcional
    renderer.render(scene, camera);
}

animate();

// Ajustar a cena ao redimensionar a janela
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});
