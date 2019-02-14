<template>
  <div id="app">
    <Curtain :theme="theme"></Curtain>
    <Diary></Diary>
    <!-- 浮层 -->
    <Toast :toast="store.state.toast"></Toast>
    <Modal :modal="modal"></Modal>
  </div>
</template>

<script>
import store from '@/common/js/store.js'
import Curtain from '@/components/Curtain/Curtain'
import Diary from '@/components/Diary/Diary'
import Toast from '@/components/Public/Toast'
import Modal from '@/components/Public/Modal'

export default {
  name: 'App',
  data () {
    return {
      loadTime: {
        hour: '',
        minute: '',
        string: ``
      },
      themes: {},
      theme: {},
      toast: {
        text: '',
        duration: 3000,
        bgColor: ''
      }
    }
  },
  store,
  components: {
    Curtain,
    Diary,
    Toast,
    Modal
  },
  computed: {
  },
  watch: {
    themes: function () {
      const name = this.loadTime.hour <= 18 && this.loadTime.hour >= 8 ? 'pole' : 'night'
      this.theme = this.themes[name]
    }
  },
  methods: {
    initialLoadTime () {
      const time = new Date()
      this.loadTime.hour = time.getHours()
      this.loadTime.minute = time.getMinutes()
    }
  },
  created () {
    this.initialLoadTime()
    this.axios
      .get('./static/theme/theme.json')
      .then(response => (this.themes = response.data))
      .catch(error => console.log(error))
  },
  mounted () {
  }
}
</script>

<style>
/* body {
  display: flex;
  justify-content: center;
}
#app {
  width: 100%;
  min-width: 320px;
  max-width: 1920px;
} */
</style>
