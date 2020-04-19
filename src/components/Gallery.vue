<template>
  <div class="gallery">
    <p>Gallery Component Works!</p>
    <p>list: {{list}}</p>
    <p>isLoading: {{isLoading}}</p>
    <button @click="fetchData">重新获取</button>
    <GalleryUnit v-for="(item, index) in pictures" :key="index" :gallery-picture="item" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { pictureWidth, pictureHeight } from '@/api/data';
import GalleryUnit, { GalleryPicture } from './GalleryUnit.vue';
import { AppState } from '../store';

@Component({
  components: {
    GalleryUnit,
  },
})
export default class Gallery extends Vue {
  @Prop() private msg!: string;

  height = 0;

  width = 0;

  get list() {
    return this.$store.state.pictures;
  }

  get pictures(): GalleryPicture[] {
    const { state }: { state: AppState } = this.$store;
    const xPositionMax = this.width - pictureWidth;
    const yPositionMax = this.height - pictureHeight;
    const centerIndex = Math.floor(Math.random() * state.pictures.length);
    return state.pictures.map((p, index) => ({
      ...p,
      positionX: Math.random() * xPositionMax,
      positionY: Math.random() * yPositionMax,
      isCenter: index === centerIndex,
    }));
  }

  get isLoading() {
    return this.$store.state.isLoading;
  }

  mounted() {
    this.fetchData();
    this.height = this.$el.clientHeight;
    this.width = this.$el.clientWidth;
    console.log(this.height);
    console.log(this.width);
  }

  fetchData() {
    this.$store.dispatch('fetchData');
  }
}
</script>

<style lang="less" scoped>
.gallery {
  height: 100%;
}
</style>
