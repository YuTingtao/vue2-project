<template>
  <el-image-viewer
    v-if="visible"
    :url-list="urlList"
    :on-close="onClose"
  />
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer.vue'
export default {
  name: 'ImgViewer',
  components: {
    ElImageViewer
  },
  model: {
    prop: 'visible',
    event: 'close'
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    urlList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    }
  },
  created() {},
  methods: {
    onClose() {
      this.$emit('close', false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
