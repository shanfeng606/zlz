<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected=item">
        {{item.name}}
        <icon v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <zlz-cascader-items :items="rightItems" :height="height"></zlz-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from './icon'
export default{
    name:"ZlzCascaderItems",
    components:{Icon},
    props:{
        items:{
          type:Array
        },
        height:{
          type:String
        }
    },
    data(){
      return{
        leftSelected:null
      }
    },
    computed:{
      rightItems(){
        if(this.leftSelected && this.leftSelected.children){
          return this.leftSelected.children
        }else{
          return null
        }
      }
    }
}
</script>

<style scoped lang="scss">
@import "var";
.cascaderItem{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  // border: 1px solid red;
  .left{
    height: 100%;
    padding:.3em 0;
  }
  .right{
    height: 100%;
    border-left: 1px solid $border-color-light;
    // background-color: red;

  }
  .label{
    padding:.3em 1em;
    display: flex;
    align-items: center;
    // color: #;
    // justify-content: center
    .g-icon{
      margin-left: 1em;
      transform: scale(0.7);
      color: $border-color-light;

    }
    
  }

}
</style>