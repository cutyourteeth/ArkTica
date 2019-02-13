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
        images: ['//img1.ph.126.net/DZ9VjWzv7HlGCn6djhlW3g==/842454605395505044.jpg',
          '//p0.qhimgs4.com/t014670a5ccb489e3a7.jpg',
          '//imglf4.nosdn0.126.net/img/ZGVQZFdlV2hqMmFCRU5CRGcvS0g1My92T2phZWRiZmpFcFdpa1QxcVgraGRoMHkrU2lHN2hnPT0.jpg'],
        date: '2019-2-12',
        text: 'Intro: 这是个大家庭,欢迎您的加入',
        mood: '很棒',
        folder: 'Intro',
        gametime: '52',
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

<style lang="scss">
.saver {
  min-width: 270px;
  max-width: 760px;
  margin: 0 auto;
}
</style>
