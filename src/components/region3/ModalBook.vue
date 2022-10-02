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
                        <div class="mobile-only book-text" >
                            <div class="title">{{image.text.title}}</div>
                            <div class="title2">{{image.text.title2}}</div>
                            <div class="text1">{{image.text.text1}}</div>
                            <div class="text2">{{ image.text.text2}}</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
          <button
              type="button"
              class="modal-close pc-only"
              @click="() => {
            $emit('update:visible', !showContentsModal);
            showContentsModal = false
            }"
          >
            <span class="blind">닫기</span>
          </button>
        </div>
      <button
          type="button"
          class="modal-close mobile-only"
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
    name: "ModalBook",
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
                    src: require("@/assets/image/region3/modalBook/book1.jpg"),
                    srcMobile: require("@/assets/image/region3/modalBook/book1mo.jpg"),
                    text: {
                        title: '상상 속 모든 것이 이루어지는 세상 ',
                        title2: '너머에',
                        text1:'매일 밤 꿈의 세계로의 접속 누구의 억압도 \n' +
                            '없는 나만의 세상 그곳에선 현실에선 \n' +
                            '있을 수 없는 일, 이루어질 수 없는 \n' +
                            '일이 빈번히 일어나며 놀라움의 하루하루가 반복된다.\n',
                        text2:
                            ' \n' +
                            '꿈인지 현실인지 구별하고 \n' +
                            '싶은 않은 그곳 단순한 환상이라고 하기엔\n' +
                            '너무나 또렷하고 선명하기에 꼭 내 것으로 만들고 \n' +
                            '싶다는 욕망이 우리 삶의 원동력이 되기도 한다.',
                    }
                },
                {
                    src: require("@/assets/image/region3/modalBook/book2.jpg"),
                    srcMobile: require("@/assets/image/region3/modalBook/book2mo.jpg"),
                    text: {
                        title: '현실 속 나의 모습을 찾는 시간 ‘지나온’',
                        title2: '지나온',
                        text1:'놓치고 싶지 않은 것 어쩔 수 없이 잃거나\n' +
                            '잊어버린 것 마음 깊은 곳에 넣어둔 간절히\n' +
                            '원하고 바라던 그것으로 가득 채워진\n' +
                            '나만의 기억 저장고\n',
                        text2:'매일 밤 찾아가 웃기도 울기도 하다 내일\n' +
                            '아침을 위해 꼼꼼하게 문을 걸어\n' +
                            '잠그고 나온다. ‘철컥’ 그 순간 빛이 스며들어\n' +
                            '하루의 작을 알린다.'
                    }
                },
                {
                    src: require("@/assets/image/region3/modalBook/book3.jpg"),
                    srcMobile: require("@/assets/image/region3/modalBook/book3mo.jpg"),
                    text: {
                        title: '눈을 감으면 펼쳐지는 나만의 세계 ‘아스라이’',
                        title2: '아스라이',
                        text1:'저마다 다른 색, 촉감, 온도오늘은 따뜻했지만, \n' +
                            '내일은 차가워질 수도 있는\n' +
                            '나만의 공간, 나만의 팔레트.\n',
                        text2: '내가 섞은 물감으로 내가 만든 세상에서자유롭게\n' +
                            ' 유영할 수 있는 곳, 무엇이든 생동감이 넘치며\n' +
                            '부족함이 느껴지지 않는\n' +
                            '지친 하루에 이 공간만 생각하면\n' +
                            '웃음이피어난다.'
                    }
                },
                {
                    src: require("@/assets/image/region3/modalBook/book4.jpg"),
                    srcMobile: require("@/assets/image/region3/modalBook/book4mo.jpg"),
                    text: {
                        title: '지금 내가 사는 이 공간, 이곳 ‘가온’',
                        title2: '가온',
                        text1:'현실이 없다면 꿈도 없는 법\n' +
                            '꿈이 있기에 현실은 더 아름다워질 수 있다.\n' +
                            '꿈의 모습에 한 걸음 더 가까이 가기 위해\n' +
                            '오늘을 살고 내일을 기대 해본다.\n' +
                            '눈을 감고 내가 만든 세상에서 한껏 즐겼다면\n' +
                            '다시 눈을 뜨는 수간 또 다른 나의 활동 종료를알리는 것\n' +
                            '어떠한 형태로 나를 맞이 할지는 저마다 다르다\n' +
                            '오늘의 내가 꼭 있어야 하는 곳\n' +
                            '꿈을 꾸기 위해 지켜야 하는 곳. ',
                        text2: ''
                    }
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
                      slidesPerView: 4,
                      spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
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
  align-items: center;
}
img.mobile-only{
    width: 50%;
    margin: 0 auto;
    padding: 20px 0;
}
.book-text{
    font-family: 'Noto Serif KR', serif;
    text-align: center;
}
.title{
    margin-bottom:4px;
    font-size: 16px;
    font-family: 'Noto Serif KR', serif;
}
.title2{
    margin-bottom: 14px;
    font-weight:bold;
    font-size: 30px;
    font-family: 'Noto Serif KR', serif;
}
.text1,.text2{
    margin-bottom: 10px;
    font-size: 14px;
    font-family: 'Noto Serif KR', serif;
    line-height:2em;
    white-space: pre-line;
}
</style>
