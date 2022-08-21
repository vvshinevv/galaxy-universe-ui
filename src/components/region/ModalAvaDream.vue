<template>
  <Modal :visible="visible" @update:visible="$emit('update:visible', false)" innerClass="modal-image" :showClose="true"
    :dimClose="true">
    <div class="modal-image-box">
      <img :src="imgUrlTitle" class="title" />
      <div class="3d-image-box">
        <!--[D] 이 위치에 넣어 주시면 될 것 같아요. -->
        <div id="container"></div>
        <img :src="imgUrl" class="bg" />
      </div>
      <Footer />
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal";
import Footer from "@/components/footer/Footer";
import {reactive, toRefs,onMounted} from "vue";

import * as THREE from "three";
import Stats from '@/assets/jsm/libs/stats.module.js';
import { OrbitControls } from '@/assets/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from '@/assets/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from '@/assets/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from '@/assets/jsm/loaders/DRACOLoader.js';

let mixer;

const clock = new THREE.Clock();
const container = document.getElementById('container');
const stats = new Stats();
container.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
container.appendChild(renderer.domElement);

const pmremGenerator = new THREE.PMREMGenerator(renderer);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfe3dd);
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(5, 2, 8);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.5, 0);
controls.update();
controls.enablePan = false;
controls.enableDamping = true;

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('@/assets/js/libs/draco/gltf/');

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);
loader.load('@/assets/models/gltf/LittlestTokyo.glb', function (gltf) {

  const model = gltf.scene;
  model.position.set(1, 1, 0);
  model.scale.set(0.01, 0.01, 0.01);
  scene.add(model);

  mixer = new THREE.AnimationMixer(model);
  mixer.clipAction(gltf.animations[0]).play();

  animate();

}, undefined, function (e) {

  console.error(e);

});


window.onresize = function () {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

};


function animate() {

  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  mixer.update(delta);

  controls.update();

  stats.update();

  renderer.render(scene, camera);

}

export default {
  name: "ModalAvaDream",
  components: { Footer, Modal },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js')
    document.head.appendChild(recaptchaScript)
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    imgUrl: {
      type: String,
      default: "",
    },
    imgUrlTitle: {
      type: String,
      default: "",
    },
  },
  setup() {
    const state = reactive({
    });
    onMounted(()=>{
      const container = document.getElementById( 'container' );
      console.log(container);
    })
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.title {
  margin: 0;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 0;
}

@media (max-width: 1280px) {
  footer {
    display: none;
  }
}

@media (max-width: 768px) {
  .title {
    top: 30px;
    width: 60%;
  }

  footer {
    display: none;
  }
}
</style>
