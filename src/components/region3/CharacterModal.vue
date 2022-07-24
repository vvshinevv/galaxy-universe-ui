<template>
  <div class="content-modal" :class="{ on: showContentsModal === true }">
    <h2 class="content-modal-title">{{ title }}</h2>
    <div class="content-character-box">
      <div class="main-character">
        <h3 class="main-character-title">강숙희</h3>
        <p class="main-character-text">
          신석기 시대부터 성장이 멈춘 채 살아온 불로불사의 괴력 소녀
        </p>
        <p class="main-character-text2">
          " 어째 갈비대 순서 좀 혁명적으로 바뀌고 싶니? "
        </p>
        <ul class="main-character-info">
          <li>
            <div class="title">관력 작품</div>
            <div class="text">신석기녀</div>
          </li>
          <li>
            <div class="title">관력 작품</div>
            <div class="text">신석기녀</div>
          </li>
          <li>
            <div class="title">관력 작품</div>
            <div class="text">신석기녀</div>
          </li>
          <li>
            <div class="title">관력 작품</div>
            <div class="text">신석기녀</div>
          </li>
          <li>
            <div class="title">관력 작품</div>
            <div class="text">신석기녀</div>
          </li>
        </ul>
        <button type="button" class="btn-related" @click="showRelated = true">
          관련 작품 소개
        </button>
      </div>
    </div>
    <div class="related-layer" :class="{ on: showRelated === true }">
      #1 강숙희 이야기 태어나 제일 처음 보고 느끼는 것 ‘빛’ .빛을 통해 온도를
      느끼고 빛을 통해 만물의 에너지를 얻게 된다. 빛의 찰나에 우주는 만들어
      졌으며, 하늘과 땅과 바람, 만물이 생성되며 인간 또한 그 찰나를 통해 만들어
      진다. 다양한 빛의 파장으로 우주는 연결 되며 새로운 빛이 방출 될 때 마다
      우리는 더 거대하고 새로운 것들에 눈을 뜨게 된다. 이 빛은 사람들의 자아를
      깨우고, 사물을 인식하게 하며 기적을 만들기도 한다. 빛은 본능적이고
      비합리적이지만, 자아와 현실세계 사이에 두꺼운 환각을 형성하여 우리 존재의
      가장 깊은 곳에 묻힌 진실의 소재지가 될 수 있다. 그렇기에 빛은 다양한
      양식으로 우리 앞에 나타나는 것이다. 우리는 빛을 “또 하나의 나”로 표현
      하며, 여기에는 실현하지 못한 “꿈”들이 포함되어 있다. 빛은 우리를 밝은
      곳으로도, 어두운 곳으로도, 다른 시/공간으로 데려 갈 수도 있다. 모든 것은
      본인의 간절함과 노력으로 만들고 결정된다. 눈을 뜬 순간부터 우리는 ‘LIGHT
      ON’ 되어 현실을 살아간다. 반대로 우리가 눈을 감는 순간 ‘BLACK ON’이 되어
      상상하는 꿈의 세계로 들어 들어갈 수 있게 된다. 곧 ‘LIGHT ON’은 현실의
      세계, ‘BLACK ON’ 은 가상의 세계에서 모든 스토리와 사건은 시작된다.
      <button type="button" class="modal-close" @click="showRelated = false">
        <span class="blind">닫기</span>
      </button>
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
  name: "CharacterModal",
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
  },
  data() {
    return {
      showRelated: false,
    };
  },
};
</script>

<style scoped></style>
