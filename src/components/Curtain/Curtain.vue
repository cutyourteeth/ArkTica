<template>
  <div class="curtainWrapper">
    <div class="bgWrapper">
      <div class="bg" :ref="bg"></div>
      <div class="icon-font icon-right-arrow" @click="slide('prev')"></div>
      <div class="icon-font icon-right-arrow" @click="slide('next')"></div>
    </div>
    <button class="entry">welcome</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      background: [
        {
          theme: 'pole',
          src: [
            '//img0.ph.126.net/-7Hk6njU8AF24z5yHFApuA==/1668865137018202872.jpg',
            '//img1.ph.126.net/ib0cZbgkrnyKLdfJ_hVvyg==/6597838325286995212.jpg',
            '//img1.ph.126.net/rnHXMP8NR5ypclBlkN_DRw==/1706301308920514296.jpg',
            '//img1.ph.126.net/lFiKB5rjttuXZhFC_dZaNA==/6597352341147786499.jpg'
          ]
        },
        {
          theme: 'city',
          src: [
            '//img0.ph.126.net/-7Hk6njU8AF24z5yHFApuA==/1668865137018202872.jpg',
            '//img1.ph.126.net/ib0cZbgkrnyKLdfJ_hVvyg==/6597838325286995212.jpg',
            '//img1.ph.126.net/rnHXMP8NR5ypclBlkN_DRw==/1706301308920514296.jpg',
            '//img1.ph.126.net/lFiKB5rjttuXZhFC_dZaNA==/6597352341147786499.jpg'
          ]
        }
      ]
    }
  },
  methods: {
    carousel () {
      new Promise(function (resolve, reject) {
        if (this.$refs.bg.onload) {
          resolve(value)
        } else {
          reject(error)
        }
      })
    }
  },
}
</script>

<style scoped lang="scss">
</style>
