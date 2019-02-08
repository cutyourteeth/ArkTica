<template>
  <div id="app">
    <Curtain></Curtain>
    <Diary></Diary>
  </div>
</template>

<script>
import Curtain from '@/components/Curtain/Curtain'
import Diary from '@/components/Diary/Diary'

export default {
  name: 'App',
  components: {
    Curtain,
    Diary
  }
}
</script>

<style>
#app {
}
</style>
