<template>
  <Modal
    :visible="visible"
    @update:visible="$emit('update:visible', false)"
    innerClass="modal-image"
    :showClose="true"
    :dimClose="true"
  >
    <div class="modal-image-box">
      <img :src="imgUrl" class="bg pc-only" />
      <img :src="imgUrlMo" class="bg mobile-only" />
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal";
export default {
  name: "ModalCommingSoon",
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
    imgUrlMo: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
:deep(.modal-image) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.bg {
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 767px) {
    width: auto;
    height: 100vh;
    object-fit: contain;
  }
}
@media (max-width: 767px) {
  :deep(.modal-image) .modal-close {
    top: 20px !important;
    right: 0 !important;
    left: auto !important;
    bottom: auto !important;
  }
}
</style>
