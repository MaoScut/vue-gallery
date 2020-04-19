<template>
  <div
    class="unit-container"
    v-bind:style="{ top: galleryPicture.positionY + 'px', left: galleryPicture.positionX + 'px' }"
  >
    <p>{{galleryPicture.title}}</p>
    <img :src="galleryPicture.url" />
    <p>{{galleryPicture.description}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Picture } from '@/api/data';

export interface GalleryPicture extends Picture {
  positionX: number;
  positionY: number;
  isCenter: boolean;
}

@Component
export default class GalleryUnit extends Vue {
  @Prop() galleryPicture!: GalleryPicture;
}
</script>

<style lang="less" scoped>
.unit-container {
  position: absolute;
}
</style>
