<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "zlzTabsHead",
  inject: ["eventBus"],
  created() {}
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-self: flex-start;
  align-items: center;
  border: 1px solid red;
  > .actions {
      margin-left: auto;
  }
}
</style>>

