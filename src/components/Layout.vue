<template>
  <div class="galaxy-wrap">
    <Header />
    <main class="galaxy-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
export default {
  name: "Layout",
  components: { Header },
};
</script>

<style lang="scss" src="@/assets/style/common/header.scss" />
