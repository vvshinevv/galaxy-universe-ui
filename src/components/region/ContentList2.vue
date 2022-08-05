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
</template>
<script>
import {reactive, toRefs} from "vue";
import Footer from "@/components/footer/Footer";
import ModalMovieChanel2 from "@/components/region/ModalMovieChanel2";

export default {
    name: "ContentList2",
    components: {ModalMovieChanel2, Footer},
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
            titleUrl: require("@/assets/image/region1/bg_reboot_title.png"),
            imgUrl: [
                {
                    src: require("@/assets/image/region1/bg_reboot_char.png"),
                    key:0,
                },
                {
                    src: require("@/assets/image/region1/bg_reboot_char.png"),
                    key:null,
                },
                {
                    src: require("@/assets/image/region1/bg_reboot_char.png"),
                    key:null,
                },
            ],
            showModal: false,
        });
        const listEvent=(key)=>{
            if(key === 0){
                state.showModal = true
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
.content-modal-box{
    height:100%;
}
.content-list-title{
    margin: 40px 0;
}
.content-toon-list{
    overflow-x: auto;
    overflow-y:hidden;
    flex-wrap: nowrap;
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
            padding-top: 120%;
            margin-bottom: 30px;
        }
    }
}
.content-modal-list .footer{
    margin-top: auto;
    padding-bottom: 0;
    margin-bottom: 30px;
}
</style>
