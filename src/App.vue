<template>
  <div id="app">
    <Curtain :theme="theme"></Curtain>
    <Diary></Diary>
  </div>
</template>

<script>
import Curtain from '@/components/Curtain/Curtain'
import Diary from '@/components/Diary/Diary'

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
      theme: {}
    }
  },
  components: {
    Curtain,
    Diary
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
</style>
