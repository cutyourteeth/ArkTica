<template>
  <div id="app">
    <Curtain :loadTime="loadTime"></Curtain>
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
        string: `${this.hour}:${this.minute}`
      }
    }
  },
  components: {
    Curtain,
    Diary
  },
  methods: {
    initialLoadTime () {
      const time = new Date()
      this.loadTime.hour = time.getHours()
      this.loadTime.minute = time.getMinutes()
    }
  },
  mounted () {
    this.initialLoadTime()
  }
}
</script>

<style>
#app {
}
</style>
