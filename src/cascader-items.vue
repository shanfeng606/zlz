<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <span class="icons">
          <template v-if="item.name===loadingItem.name">
            <icon class="loading" name="loading"></icon>
          </template>
          <template v-else>
            <icon class="next" v-if="rightArrowVisible(item)" name="right"></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <zlz-cascader-items
        :items="rightItems"
        :height="height"
        :selected="selected"
        :load-data="loadData"
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
    loadingItem: {
      type: Object,
      default: () => ({})
    },
    loadData: {
      type: Function
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
      if (this.selected[this.level]) {
        let selected = this.items.filter(
          item => item.name === this.selected[this.level].name
        );
        if (
          selected &&
          selected[0].children &&
          selected[0].children.length > 0
        ) {
          return selected[0].children;
        }
      }
    }
  },
  methods: {
    rightArrowVisible(item) {
      return this.loadData ? !item.isLeaf : item.children;
    },
    onClickLabel(item) {
      //深拷贝
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
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
    box-sizing: border-box;
    padding: 0.3em 0;
    overflow: auto;
    // overflow-y:hidden;
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
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      background-color: $grey;
    }
    .name {
      margin-right: 1em;
    }
    .icons {
      margin-left: auto;
      .next {
        transform: scale(0.5);
        fill:$border-color;
      }
      .loading {
        animation: spin 2s infinite linear;
      }
    }
  }
}
</style>