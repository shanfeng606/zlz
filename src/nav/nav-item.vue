<template>
  <div class="g-nav-item" :class="{selected}" @click="onClick">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"ZlzNavItem",
    props:{
        name:{
            type:String,
            required:true
        }
    },
    data () {
      return {
        selected: false
      }
    },
    methods: {
      onClick () {
        // this.root.namePath = []
        // this.$parent.updateNamePath && this.$parent.updateNamePath()
        this.$emit('update:selected', this.name)
      }
    }
}
</script>

<style scoped lang="scss">
.g-nav-item{
    padding: 10px 20px;
    &.selected{
        background: red;
    }
}
</style>