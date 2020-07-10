<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <!-- {{selected[level].name}} -->
        {{level}}
        {{item.name}}
        <icon v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <zlz-cascader-items
        :items="rightItems"
        :height="height"
        :selected="selected"
        @update:selected="onUpdateSelected"
        :level="level+1"
      ></zlz-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "ZlzCascaderItems",
  components: { Icon },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      }
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level];
      if (currentSelected && currentSelected.children) {
        return currentSelected.children;
      } else {
        return null;
      }
    }
  },
  methods: {
    onClickLabel(item) {
      //深拷贝
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level+1)
      this.$emit("update:selected", copy);
    },
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    }
  }
};
</script>

<style scoped lang="scss">
@import "var";
.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  // border: 1px solid red;
  .left {
    height: 100%;
    padding: 0.3em 0;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
    // background-color: red;
  }
  .label {
    padding: 0.3em 1em;
    display: flex;
    align-items: center;
    // color: #;
    // justify-content: center
    .g-icon {
      margin-left: 1em;
      transform: scale(0.7);
      color: $border-color-light;
    }
  }
}
</style>