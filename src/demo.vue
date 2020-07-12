<template>
  <div style="padding:20px">
    <p></p>
    <g-cascader
      :source.sync="source"
      popover-height="200px"
      :selected.sync="selected"
      :load-data="loadData"
    ></g-cascader>
    <g-button>asdasd</g-button>
  </div>
</template>

<script>
import Cascader from "./cascader";
import Button from "./button/button"
import db from "./db";

function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId);
      result.forEach(node=>{
        if(db.filter(item=>item.parent_id===node.id).length>0){
          node.isLeaf=false
        }else{
          node.isLeaf=true
        }
      })
      success(result);
    }, 300);
  });
}

export default {
  name: "demo",
  components: {
    "g-cascader": Cascader,
    "g-button":Button
  },
  data() {
    return {
      selected: [],
      source: []
    };
  },
  created() {
    ajax(0).then(result => {
      this.source = result;
    });
  },
  methods: {
    loadData(item,updateSource){
      let {name,id,parent_id}=item
      ajax(id).then(result=>{
        updateSource(result) //回调：把别人传给我的函数调用一次
      })
    },
    xxx() {
      ajax(this.selected[0].id).then(result => {
        let lastLevelSelected = this.source.filter(
          item => item.id === this.selected[0].id
        )[0];
        // lastLevelSelected.children = result;
        this.$set(lastLevelSelected,'children',result)
      });
    }
  }
};
</script>
<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
html {
  --font-size: 14px;
}
body {
  font-size: var(--font-size);
}
</style>