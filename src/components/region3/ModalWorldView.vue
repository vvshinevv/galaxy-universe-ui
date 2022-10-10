<template>
    <div class="content-image-modal" :class="{ on: showContentsModal === true }">
        <div class="content-image-box">
            <div class="swiper-box">
                <swiper
                    :slides-per-view="1"
                    :spaceBetween="100"
                    :options="swiperOption"
                    :navigation="true" :modules="modules" class="mySwiper"
                >
                    <swiper-slide v-for="(image, idx) of imgUrl"
                                  :key="'slide_image_' + idx">
                        <img :src="image.src" class="pc-only"/>
                        <img :src="image.srcMobile" class="mobile-only"/>
                        <p v-html="image.text" class="mobile-only"></p>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <button
            type="button"
            class="modal-close"
            @click="() => {
            $emit('update:visible', !showContentsModal);
            showContentsModal = false
            }"
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
    name: "ModalWorldView",
    components: {
        Swiper,
        SwiperSlide,
    },
    props:{
        showContentsModal: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["update:visible"],
    setup() {
        const state = reactive({
            showContentsModal: true,
            imgUrl: [
                {
                    src: require("@/assets/image/region3/modalWorldView/img_worldView1.jpg"),
                    srcMobile: require("@/assets/image/region3/modalWorldView/img_worldView1_mo.jpg"),
                    text:`현실의 세계와<br class="mobile-only">상상의 세계`
                },
                {
                    src: require("@/assets/image/region3/modalWorldView/img_worldView2.jpg"),
                    srcMobile: require("@/assets/image/region3/modalWorldView/img_worldView2_mo.jpg"),
                    text: `현실의 세계에서는  경험하고 <br class="mobile-only">상상의 세계는 깨우친다`
                },
                {
                    src: require("@/assets/image/region3/modalWorldView/img_worldView3.jpg"),
                    srcMobile: require("@/assets/image/region3/modalWorldView/img_worldView3_mo.jpg"),
                    text: `현실에서는 하나의 자신을 보지만  <br class="mobile-only">
상상의 세계에서는 다양한 모습, <br class="mobile-only">
이상적인 나의 모습을 볼 수 있다.`
                },
                {
                    src: require("@/assets/image/region3/modalWorldView/img_worldView4.jpg"),
                    srcMobile: require("@/assets/image/region3/modalWorldView/img_worldView4_mo.jpg"),
                    text: `현실의 나와 상상의 내가 <br class="mobile-only">
이어지는 순간 (갤럭시 메타버스)<br class="mobile-only">
우린 무한한 힘을 느끼고 <br class="mobile-only">
꿈(상상)을 현실로 이루어낸다.`
                },
            ],
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 60,
                centeredSlides: true,
                allowTouchMove: false,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                },
                breakpoints: {
                    1279: {
                        spaceBetween: 0,
                    },
                    768: {
                        width: '195px',
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
}
</script>

<style scoped>
.content-image-modal{
  font-family: 'Noto Serif KR', serif;
}
@media (max-width: 767px){
    .modal-close {
        top: auto !important;
    }
}
</style>
