<template>
  <div>
    <g-nav :selected.sync="selected" :multiple="false">
      <g-nav-item name="home">首页</g-nav-item>
      <g-nav-item name="about">关于</g-nav-item>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
  </div>
</template>

<script>
import GNav from "./nav/nav";
import GNavItem from "./nav/nav-item";
import GSubNav from "./nav/sub-nav";

export default {
  name: "demo",
  data() {
    return {
      selected: ["home"]
    };
  },
  components: { GNav, GNavItem, GSubNav },
  created() {}
};
</script>
<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>