<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "zlzTabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  // created(){
  //     this.eventBus.$on('update:selected',(name)=>{
  //         console.log(name)
  //     })
  // },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name => {
        if (name === this.name) {
          // console.log(`我${this.name}被选中了`);
          this.active = true;
        } else {
          // console.log(`我${this.name}没被选中`)
          this.active = false;
        }
      });
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit('click',this)
    }
  }
};
</script>
<style lang="scss" scoped>
$blue: blue;
$disabled-text-color: grey;

.tabs-item {
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>>

