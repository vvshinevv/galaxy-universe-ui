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
                    srcMobile: require("@/assets/image/region3/modalWorldView/img_worldView1.jpg"),
                    text:`우리가 눈을 뜨고 보고 듣고<br class="mobile-only">느끼는 현실과 우리가 눈을<br class="mobile-only"> 감고 상상하는<br class="mobile-only"> 세계가 있습니다`
                },
                {
                    src: require("@/assets/image/region3/modalWorldView/img_worldView2.jpg"),
                    srcMobile: require("@/assets/image/region3/modalWorldView/img_worldView2.jpg"),
                    text: `현실에서 상상한<br class="mobile-only"> 것들을 통해 만들어 지는 세계,<br class="mobile-only"> 미리내 에서는 무엇이든<br class="mobile-only"> 경험하고 즐길수 있습니다`
                },
                {
                    src: require("@/assets/image/region3/modalWorldView/img_worldView3.jpg"),
                    srcMobile: require("@/assets/image/region3/modalWorldView/img_worldView3.jpg"),
                    text: `미리내에서의 경험은<br class="mobile-only"> 현실로 돌아올때 꿈을 이루는<br class="mobile-only"> 희망으로 변태하여 현실에서<br class="mobile-only"> 꿈을 실현하는 에너지가 됩니다`
                },
                {
                    src: require("@/assets/image/region3/modalWorldView/img_worldView4.jpg"),
                    srcMobile: require("@/assets/image/region3/modalWorldView/img_worldView4.jpg"),
                    text: `희망을 통해 이루어진<br class="mobile-only"> 꿈들은 더 많은 상상을 만들고<br class="mobile-only"> 더욱더 많은 사람에게<br class="mobile-only">더욱 즐겁고 행복을 선사합니다`
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
</style>
