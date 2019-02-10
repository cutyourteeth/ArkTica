<template>
  <div>
    <ul class="bgWrapper" ref="bgWrapper">
      <img :src="imageCurrent" class="bgImage">
      <div class="left">
        <a class="iconfont icon-right-arrow slide" @click="slide(key,'next')"></a>
      </div>
      <div class="right">
        <a class="iconfont icon-right-arrow slide" @click="slide(key,'prev')"></a>
      </div>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    theme: {
      type: Object,
      default () {
        return {
          text: '',
          background: []
        }
      }
    }
  },
  data () {
    return {
      background: [],
      imageIndex: 0,
      imageCurrent: null
    }
  },
  watch: {
    theme: function () {
      this.background = this.theme.background
    },
    background: function () {
      this.carousel()
      setInterval(this.carousel, 8000)
    }
  },
  methods: {
    carousel () {
      if (this.imageIndex === this.background.length) this.imageIndex = 0
      this.imageCurrent = this.background[this.imageIndex]
      return this.imageIndex++
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

  .bgImage {
    position: absolute;
    left: -5%;
    top: -5%;
    width: 110vw;
    height: 110%;
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
