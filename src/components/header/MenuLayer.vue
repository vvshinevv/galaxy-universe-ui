<template>
  <div class="menu-layer">
    <button type="button" class="icon-menu" @click="showModal = true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        data-v-05a98cf2=""
      >
        <path
          d="M3 12h18M3 6h18M3 18h18"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
    <!--[D] on 클래스 추가시 확성화 -->
    <div class="menu-layer-box" :class="{ on: showModal === true }">
      <ul class="menu-layer-list">
        <li class="menu-layer-item">
          <router-link
            to="/firstlight"
            class="menu-layer-link"
            @click.native="showModal = false"
            >현실의세계</router-link
          >
        </li>
        <li class="menu-layer-item">
          <router-link
            to="/rainbowshadow"
            class="menu-layer-link"
            @click.native="showModal = false"
            >상상의세계</router-link
          >
        </li>
        <li class="menu-layer-item">
          <router-link
            to="/avadream"
            class="menu-layer-link"
            @click.native="showModal = false"
            >꿈의세계</router-link
          >
        </li>
      </ul>
      <button type="button" class="icon-close" @click="showModal = false" >
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66">
          <g data-name="그룹 1817">
            <path data-name="선 16" transform="translate(17.5 17.5)" style="fill:none;stroke:#fff;stroke-width:2px" d="M30 0 0 30"/>
            <path data-name="선 17" transform="rotate(90 15 32.5)" style="fill:none;stroke:#fff;stroke-width:2px" d="M30 0 0 30"/>
            <path data-name="사각형 872" style="fill:none" d="M0 0h66v66H0z"/>
          </g>
        </svg>

      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuLayer",
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
.icon-close{
  width: 40px;
  height:40px;
}
.icon-close svg{
  width: 100%;
  height: 100%;
}
</style>
