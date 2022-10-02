<template>
    <div class="content-modal" :class="{ on: showContentsModal === true }">
        <div class="movie-chanel">
            <video controls  style="width:100%;object-fit: contain;" v-if="showContentsModal === true">
                <source :src="movieUrl"
                        type="video/mp4">
            </video>
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
import {reactive, toRefs} from "vue";

export default {
    name: "ModalMovieChanel3",
    emits: ["update:visible"],
    props: {
        showContentsModal: {
            type: Boolean,
            default: false,
        },

    },
    setup() {
        const state = reactive({
            movieUrl: require("@/assets/image/region1/ava2.mp4"),
        });
        return {
            ...toRefs(state)
        };
    },
}
</script>

<style scoped>
.content-modal{
    display:none;
}
.content-modal.on{
    display:block;
}
.movie-chanel{
    display: flex;
    align-content: center;
    height: 100%;
}
</style>
