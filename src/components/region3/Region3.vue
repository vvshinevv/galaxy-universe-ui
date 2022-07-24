<template>
  <div class="region-wrap">
    <div class="region-main region3">
      <h1 class="region-main-title">AVA DREAM</h1>
    </div>
    <p class="region-main-text">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
      wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
      lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
      iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
      illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
      odio dignissim qui blandit praesent luptatum zzril delenit augue duis
      dolore te feugait nulla facilisi.
    </p>
    <section class="region-character">
      <h2 class="region-character-title">콘텐츠 살펴보기</h2>
      <ul class="region-card-list">
        <li class="region-card-item">
          <button
            type="button"
            class="image"
            @click="showModal = true"
            style="background-color: yellow"
          >
            <span style="color: #f00; font-size: 30px">콘텐츠모달클릭</span>
            <div class="on"></div>
            <div class="off"></div>
          </button>
        </li>
        <li class="region-card-item">
          <button
            type="button"
            class="image"
            @click="showModal3 = true"
            style="background-color: yellow"
          >
            <span style="color: #f00; font-size: 30px">웹툰모달클릭</span>
            <div class="on"></div>
            <div class="off"></div>
          </button>
        </li>
        <li class="region-card-item">
          <div class="image">
            <div class="on"></div>
            <div class="off"></div>
          </div>
        </li>
        <li class="region-card-item">
          <div class="image">
            <div class="on"></div>
            <div class="off"></div>
          </div>
        </li>
      </ul>
    </section>
    <section class="region-character">
      <h2 class="region-character-title">캐릭터</h2>
      <ul class="region-card-list">
        <li class="region-card-item">
          <button
            type="button"
            class="image"
            @click="showModal2 = true"
            style="background-color: yellow"
          >
            <span style="color: #f00; font-size: 30px">캐릭터소개클릭</span>
            <div class="on"></div>
            <div class="off"></div>
          </button>
        </li>
        <li class="region-card-item">
          <div class="image">
            <div class="on"></div>
            <div class="off"></div>
          </div>
        </li>
        <li class="region-card-item">
          <div class="image">
            <div class="on"></div>
            <div class="off"></div>
          </div>
        </li>
        <li class="region-card-item">
          <div class="image">
            <div class="on"></div>
            <div class="off"></div>
          </div>
        </li>
      </ul>
    </section>
    <section class="region-content-more">
      <h2 class="region-content-title">콘텐츠 살펴보기</h2>
      <ul class="content-image-list">
        <li class="content-image-item">
          <div class="image"></div>
        </li>
        <li class="content-image-item">
          <div class="image"></div>
        </li>
        <li class="content-image-item">
          <div class="image"></div>
        </li>
      </ul>
    </section>
    <section class="region-content-more">
      <h3 class="region-content-more-title">더 알아보기</h3>
      <ul class="content-image-list col2">
        <li class="content-image-item">
          <div class="image"></div>
        </li>
        <li class="content-image-item">
          <div class="image"></div>
        </li>
        <li class="content-image-item">
          <div class="image"></div>
        </li>
        <li class="content-image-item">
          <div class="image"></div>
        </li>
      </ul>
    </section>
    <ContentsModal
      :showContentsModal="showModal"
      :title="'아바드림 1화'"
      :content="contentText"
      v-model:visible="showModal"
    />
    <CharacterModal
      :showContentsModal="showModal2"
      :title="'강숙희'"
      v-model:visible="showModal2"
    />
    <ContentsToonModal
      :showContentsModal="showModal3"
      :title="'아바드림 1화'"
      v-model:visible="showModal3"
    />
  </div>
</template>

<script>
import ContentsModal from "@/components/region3/ContentsModal";
import ContentsToonModal from "@/components/region3/ContentsToonModal";
import CharacterModal from "@/components/region3/CharacterModal";
export default {
  name: "Region3",
  components: { CharacterModal, ContentsModal, ContentsToonModal },
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      contentText:
        "아바드림 1화\n" +
        "\n" +
        "태어나 제일 처음 보고 느끼는 것 ‘빛’ .빛을 통해 온도를 느끼고 빛을 통해 만물의 에너지를 얻게 된다.\n" +
        "빛의 찰나에 우주는 만들어 졌으며, 하늘과 땅과 바람, 만물이 생성되며 인간 또한 그 찰나를 통해 만들어 진다. 다양한 빛의 파장으로 우주는 연결 되며 새로운 빛이 방출 될 때 마다 우리는 더 거대하고 새로운 것들에 눈을 뜨게 된다.  이 빛은 사람들의 자아를 깨우고, 사물을 인식하게 하며 기적을 만들기도 한다.\n" +
        "\n" +
        "빛은 본능적이고 비합리적이지만, 자아와 현실세계 사이에 두꺼운 환각을 형성하여\n" +
        "우리 존재의 가장 깊은 곳에 묻힌 진실의 소재지가 될 수 있다. 그렇기에 빛은 다양한 양식으로 우리 앞에 나타나는 것이다. \n" +
        "\n" +
        "우리는 빛을 “또 하나의 나”로 표현 하며, 여기에는 실현하지 못한 “꿈”들이 포함되어 있다. 빛은 우리를 밝은 곳으로도, 어두운 곳으로도, 다른 시/공간으로 데려 갈 수도 있다. 모든 것은 본인의 간절함과 노력으로 만들고 결정된다.\n" +
        "\n" +
        "눈을 뜬 순간부터 우리는 ‘LIGHT ON’ 되어 현실을 살아간다.\n" +
        "반대로 ",
    };
  },
};
</script>

<style scoped></style>
