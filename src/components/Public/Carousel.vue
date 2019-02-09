<template>
  <div>
    <ul class="bgWrapper" ref="bgWrapper" v-if="theme.length!==0">
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
// import {getById,getByClass} from '@/common/js/wrapper.js'
export default {
  props: {
    theme: {
      type: Object
    }
  },
  data () {
    return {
      imageCurrent: '',
      imageIndex: 0
    }
  },
  computed: {
  },
  methods: {
    carousel () {
      if (this.imageIndex === this.theme.background.length) this.imageIndex = 0
      this.imageCurrent = this.theme.background[this.imageIndex]
      return this.imageIndex++
    }
  },
  updated () {
    this.carousel()
    // setInterval(this.carousel(), 8000)
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
