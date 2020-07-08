<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible"> 
        <cascader-items :items="source"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items";
export default {
  name: "zlzCascader",
  components: { CascaderItems },
  props: {
    source: {
      type: Array
    }
  },
  data(){
    return{
      popoverVisible:false,
      level1Selected:null,
      level2Selected:null
    }
  },
  computed:{
    level2Items(){
      if(this.level1Selected){
        return this.level1Selected.children
      }else{
        return []
      }
    },
    level3items(){
      if(this.level2Selected){
        return this.level2Selected.children
      }else{
        return []
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "var";

.cascader {
  .trigger{
    border: 1px solid red;
    width: 200px;
    height:50px;
  }
}
</style>