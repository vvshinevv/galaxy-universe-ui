<template>
  <Modal :visible="visible" @update:visible="$emit('update:visible', false)" innerClass="modal-image" :showClose="true"
    :dimClose="true">
    <div class="modal-image-box">
      <img :src="imgUrlTitle" class="title" />
      <div class="3d-image-box">
        <!--[D] 이 위치에 넣어 주시면 될 것 같아요. -->
        <div id="container" class="bg"></div>
        <!-- <img :src="imgUrl" class="bg" /> -->
      </div>
      <Footer />
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal";
import Footer from "@/components/footer/Footer";
import { reactive, toRefs, onMounted } from "vue";

import * as THREE from "three";
import { OrbitControls } from '@/assets/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from '@/assets/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from '@/assets/jsm/loaders/GLTFLoader.js';
import { KTX2Loader } from '@/assets/jsm/loaders/KTX2Loader.js';
import { MeshoptDecoder } from '@/assets/jsm/libs/meshopt_decoder.module.js';

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
    onMounted(() => {
      let camera, scene, renderer, mesh;
      init();
      render();
      function init() {
        const container = document.getElementById('container');
        console.log(container.childElementCount);
        if (container.childElementCount > 0) {
          container.removeChild(container.lastElementChild);
        }
        
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.set(247.49371217485663, 583.5733538232143, -218.1554407552514);

        const environment = new RoomEnvironment();
        const pmremGenerator = new THREE.PMREMGenerator(renderer);

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xbbbbbb);
        scene.environment = pmremGenerator.fromScene(environment).texture;

        const ktx2Loader = new KTX2Loader()
          .setTranscoderPath('basis/')
          .detectSupport(renderer);

        const loader = new GLTFLoader().setPath('models/gltf/');
        loader.setKTX2Loader(ktx2Loader);
        loader.setMeshoptDecoder(MeshoptDecoder);
        loader.load('avadream.glb', function (gltf) {
          mesh = gltf.scene;
          mesh.scale.set(1500, 1500, 1500);
          scene.add(gltf.scene);
          render();
        });

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', render); // use if there is no animation loop
        controls.minDistance = 400;
        controls.maxDistance = 1000;
        controls.update();
        window.addEventListener('resize', onWindowResize);

      }

      function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

        render();

      }

      function render() {
        
        renderer.render(scene, camera);
      }
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
