<template>
  <transition name="modal">
    <div
      v-if="visible"
      class="modal"
      @wheel="scroll"
      @touchstart="touch"
      @touchmove="touch"
      @touchend="touch"
    >
      <div
        class="modal-dimmed"
        @click.stop="dimClose ? doClose($event) : () => {}"
      ></div>
      <div class="modal-inner" :class="innerClass">
        <slot></slot>
        <button
          type="button"
          v-if="showClose"
          class="modal-close"
          @click.stop="doClose($event)"
        ></button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    innerClass: {
      type: String,
      default: "",
    },
    dimClose: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      require: true,
    },
    beforeClose: Function,
    showClose: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:visible"],
  watch: {
    visible(value) {
      if (value) {
        document.querySelector("body").classList.add("modal-open");
      } else {
        document.querySelector("body").classList.remove("modal-open");
      }
    },
  },
  methods: {
    scroll(e) {
      e.stopPropagation();
    },
    doClose() {
      if (this.beforeClose) {
        this.beforeClose();
      }

      this.$nextTick(() => {
        this.$emit("update:visible", false);
      });
    },

    touch(e) {
      e.stopPropagation();
    },
  },

  /* Lifecycles */
  mounted() {},
};
</script>

<style lang="scss" src="@/assets/style/common/modal.scss" />
