<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
    </div>
    <div class="popover-wrapper" v-if="popoverVisible"> 
        <cascader-items :items="source" :height="popoverHeight" :selected="selected"
         @update:selected="onUpdateSelected"></cascader-items>
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
    },
    popoverHeight:{
      type:String
    },
    selected:{
      type:Array,
      default:()=>{return []}
    },
    

  },
  data(){
    return{
      popoverVisible:false,
    }
  },
  methods:{
    onUpdateSelected(newSelected){
      this.$emit('update:selected',newSelected)
    }
  }
};
</script>

<style scoped lang="scss">
@import "var";

.cascader {
  position: relative;
  .trigger{
    border: 1px solid red;
    width: 100px;
    height:32px;
  }
  .popover-wrapper{
    @extend .box-shadow;
    // border: 1px solid red;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    .label{
      white-space: nowrap;
    }
  }
}
</style>