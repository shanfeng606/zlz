<template>
  <div style="padding:20px">
    <p></p>
    <g-cascader :source="source" popover-height="200px" 
    :selected.sync="selected"
    ></g-cascader>
    <p>22222</p>
  </div>
</template>

<script>
import Cascader from "./cascader";
import db from './db'

function ajax(parentId=0){
  return db.filter((item)=>item.parent_id==parentId)
}
console.log(ajax())

export default {
  name: "demo",
  components: {
    "g-cascader": Cascader
  },
  data() {
    return {
      selected:[],
      source: ajax()
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