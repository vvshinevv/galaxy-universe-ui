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
                    <button type="button" class="image" @click="showModal = true" style="background-color: yellow">
                        <div class="on"></div>
                        <div class="off"></div>
                    </button>
                </li>
                <li class="region-card-item">
                    <button type="button" class="image" @click="showModal2 = true">
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
                    <button type="button" class="image" @click="showModal2 = true" style="background-color: yellow">
                        <div class="on"></div>
                        <div class="off"></div>
                    </button>
                </li>
                <li class="region-card-item">
                    <button type="button" class="image" @click="showModal2 = true">
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
        <ContentsModal :showContentsModal="showModal" :title="'아바드림 1화'" :content="'가나다라마바사'" v-model:visible="showModal"/>
        <CharacterModal :showContentsModal="showModal2"  :title="'강숙희'" v-model:visible="showModal2"/>
    </div>
</template>

<script>
import ContentsModal from "@/components/region3/ContentsModal";
import CharacterModal from "@/components/region3/CharacterModal";
export default {
    name: "Region3",
    components: {CharacterModal, ContentsModal},
    data() {
        return {
            showModal: false,
            showModal2: false,

        };
    },
}
</script>

<style scoped>

</style>
