<template>
  <div>
    <g-nav :selected.sync="selected" :multiple="false">
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav>
        <template slot="title">关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-nav-item name="contacts">联系电话</g-nav-item>
        <g-sub-nav>
          <template slot="title">联系方式</template>
          <g-nav-item name="contacts">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <!-- <g-nav-item name="phone">手机</g-nav-item> -->
          <g-sub-nav>
            <template slot="title">手机</template>
            <g-nav-item name="yd">移动</g-nav-item>
            <g-nav-item name="lt">联通</g-nav-item>
            <g-nav-item name="dx">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>

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