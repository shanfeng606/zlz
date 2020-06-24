<template>
  <div class="tabs-item" @click="xxx" :class="classes">
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
    // active:{
    //     type:Boolean,
    //     default:false
    // },
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
        active: this.active
      };
    }
  },
  // created(){
  //     this.eventBus.$on('update:selected',(name)=>{
  //         console.log(name)
  //     })
  // },
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        console.log(`我${this.name}被选中了`)
        this.active = true;
      } else {
        // console.log(`我${this.name}没被选中`)
        this.active = false;
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
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  &.active{
      background: red;
  }
}
</style>>

