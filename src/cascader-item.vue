<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <zlz-cascader-item 
    v-for="item in sourceItem.children" 
    v-if="sourceItem.children" 
    :sourceItem="item">
    </zlz-cascader-item>
  </div>
</template>

<script>
export default{
    name:"ZlzCascaderItem",
    props:{
        sourceItem:{
            type:Object
        }
    }
}
</script>

<style>
</style>