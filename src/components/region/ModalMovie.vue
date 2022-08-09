<template>
    <div class="content-modal" :class="{ on: showContentsModal === true }">
        <div class="content-modal-box movie">
            <div class="movie-box">
                <div class="movie-bg">
                    <img :src="titleUrl" class="title"/>
                    <ul class="region1-card-list">
                        <li class="region1-card-item" v-for="(item,index) of imgUrl">
                            <button type="button" class="image" @click="listEvent(index)">
                                <img :src="item.src" class="image" />
                            </button>
                        </li>
                    </ul>
                </div>
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
    <!-- 하태수 영상 -->
    <ModalMovieChanel  :showContentsModal="showModal"
                       v-model:visible="showModal"/>
</template>

<script>
import {reactive, toRefs} from "vue";
import ModalMovieChanel from "@/components/region/ModalMovieChanel";
export default {
  name: "ModalMovie",
  components: {ModalMovieChanel  },
    emits: ["update:visible"],
  props: {
      showContentsModal: {
          type: Boolean,
          default: false,
      },

  },
    setup() {
        const state = reactive({
            titleUrl: require("@/assets/image/region1/bg_ava_movie_title.png"),
            imgUrl: [
                {
                    src: require("@/assets/image/region1/img_movie_1.png"),
                    key:1,
                },
                {
                    src: require("@/assets/image/region1/img_movie_2.png"),
                    key:2,
                },
                {
                    src: require("@/assets/image/region1/img_movie_3.png"),
                    key:3,
                },
                {
                    src: require("@/assets/image/region1/img_movie_4.png"),
                    key:4,
                },
                {
                    src: require("@/assets/image/region1/img_movie_5.png"),
                    key:5,
                },
                {
                    src: require("@/assets/image/region1/img_movie_6.png"),
                    key:6,
                },
                {
                    src: require("@/assets/image/region1/img_movie_7.png"),
                    key:7,
                },
                {
                    src: require("@/assets/image/region1/img_movie_8.png"),
                    key:8,
                },
                {
                    src: require("@/assets/image/region1/img_movie_9.png"),
                    key:9,
                },
            ],
            showModal: false,
            showModal2: false
        });
        const listEvent=(key)=>{
            if(key === 0){
                state.showModal = true;
                console.log(' 가나다')
            }
            return;
        };
        return {
            ...toRefs(state),listEvent
        };
    },
};
</script>

<style scoped lang="scss">
.title{
    display: block;
    width: 200px;
    margin: 0 auto;
    margin-top: 60px;
}
.content-modal-box{
    height: 100%;
}
</style>
