<template>
  <div class="g-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span v-for="n in childrenLength" 
      :class="{active: selectedIndex === n-1}" 
      @click="select(n-1)">{{n}}</span>
    </div>
  </div>
</template>

<script>
export default {
  // name:GSlides
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined
    };
  },

  mounted() {
    this.updateChildren();
    this.playAutomatically();
    this.childrenLength = this.$children.length;
    this.lastSelectedIndex = this.selected;
  },

  updated() {
    this.updateChildren();
  },

  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected);
      return index === -1 ? 0 : index;
    },
    names() {
      return this.items.map(vm => vm.name);
    },
    items() {
      return this.$children.filter(vm => vm.$options.name === "GuluSlidesItem");
    }
  },

  methods: {
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.playAutomatically();
    },
    playAutomatically() {
      if (this.timerId) {
        return;
      }
      // const names = this.$children.map(vm => vm.name);
      let run = () => {
        let index = this.names.indexOf(this.getSelected());
        let newIndex = index - 1;
        if (newIndex === -1) {
          newIndex = this.names.length - 1;
        }
        if (newIndex === this.names.length) {
          newIndex = 0;
        }
        // this.$emit("update:selected", this.names[newIndex]);
        this.select(newIndex);
        this.timerId = setTimeout(run, 1000);
      };
      this.timerId = setTimeout(run, 1000);
    },
    pause() {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
    },
    select(newIndex) {
      this.lastSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[newIndex]);
    },
    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach(vm => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (this.timerId) {
          if (
            this.lastSelectedIndex === this.items.length - 1 &&
            this.selectedIndex === 0
          ) {
            reverse = false;
          }
          if (
            this.lastSelectedIndex === 0 &&
            this.selectedIndex === this.items.length - 1
          ) {
            reverse = true;
          }
        }
        vm.reverse = reverse;
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.g-slides {
  &-window {
    overflow: hidden;
  }
  // display: inline-block;
  &-wrapper {
    position: relative;
  }
  &-dots {
      padding: 8px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        width: 20px;
        height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #ddd;
        border-radius: 50%;
        margin: 0 8px;
        font-size: 12px;
        &:hover {
          cursor: pointer;
        }
        &.active {
          background: black;
          color: white;
          &:hover {
            cursor: default;
          }
        }
      }
    }

}
</style>