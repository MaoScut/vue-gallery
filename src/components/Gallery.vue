<template>
  <div>
    <p>Gallery Component Works!</p>
    <p>list: {{list}}</p>
    <p>isLoading: {{isLoading}}</p>
    <button @click="fetchData">重新获取</button>
    <GalleryUnit :gallery-picture="pictures[0]"/>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import GalleryUnit, { GalleryPicture } from './GalleryUnit.vue';

@Component({
  components: {
    GalleryUnit,
  },
})
export default class Gallery extends Vue {
  @Prop() private msg!: string;

  pictures: GalleryPicture[] = [{
    title: 'p1',
    url: '/pictures/wallhaven-15776.jpg',
    description: 'p1 desc',
    positionX: 0,
    positionY: 0,
    isCenter: false,
  }];

  get list() {
    return this.$store.state.pictures;
  }

  get isLoading() {
    return this.$store.state.isLoading;
  }

  mounted() {
    this.fetchData();
  }

  fetchData() {
    this.$store.dispatch('fetchData');
  }
}
</script>
