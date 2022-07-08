<template>
    <div class="content-modal" :class="{ on: showContentsModal === true }">
        <h2 class="content-modal-title">{{title}}</h2>
        <div class="content-modal-box">
            <div class="swiper-box">
                <swiper
                    :slides-per-view="1"
                    :spaceBetween="100"
                    :options="swiperOption"
                    :navigation="true" :modules="modules" class="mySwiper"
                >
                    <swiper-slide v-for="(image, idx) of imgUrl"
                                  :key="'slide_image_' + idx">
                        <img :src="image.src" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <button type="button" class="modal-close"  @click="$emit('update:visible', !showContentsModal)">
            <span class="blind">닫기</span>
        </button>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { reactive, toRefs } from 'vue';
export default {
    name: "ContentsToonModal",
    components: {
        Swiper,
        SwiperSlide
    },
    emits: ['update:visible'],
    props: {
        showContentsModal: {
            type: Boolean,
            default: false,
        },
        title:{
            type: String,
            default: ''
        },
        content:{
            type: String,
            default: ''
        }
    },
    setup() {
        const state = reactive({
            imgUrl: [ {
                src: require('@/assets/image/img_toon1.png'),
            },
            {
                src: require('@/assets/image/img_toon2.png'),
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
                        spaceBetween:0,
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

<style >
.content-modal .swiper-box{
    position: relative;
    box-sizing:unset;
    width: 800px;
    margin: 0 auto;
    padding: 0 60px;
    overflow: hidden;
}
.content-modal .swiper{
    position: unset;
    overflow: visible;
}
.content-modal .swiper-box img{
    width: 100% !important;
}
@media (min-width: 768px) and (max-width: 1279px){
    .content-modal .swiper-box{
        width: 400px;
        padding: 0 50px;
    }
}
@media (max-width: 767px){
    .content-modal .swiper-box{
        width: 100%;
        padding: 0;
    }
}
.content-modal .swiper-button-next, .content-modal .swiper-button-prev{
    top: 300px !important;
}
.content-modal .swiper-button-prev{
    left: 0;
}
.content-modal .swiper-button-next{
    right: 0;

}
@media (max-width: 767px){
    .content-modal .swiper-button-next, .content-modal .swiper-button-prev{
        top: 100px !important;
    }
}
@media (max-width: 767px){
    .content-modal .swiper-button-next, .content-modal .swiper-button-prev{
        display: none;
    }
}
</style>
