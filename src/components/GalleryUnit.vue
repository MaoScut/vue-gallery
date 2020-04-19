<template>
  <div>
    <p>{{galleryPicture.title}}</p>
    <img :src="galleryPicture.url" />
    <p>{{galleryPicture.description}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Picture } from '@/api/picture';


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
