<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "zlzTabsPane",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active:this.active
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        // console.log(`pane${this.name}被选中了`);
        this.active=true
      } else {
        // console.log(`pane${this.name}没被选中`);
        this.active=false
      }
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-pane {
    padding:1em;
    &.active{
    //   background-color: red;
  }
}
</style>>

