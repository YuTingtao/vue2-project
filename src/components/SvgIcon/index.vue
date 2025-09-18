<template>
  <svg class="svg-icon" aria-hidden="true" :width="size" :height="size">
    <use :xlink:href="symbolId" rel="external nofollow" :fill="color" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  },
  computed: {
    symbolId() {
      return `#icon-${this.name}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-icon {
    vertical-align: middle;
}
</style>
