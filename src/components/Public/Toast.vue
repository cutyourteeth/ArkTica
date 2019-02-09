<template>
  <div class="toast" ref="toast">{{toast.text}}</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    toast: {
      type: Object,
      default () {
        return {
          text: '',
          duration: 0.6,
          bgColor: ''
        }
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toast (text, duration, bgColor) {
      const wrapper = this.$refs.toast

      wrapper.style.display = 'block'
      wrapper.style.backgroundColor = bgColor
      setTimeout
      return this.toast
    }
  },
}
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  padding: 0 4px;
}
</style>
