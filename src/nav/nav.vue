<template>
  <div class="g-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZlzNav",
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },

  mounted() {
    this.updateChildren();
    this.listenToChildren();
  },
  computed: {
    items() {
      return this.$children.filter(vm => vm.$options.name === "ZlzNavItem");
    }
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    updateChildren() {
      this.items.forEach(vm => {
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on("update:selected", name => {
          if (this.multiple) {
            if (this.selected.indexOf(name) < 0) {
              let copy = JSON.parse(JSON.stringify(this.selected));
              copy.push(name);
              this.$emit("update:selected", copy);
            }
          } else {
            this.$emit("update:selected", [name]);
          }
        });
      });
    }
  }
};
</script>

<style scoped lang="scss">
.g-nav {
  display: flex;
  border: 1px solid red;
}
</style>