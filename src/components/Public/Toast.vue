<template>
  <div class="toast" ref="toast" v-show="live">{{toast.text}}</div>
</template>

<script type="text/ecmascript-6">
import store from '@/common/js/store.js'
export default {
  props: {
  },
  store,
  data () {
    return {
      live: false,
      type: Object,
      default () {
        return {
          text: this.$store.state.toast.text,
          duration: this.$store.state.toast.duration,
          bgColor: this.$store.state.toast.bgColor
        }
      }
    }
  },
  // 停止请求http
  watch: {
    '$store.state.toast': function () {
      if (this.toast.text) this.pop(this.toast.text, this.toast.duration, this.toast.bgColor)
    }
  },
  methods: {
    pop (text, duration, bgColor="rgba(0,0,0,0.7)") {
      const wrapper = this.$refs.toast
      wrapper.style.backgroundColor = bgColor
      wrapper.innerText = text
      this.live = true
      setTimeout(() => {
        this.live = false
        const newToast = {
          text: '',
          duration: 2000,
          bgColor: ''
        }
        this.$store.commit('addToast', newToast)
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
