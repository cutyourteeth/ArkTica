<template>
  <div class="feed">
    <div v-if="!!feed.images.length" class="images" ref="images">
      <Carousel class="feedImages" :background="feed.images" :miniModel="true"></Carousel>
      <!-- <Modal class="expanded"></modal> -->
    </div>
    <article>
      <h2 class="date">{{feed.date}}</h2>
      <p class="text">{{feed.text}}</p>
      <div class="footer">
        <div class="left">
          <span class="mood">{{feed.mood}}</span>
          <span class="folder">{{feed.folder}}</span>
        </div>
        <div class="right">
          <span class="time" v-if="!!feed.gametime">花了{{feed.gametime}}s算出了答案</span>
          <span class="time">{{feed.time}}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
import Carousel from '@/components/Core/Carousel'
// import { addClass } from '@/common/js/utils.js'
export default {
  props: {
    feed: {
      type: Object,
      default () {
        return {
          id: '',
          images: [],
          date: '',
          text: '',
          mood: '',
          folder: '',
          gametime: '',
          time: ''
        }
      }
    }
  },
  data () {
    return {
    }
  },
  components: {
    Carousel
  },
  methods: {
    // resizeThumb () { // 重置显示模式
    //   let images = this.$refs.images
    //   for (let i = 0; i < images.length; i++) {
    //     const image = images[i]
    //     const scale = (image.width / image.height).toFixed(1)
    //     if (scale > 2) addClass(image, 'wide')
    //     else addClass(image, 'tall')
    //   }
    // }
  }
}
</script>

<style scoped lang="scss">
@import "../../../common/scss/mixin.scss";
.feed {
  width: 300px;
  margin: 10px auto 30px;
  min-height: 300px;
  background-color: gray;

  .images {
    display: flex;
    position: relative;
    flex-flow: row nowrap;
    width: 300px;
    border-bottom: 1px white solid;
    height: 140px;
    overflow: hidden;
    justify-content: flex-start;

    & > img {
      width: 300px;
      height: 1;
      .tall {
        width: 100%;
        height: auto;
      }
      .height {
        height: 100%;
        width: auto;
      }
    }
  }
  .date {
    height: 40px;
    line-height: 40px;
    color: $lightGreen;
    font-size: 20px;
    font-weight: 500;
  }
  .text {
    margin: 20px 0;
    font-size: 16px;
    line-height: 1.5;
  }
  .footer {
    display: flex;
    height: 20;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 5px 10px;
    font-size: 14px;
    .left {
      .mood {
        font-size: 14px;
      }
      .folder {
        font-size: 14px;
      }
    }
    .right {
      .time {
        font-size: 14px;
      }
    }
  }
}
</style>
