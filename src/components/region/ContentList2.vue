<template>
    <div class="content-modal-list" :class="{ on: showContentsModal === true }">
        <div  class="content-modal-box">
            <h3 class="content-list-title"><img :src="titleUrl"></h3>
            <ul class="content-toon-list">
                <li v-for="(item,index) of imgUrl" :key="'list'+index"
                    @click="listEvent(item.key)"
                    :style="{'background-image':'url('+item.src+')'}"></li>
            </ul>
            <Footer/>
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
    <!-- 강원래 영상 -->
    <ModalMovieChanel2  :showContentsModal="showModal"
                       v-model:visible="showModal"/>
    <!-- 이미지 노출 ComminSoon -->
    <ModalImage
        v-model:visible="showComming"
        :imgUrl="imgUrlComming"
        :imgUrlTitle="imgUrlTitleComming"
    />
</template>
<script>
import {reactive, toRefs} from "vue";
import Footer from "@/components/footer/Footer";
import ModalMovieChanel2 from "@/components/region/ModalMovieChanel2";
import ModalImage from "@/components/region/ModalImage";

export default {
    name: "ContentList2",
    components: {ModalImage, ModalMovieChanel2, Footer},
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
             showComming: false,
             imgUrlComming:'',
             imgUrlTitleComming:'',
            titleUrl: require("@/assets/image/region1/bg_reboot_title.png"),
            imgUrl: [
                {
                    src: require("@/assets/image/region1/bg_reboot_char.png"),
                    key:0,
                },
                {
                    src: require("@/assets/image/region1/bg_reboot_char.png"),
                    key:1,
                },
                {
                    src: require("@/assets/image/region1/bg_reboot_char.png"),
                    key:2,
                },
            ],
            showModal: false,
        });
        //comming Soon
        const commingSoon = () => {
          state.showComming = true;
          state.imgUrlComming = require("@/assets/image/region1/bg_comming.jpg");
          state.imgUrlTitleComming = require("@/assets/image/region1/bg_comming_title.png");
        }
        const listEvent=(key)=>{
            if(key === 0){
                state.showModal = true
            }else if(key === 1 ){
              commingSoon();
            }else if(key === 2 ){
              commingSoon();
            }
            return;
        };
        return {
            ...toRefs(state),listEvent
        };
    },
}
</script>

<style scoped lang="scss">
.content-modal-list{
  background: url("@/assets/image/region1/bg_reboot_kim.png") no-repeat center;
  background-size: cover;
}
.content-modal-box{
    height:100%;
}
.content-list-title{
    margin: 40px auto;
}
.content-toon-list{
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y:hidden;
    @media (min-width: 768px) and (max-width: 1279px){
        height: calc(100% - 450px);
    }
    @media (max-width: 768px){
        display: block;
        overflow: visible;
    }
    li{
        flex: none;
        width: 830px;
        margin: 0 15px;
        @media (min-width: 768px) and (max-width: 1279px){
            width: 600px;
        }
        @media (max-width: 768px){
            width: auto;
            margin-bottom: 30px;
            padding-top: 120%;
        }
    }
}
.content-modal-list .footer{
    margin-top: auto;
    margin-bottom: 30px;
    padding-bottom: 0;
}
</style>
