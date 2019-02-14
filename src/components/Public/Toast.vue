<template>
  <div class="toast" ref="toast" v-if="live">{{toast.text}}</div>
</template>

<script type="text/ecmascript-6">
import store from '@/common/js/store.js'
export default {
  props: {
    toast: {
      type: Object,
      default () {
        return {
          text: '',
          duration: 3000,
          bgColor: ''
        }
      }
    }
  },
  data () {
    return {
      live: false
    }
  },
  watch: {
    'toast.text': function () {
      if (this.toast.text) this.pop(this.toast.text, this.toast.duration, this.toast.bgColor)
    }
  },
  methods: {
    pop (text, duration, bgColor) {
      const wrapper = this.$refs.toast
      wrapper.style.backgroundColor = bgColor
      wrapper.innerText = text
      this.live = true
      setTimeout(function () {
        this.live = false
      }, duration)
    }
  }
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
