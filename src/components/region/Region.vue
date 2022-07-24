<template>
  <div class="region-wrap">
    <div class="region-main region1">
      <h1 class="region-main-title">MIRINE</h1>
    </div>
    <div class="region-title-box">
      <p class="text">
        삶은 단지 어둠과 빛으로 구분되는 것이 아니다.<br />
        삶은 바로 어둠 속에서 빛을 찾는 것이다.
      </p>
      <span class="writer">-Landon parham-</span>
    </div>
    <div class="region-main-text">
      <div class="icon-star">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52.211"
          height="91.323"
          viewBox="0 0 52.211 91.323"
        >
          <path
            id="심볼1"
            d="M25.851,0l-1.93,40.474-3,3.029L0,45.889,21.134,48.06l2.845,2.814,2.381,40.45,1.93-40.474,2.995-3.029L52.21,45.435,31.076,43.264l-2.845-2.813Z"
            transform="translate(0 0)"
            fill="#fff"
          />
        </svg>
      </div>
      <p>
        눈을 감아 빛이 사라지는 순간 펼쳐지는 새로운 세계<br />
        상상하는대로 이루어지고 모든 것이 가능한 세상 ‘너머에’<br />
        꿈을 통해 그토록 바라고 그리던 모습을 발견하는 순간<br />
        기억의 찰나가 저장되어 있는 나만의 세계로 빠져들게 됩니다.<br />
        며칠 전 꾸었던 꿈이 생생하게 현실로 이루어지는 느낌을 기억하며<br />
        다시 눈을 뜨는 순간 ‘지나온’<br />
        이 구간을 통해 현실에서 한발 나아갈 수 있다면
      </p>

      <div class="icon2-star">
        <svg
          id="심볼2"
          xmlns="http://www.w3.org/2000/svg"
          width="14.203"
          height="23.594"
          viewBox="0 0 14.203 23.594"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="사각형_471"
                data-name="사각형 471"
                width="14.203"
                height="23.594"
                fill="none"
              />
            </clipPath>
          </defs>
          <g id="그룹_876" data-name="그룹 876" clip-path="url(#clip-path)">
            <path
              id="패스_445"
              data-name="패스 445"
              d="M4.641,11.882l5.459.561.735.727.615,10.449.5-10.455.774-.782,5.405-.616L12.669,11.2l-.735-.727L11.319.029l-.5,10.455-.774.782Z"
              transform="translate(-4.283 -0.026)"
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="1"
            />
          </g>
        </svg>
      </div>
    </div>
    <section class="region-content">
      <div class="region-content-image r1" @click="clickImage">
        <h3><span class="blind">미리내</span></h3>
        <span class="text">미리내 소개</span>
      </div>
    </section>
    <section class="region-content">
      <div class="region-content-image r1_2" @click="clickImage2">
        <h3><span class="blind">미리내</span></h3>
        <span class="text">미리내 용어사전</span>
      </div>
    </section>
    <div class="icon-star">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52.211"
        height="91.323"
        viewBox="0 0 52.211 91.323"
      >
        <path
          id="심볼1"
          d="M25.851,0l-1.93,40.474-3,3.029L0,45.889,21.134,48.06l2.845,2.814,2.381,40.45,1.93-40.474,2.995-3.029L52.21,45.435,31.076,43.264l-2.845-2.813Z"
          transform="translate(0 0)"
          fill="#fff"
        />
      </svg>
    </div>
    <section class="region-content-more">
      <ul class="content-image-list">
        <li class="content-image-item" @click="showToon = true">
          <div class="image toon1"></div>
        </li>
        <li class="content-image-item">
          <div class="image toon2"></div>
        </li>
      </ul>
    </section>
  </div>

  <!-- 이미지 노출 -->
  <ModalImage v-model:visible="showModal" :imgUrl="imgUrl" />
  <!-- 웹툰 -->
  <ContentsToonModal
    :showContentsModal="showToon"
    :title="'아바드림 1화'"
    v-model:visible="showToon"
  />
</template>

<script>
import ModalImage from "@/components/modal/ModalImage";
import { reactive, toRefs } from "vue";
import ContentsToonModal from "@/components/modal/ContentsToonModal";
export default {
  name: "Region",
  components: { ContentsToonModal, ModalImage },
  setup() {
    const state = reactive({
      showModal: false,
      imgUrl: "",
      showToon: false,
    });
    const clickImage = () => {
      state.showModal = true;
      state.imgUrl = require("@/assets/image/bg_r1_popup.png");
    };
    const clickImage2 = () => {
      state.showModal = true;
      state.imgUrl = require("@/assets/image/bg_r1_2_popup.png");
    };
    return {
      ...toRefs(state),
      clickImage,
      clickImage2,
    };
  },
};
</script>
