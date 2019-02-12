<template>
  <div class="saver">
    <Alog class="alog" :feed="intro"></Alog>
    <Alog class="alog" v-for="(item,key) in IDBOutput" :key="key" :feed="item"></Alog>
  </div>
</template>

<script type="text/ecmascript-6">
import Alog from './Alog'

export default {
  data () {
    return {
      intro: {
        id: '-1',
        images: ['//img1.ph.126.net/DZ9VjWzv7HlGCn6djhlW3g==/842454605395505044.jpg'],
        date: '2019-2-12',
        text: 'Intro: 这是个大家庭,欢迎您的加入',
        mood: '很棒',
        folder: 'Intro',
        gametime: '-',
        time: '12:47'
      },
      IDBOutput: [{
        // 实例数据结构
        id: '',
        images: [],
        date: '',
        text: '',
        mood: '',
        folder: '',
        gametime: '',
        time: ''
      }]
    }
  },
  components: {
    Alog
  }
}
</script>

<style module lang="stylus">
</style>
