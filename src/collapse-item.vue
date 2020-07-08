<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "zlzCollapseItem",

  props: {
    title: {
      type: String,
      requires: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false,
    };
  },
  inject: ["eventBus"],
  mounted() {
      //所有内容的显示均由父组件来更新，实现单向数据流
    this.eventBus &&
      this.eventBus.$on("update:selected", (names) => {
        if (names.indexOf(this.name) >= 0) {
            // console.log(2)
          this.open=true
        } else {
            this.open=false
        }
      });
  },
  methods: {
    //点击 告诉父组件 更新选中数组
    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
      }
    },
   
  }
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse-item {
  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 4px 8px;
  }
}
</style>
