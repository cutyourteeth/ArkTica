<template>
  <div>
    <ul class="bgWrapper" ref="bgWrapper">
      <li v-for="(item,key) in background.pole" :key="key">
        <img :src="item" class="bgImage">
        <div class="left">
          <a class="iconfont icon-right-arrow slide" @click="slide(key,'next')"></a>
        </div>
        <div class="right">
          <a class="iconfont icon-right-arrow slide" @click="slide(key,'prev')"></a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      background: {
        'pole': [
          '//img0.ph.126.net/-7Hk6njU8AF24z5yHFApuA==/1668865137018202872.jpg',
          '//img1.ph.126.net/ib0cZbgkrnyKLdfJ_hVvyg==/6597838325286995212.jpg',
          '//img1.ph.126.net/rnHXMP8NR5ypclBlkN_DRw==/1706301308920514296.jpg',
          '//img1.ph.126.net/lFiKB5rjttuXZhFC_dZaNA==/6597352341147786499.jpg'
        ],
        'city': [
          '//img0.ph.126.net/-7Hk6njU8AF24z5yHFApuA==/1668865137018202872.jpg',
          '//img1.ph.126.net/ib0cZbgkrnyKLdfJ_hVvyg==/6597838325286995212.jpg',
          '//img1.ph.126.net/rnHXMP8NR5ypclBlkN_DRw==/1706301308920514296.jpg',
          '//img1.ph.126.net/lFiKB5rjttuXZhFC_dZaNA==/6597352341147786499.jpg'
        ]
      }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.bgWrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  list-style: none;

  .bgImage {
    width: 100vw;
    height: 100%;
    filter: blur(5px);
    z-index: -1;
  }
  .left,
  .right {
    position: absolute;
    top: 0;
    bottom: 0;

    .slide {
      position: absolute;
      width: 500px;
      top: 50%;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  .left {
    left: 0;
    transform: rotate(180deg);
  }
  .right {
    right: 0;
  }
}
</style>
