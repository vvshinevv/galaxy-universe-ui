<template>
  <Modal
    :visible="visible"
    @update:visible="$emit('update:visible', false)"
    innerClass="modal-image"
    :showClose="true"
    :dimClose="true"
  >
    <div class="modal-image-box">
        <img :src="imgUrlTitle" class="title"/>
        <img :src="imgUrl" class="bg" />
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal";
export default {
  name: "ModalImage",
  components: { Modal },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    imgUrl: {
      type: String,
      default: "",
    },
      imgUrlTitle: {
          type: String,
          default: "",
      },
  },
};
</script>

<style scoped>
@media (max-width: 768px){
  .title{
    width: 80%;
  }
}
</style>
