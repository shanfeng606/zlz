<template>
  <div>
    <p>11111</p>
    <g-cascader :source="source" popover-height="200px"></g-cascader>
    <p>22222</p>
  </div>
</template>

<script>
import Cascader from "./cascader";
export default {
  name: "demo",
  components: {
    "g-cascader": Cascader
  },
  data() {
    return {
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [
                { name: "上城1" },
                { name: "上城1" },
                { name: "上城1" }
              ]
            },
            {
              name: "嘉兴",
              children: [
                { name: "上城2" },
                { name: "上城2" },
                { name: "上城2" }
              ]
            }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [
                { name: "上城3" },
                { name: "上城3" },
                { name: "上城3" }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img{max-width: 100%;}
html {
  --font-size: 14px;
}
body {
  font-size: var(--font-size);
}
</style>