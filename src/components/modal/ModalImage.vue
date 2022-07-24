<template>
  <Modal
    :visible="visible"
    @update:visible="$emit('update:visible', false)"
    innerClass="modal-image"
    :showClose="true"
    :dimClose="true"
  >
    <div class="modal-image-box">
      <img :src="imgUrl" />
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
  },
};
</script>

<style scoped></style>
