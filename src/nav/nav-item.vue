<template>
  <div class="g-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZlzNavItem",
  inject: ["root"],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  },
  created() {
    this.root.addItem(this);
  },
  methods: {
    onClick() {
      // this.root.namePath = []
      // this.$parent.updateNamePath && this.$parent.updateNamePath()
      this.$emit("update:selected", this.name);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../var";
// 一级菜单样式---------------------------
.g-nav-item {
  padding: 10px 20px;
  position: relative;
  &.selected {
    &::after {
      content:'';
      position:absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid $blue;
      width: 100%;
    }
  }
}
// 二级菜单样式-----------------------------
.g-sub-nav .g-nav-item{
    &.selected {
      color: $color;
      background: $grey;
      &::after {
        display: none;
      }
    }
  }
</style>