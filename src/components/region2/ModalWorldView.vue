<template>
    <div class="content-image-modal v2" :class="{ on: showContentsModal === true }">
        <div class="content-image-box v2">
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
                    src: require("@/assets/image/region2/modalWorldView/worldView1.png"),
                    srcMobile: require("@/assets/image/region2/modalWorldView/worldView1_mo.png"),
                    text:`미리내의 상상의
세계에선  그동안<br/>
해보고 싶었던것들을 <br/>
다 끄집어 낼수 있어요 .`
                },
                {
                    src: require("@/assets/image/region2/modalWorldView/worldView2.png"),
                    srcMobile: require("@/assets/image/region2/modalWorldView/worldView2_mo.png"),
                    text: `그리고 나도 모르는 다양한 행성에 <br/>
다양한 모습을 하고 있는 <br/>
사람들속에서 나를 찾죠`
                },
                {
                    src: require("@/assets/image/region2/modalWorldView/worldView3.png"),
                    srcMobile: require("@/assets/image/region2/modalWorldView/worldView3_mo.png"),
                    text: `그속에선 나는 의사선생님이<br/>
 되기도 하고<br/>
 운동선수도 되고 <br/>
가수도 된답니다.`
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

<style scoped lang="scss">
</style>
