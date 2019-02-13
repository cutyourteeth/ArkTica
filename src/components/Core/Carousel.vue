<template>
  <ul class="bgWrapper" ref="wrapper" v-if="!!background">
    <img :src="imageCurrent" class="bgImage" :style="model()" ref="image">
    <div class="left" @click="slide('prev')">
      <a class="iconfont icon-right-arrow slide"></a>
    </div>
    <div class="right" @click="slide('next')">
      <a class="iconfont icon-right-arrow slide"></a>
    </div>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    miniModel: {
      type: Boolean,
      default () {
        return false
      }
    },
    background: {
      type: Array
    }
  },
  data () {
    return {
      imageIndex: 0,
      imageCurrent: null,
      duration: 8000,
      intervalID: null
    }
  },
  watch: {
    'background': function () {
      this.carousel()
      this.intervalID = setInterval(this.carousel, this.duration)
    },
    'this.$refs.image.src': function () {
      this.$refs.wrapper.style.backgroundImage = this.$refs.image.src
    }
  },
  methods: {
    model () {
      if (this.miniModel) return 'filter: blur(0);width:110%;height:auto'
    },
    carousel () {
      const length = this.background.length
      if (this.imageIndex >= length) this.imageIndex = 0
      this.imageCurrent = this.background[this.imageIndex]
      ++this.imageIndex
    },
    slide (direction) {
      const key = this.imageIndex
      const length = this.background.length
      let newKey
      if (direction === 'prev') {
        key <= 0 ? newKey = length - 1 : newKey = key - 1
      }
      if (direction === 'next') {
        key >= length - 1 ? newKey = 0 : newKey = key + 1
      }
      this.imageIndex = newKey
      this.imageCurrent = this.background[this.imageIndex]
    }
  },
  mounted () {

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
  &::before {
    content: " ";
    height: 100%;
    width: 100%;
    background-image: url("//img0.ph.126.net/-7Hk6njU8AF24z5yHFApuA==/1668865137018202872.jpg");
    background-position: center center;
    background-size: 1100% 100%;
    background-repeat: no-repeat;
    z-index: 0;
    filter: blur(20px);
  }
  .bgImage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: auto;
    height: 110%;
    filter: blur(5px);
  }
  .left,
  .right {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 0;
    bottom: 0;
    width: 50px;

    .slide {
      font-size: 24px;
      text-align: right;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }
  .left {
    left: 0px;
    transform: rotate(180deg);
  }
  .right {
    right: 0px;
  }
}
</style>
