<template>
  <div class="content-modal" :class="{ on: showContentsModal === true }">
    <h2 class="content-modal-title">
      <!--            {{title}}-->
      <router-link class="galaxy-header-logo" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="119.717"
          height="59.828"
          viewBox="0 0 119.717 59.828"
        >
          <g
            id="갤럭시유니버스_로고"
            data-name="갤럭시유니버스 로고"
            transform="translate(-51.297 -47)"
          >
            <path
              id="패스_419"
              data-name="패스 419"
              d="M158.316,39.751l.025,5.758,0,.589-18.07.081.048,10.337,12.173-.056-.011-2.864-5.894.025-2.994.014-.022-4.607,2.994-.014,11.789-.053.036,7.474,0,.589.028,5.757-5.9.025-15.33.073-4.739-4.585-.064-13.817,4.7-4.627Z"
              transform="translate(-17.825 26.245)"
              fill="#fff"
            />
            <path
              id="패스_425"
              data-name="패스 425"
              d="M509.2,38.266l8.049-.036.073,16.441,9.2-.042-.076-16.441,8.041-.036.092,19.538L530,61.156l-16.091.076L509.291,57.8Z"
              transform="translate(-363.561 27.081)"
              fill="#fff"
            />
            <path
              id="패스_432"
              data-name="패스 432"
              d="M25.838,0,0,15.077.138,44.991,26.113,59.829,51.95,44.752l-.138-29.914ZM46.076,29.845c0,.06,0,.12,0,.181,0,.093,0,.186-.006.279,0,.014,0,.028,0,.042a10.069,10.069,0,0,1-1.811,5.306,9.3,9.3,0,0,1-1.736,1.865q-.248.2-.511.386a8.66,8.66,0,0,1-2.976,1.335,9.137,9.137,0,0,1-2.085.242l-.824,0a8.71,8.71,0,0,1-3.441-.665,9.775,9.775,0,0,1-2.958-1.657,10.935,10.935,0,0,1-1.267-1.221,13.291,13.291,0,0,1-1.138-1.489,18.243,18.243,0,0,1-1.332-2.413,18.154,18.154,0,0,1-1.309,2.425,13.345,13.345,0,0,1-1.124,1.5q-.2.227-.4.44a9.875,9.875,0,0,1-3.794,2.476,8.615,8.615,0,0,1-1.665.52,8.946,8.946,0,0,1-1.769.177l-.824,0a9.09,9.09,0,0,1-2.087-.223,8.652,8.652,0,0,1-2.988-1.307q-.265-.181-.515-.381a9.283,9.283,0,0,1-1.753-1.849,10.063,10.063,0,0,1-1.859-5.288c0-.014,0-.028,0-.042,0-.093-.006-.185-.008-.278,0-.061-.005-.12-.006-.181v-.044c0-.061,0-.12,0-.181,0-.093,0-.186.006-.279,0-.014,0-.028,0-.042a9.865,9.865,0,0,1,.863-3.632,9.468,9.468,0,0,1,3.195-3.924,8.654,8.654,0,0,1,2.329-1.155,9.01,9.01,0,0,1,2.733-.422l.824,0a8.932,8.932,0,0,1,1.771.161,8.6,8.6,0,0,1,1.67.5,9.775,9.775,0,0,1,2.958,1.657,10.633,10.633,0,0,1,.86.784q.207.211.408.436a13.291,13.291,0,0,1,1.138,1.489,18.244,18.244,0,0,1,1.332,2.413,18.154,18.154,0,0,1,1.309-2.425,13.345,13.345,0,0,1,1.124-1.5,10.887,10.887,0,0,1,1.256-1.232A9.766,9.766,0,0,1,32.6,20.951a8.706,8.706,0,0,1,3.435-.7l.824,0a9.017,9.017,0,0,1,2.736.4,8.661,8.661,0,0,1,2.339,1.134,9.462,9.462,0,0,1,3.231,3.894,9.866,9.866,0,0,1,.9,3.624c0,.014,0,.028,0,.042,0,.093.006.185.008.278,0,.06.005.12.006.181v.045"
              transform="translate(51.297 46.999)"
              fill="#fff"
            />
          </g>
        </svg>
      </router-link>
    </h2>
    <div class="content-modal-box">
      <div class="swiper-box">
        <!--                <swiper-->
        <!--                    :slides-per-view="1"-->
        <!--                    :spaceBetween="100"-->
        <!--                    :options="swiperOption"-->
        <!--                    :navigation="true" :modules="modules" class="mySwiper"-->
        <!--                >-->
        <!--                    <swiper-slide v-for="(image, idx) of imgUrl"-->
        <!--                                  :key="'slide_image_' + idx">-->
        <!--                        <img :src="image.src" />-->
        <!--                    </swiper-slide>-->
        <!--                </swiper>-->
        <img
          :src="image.src"
          v-for="(image, idx) of imgUrl"
          :key="'image_' + idx"
        />
      </div>
    </div>
    <button
      type="button"
      class="modal-close"
      @click="$emit('update:visible', !showContentsModal)"
    >
      <span class="blind">닫기</span>
    </button>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { reactive, toRefs } from "vue";
export default {
  name: "ContentsToonModal",
  components: {
    Swiper,
    SwiperSlide,
  },
  emits: ["update:visible"],
  props: {
    showContentsModal: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  setup() {
    const state = reactive({
      imgUrl: [
        {
          src: require("@/assets/image/toon1/toon_001.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_002.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_003.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_004.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_005.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_006.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_007.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_008.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_009.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_010.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_011.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_012.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_013.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_014.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_015.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_016.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_017.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_018.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_019.jpg"),
        },
        {
          src: require("@/assets/image/toon1/toon_020.jpg"),
        },
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 60,
        centeredSlides: true,
        breakpoints: {
          1279: {
            spaceBetween: 50,
          },
          768: {
            spaceBetween: 0,
          },
        },
      },
    });
    return {
      ...toRefs(state),
      modules: [Navigation],
    };
  },
};
</script>

<style>
.content-modal .swiper-box {
  position: relative;
  box-sizing: unset;
  width: 800px;
  margin: 0 auto;
  padding: 0 60px;
  overflow: hidden;
}
.content-modal .swiper {
  position: unset;
  overflow: visible;
}
.content-modal .swiper-box img {
  width: 100% !important;
}
@media (min-width: 768px) and (max-width: 1279px) {
  .content-modal .swiper-box {
    width: 400px;
    padding: 0 50px;
  }
}
@media (max-width: 767px) {
  .content-modal .swiper-box {
    width: 100%;
    padding: 0;
  }
}
.content-modal .swiper-button-next,
.content-modal .swiper-button-prev {
  top: 300px !important;
}
.content-modal .swiper-button-prev {
  left: 0;
}
.content-modal .swiper-button-next {
  right: 0;
}
@media (max-width: 767px) {
  .content-modal .swiper-button-next,
  .content-modal .swiper-button-prev {
    top: 100px !important;
  }
}
@media (max-width: 767px) {
  .content-modal .swiper-button-next,
  .content-modal .swiper-button-prev {
    display: none;
  }
}
</style>
