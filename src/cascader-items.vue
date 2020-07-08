<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected=item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <zlz-cascader-item :items="rightItems"></zlz-cascader-item>
    </div>
  </div>
</template>

<script>
export default{
    name:"ZlzCascaderItem",
    props:{
        items:{
          type:Array
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
.cascaderItem{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .right{
    margin-top: -1px;
  }
}
</style>