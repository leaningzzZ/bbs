<template>
  <el-container class="container" v-loading="loading">讨论区</el-container>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      a: { pageSize: 10, userMsg: this.$store.state.userMsg }
    };
  },
  methods: {
    init() {
      console.log(this.pageSize);
      this.$api.post("/post/showpostlist", this.a).then(res => {
        console.log(res);
        this.loading = false;
      });
    }
  },
  created() {
    console.log(this.pageSize);
    this.init();
  }
};
</script>
<style scoped>
</style>