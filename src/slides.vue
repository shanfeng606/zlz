<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span v-for="n in childrenLength" :class="{active:select}" @click="select(n-1)">{{n}}</span>
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
      lastSelectedIndex: undefined
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
    playAutomatically() {
      // const names = this.$children.map(vm => vm.name);
      let index = this.names.indexOf(this.getSelected());
      let run = () => {
        let newIndex = index - 1;
        if (newIndex === -1) {
          newIndex = this.names.length - 1;
        }
        if (newIndex === this.names.length) {
          newIndex = 0;
        }
        // this.$emit("update:selected", this.names[newIndex]);
        this.select(newIndex);
        setTimeout(run, 3000);
      };
      // setTimeout(run, 3000);
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
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
        this.reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
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
}
</style>