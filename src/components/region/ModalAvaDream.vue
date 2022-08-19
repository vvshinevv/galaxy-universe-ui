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
        <div class="3d-image-box">
          <!--[D] 이 위치에 넣어 주시면 될 것 같아요. -->
          <img :src="imgUrl" class="bg" />
        </div>
        <Footer/>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal";
import Footer from "@/components/footer/Footer";
export default {
  name: "ModalAvaDream",
  components: {Footer, Modal },
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
.title{
  margin:0;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
footer{
  position: absolute;
  left:0;
  right:0;
  bottom: 0;
  margin-bottom: 0;
}
@media (max-width: 1280px){
  footer{
    display: none;
  }
}
@media (max-width: 768px){
  .title{
    top: 30px;
    width: 60%;
  }
  footer{
    display: none;
  }
}
</style>
