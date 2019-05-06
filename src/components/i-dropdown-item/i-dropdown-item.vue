<template>
  <li :class="{disabled: disabled, divided:divided}">
    <slot></slot>
  </li>
</template>

<script>
export default {
name: 'i-dropdown-item',
  props: {
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否显示上分割线
    divided: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.disabled{
  color: gray;
  cursor: not-allowed;
}

.divided{
  border-top: 1px solid gray
}
</style>
