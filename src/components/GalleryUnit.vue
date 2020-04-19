<template>
  <div
    class="unit-container"
    v-bind:style="{
      top: galleryPicture.positionY + 'px',
      left: galleryPicture.positionX + 'px',
      transform: `rotate(${galleryPicture.rotate}deg)`,
      zIndex: galleryPicture.zIndex,
      }"
    @click="onClick(galleryPicture.id)"
  >
    <p>{{galleryPicture.title}}</p>
    <img :src="galleryPicture.url" />
    <p>{{galleryPicture.description}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GalleryPicture } from '@/store';


@Component
export default class GalleryUnit extends Vue {
  @Prop() galleryPicture!: GalleryPicture;

  onClick(index: number) {
    this.$emit('makeUnitCenter', index);
  }
}
</script>

<style lang="less" scoped>
.unit-container {
  position: absolute;
  width: 500px;
  text-align: center;
  transition: top 2s, left 2s, transform 500ms;
  background-color: wheat;
  cursor: pointer;
  // img {
  //   height: 65%;
  // }
}
</style>
