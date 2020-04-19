<template>
  <div class="gallery">
    <!-- <p>Gallery Component Works!</p>
    <p>list: {{list}}</p>
    <p>isLoading: {{isLoading}}</p>
    <button @click="fetchData">重新获取</button>-->
    <GalleryUnit
      @makeUnitCenter="makeUnitCenter"
      v-for="(item, index) in pictures"
      :key="index"
      :gallery-picture="item"
    />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import { pictureWidth, pictureHeight } from '@/api/data';
import GalleryUnit from './GalleryUnit.vue';
import { AppState, GalleryPicture } from '../store';

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
    return state.pictures;
  }

  get isLoading() {
    return this.$store.state.isLoading;
  }

  mounted() {
    this.fetchData();
    this.height = this.$el.clientHeight;
    this.width = this.$el.clientWidth;
  }

  fetchData() {
    this.$store.dispatch('fetchData').then(() => {
      setTimeout(() => {
        this.$store.commit('spread', {
          xAxisMax: this.$el.clientWidth,
          yAxisMax: this.$el.clientHeight,
        });
      }, 500);
    });
  }

  makeUnitCenter(id: number) {
    this.$store.commit('makeCenter', {
      xAxisMax: this.$el.clientWidth,
      yAxisMax: this.$el.clientHeight,
      id,
    });
  }
}
</script>

<style lang="less" scoped>
.gallery {
  height: 100%;
}
</style>
