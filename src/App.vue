<template>
  <div id="app">
    <el-header>
      <top-bar></top-bar>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>
<script>
import TopBar from "./components/TopBar/topBar";
export default {
  components: {
    TopBar
  }
};
</script>
<style>
</style>
