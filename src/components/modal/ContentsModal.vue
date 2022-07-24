<template>
  <div class="content-modal" :class="{ on: showContentsModal === true }">
    <h2 class="content-modal-title">{{ title }}</h2>
    <div class="content-modal-box">
      <h3 class="title">{{ title }}</h3>
      <div class="content-modal-text">
        {{ content }}
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
</template>

<script>
export default {
  name: "ContentsModal",
  emits: ["update:visible"],
  props: {
    showContentsModal: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
