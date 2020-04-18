<template>
  <div>
    <p>Gallery Component Works!</p>
    <p>list: {{list}}</p>
    <p>isLoading: {{isLoading}}</p>
    <button @click="fetchData">重新获取</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Gallery extends Vue {
  @Prop() private msg!: string;

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
