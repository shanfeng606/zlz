<template>
  <button
    class="g-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from '../icon'
export default {
  name:'zlzButton',
  components:{
    'g-icon':Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "./src/var.scss";
@import "../var";
// $border-color-hover:#666;
// $border-color:#999;
// $border-color-light:lighten($border-color,10%);
// $border-radius:4px;
// $box-shadow-color: rgba(0, 0, 0, 0.5);
// $button-active-bg:#eee;
// $button-bg:white;
// $button-height:32px;
// $color:#333;
// $font-size:14px;
// $height: 32px;
// $red: #f1453d;
// $grey:#eee;





.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.2rem;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.2rem;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
