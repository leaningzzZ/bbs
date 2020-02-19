<template>
  <div>
    <el-menu
      :default-active="$route.name"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="HomePage">讨论区</el-menu-item>
      <el-menu-item index="PostPage">我要发贴</el-menu-item>
      <el-menu-item index="AboutMe">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    handleSelect(key) {
      this.$router.push({ name: key });
    }
  }
};
</script>
<style scoped>
</style>