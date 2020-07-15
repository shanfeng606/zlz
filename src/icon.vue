<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
// import "./svg";
// import {svg} from '//at.alicdn.com/t/font_1878994_ctgjepvebk7.js'

export default {
  name: "zlzIcon",
  props: ["name"]
};
</script>
<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>
