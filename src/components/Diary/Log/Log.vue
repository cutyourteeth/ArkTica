<template>
  <div class="logWrapper">
    <h2 class="logTitle">theme.logTitle</h2>
    <form class="note">
      <label for="folder">
        <select name="folder" class="folderSelector">
          <option>create a new folder</option>
        </select>
      </label>
      <label for="log">
        <textarea name="log" class="logArea"></textarea>
      </label>
      <a class="iconfont icon-right-arrow expander"></a>
      <input type="file" multiple="multiple">
      <div class="imageArray">
        <div class="imageRect"></div>
      </div>
      <a class="logSubmit" @click="uploadCheck">Submit</a>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
import store from '@/common/js/store.js'

export default {
  data () {
    return {
      newLog: {
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
  },
  store,
  methods: {
    uploadCheck () {
      // 测试toast
      this.$store.commit('addToast', 'testing')
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
@import "../../../common/scss/mixin.scss";
.logWrapper {
  display: flex;
  flex-flow: column wrap;
  @include diary-content(90%, 660px);
  min-height: 45vh;
  margin: 30px auto 70px;
  padding: 30px auto;
  color: rgba(57, 57, 57, 1);
  text-align: center;
  text-shadow: 1px 1px 3px rgb(233, 233, 233);
  border-radius: 2px;
  box-shadow: 0 0 70px rgba(255, 255, 255, 0.67);
  letter-spacing: 1px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  @media screen and (min-width: 500px) {
    margin: 70px auto 70px;
  }

  .logTitle {
    position: relative;
    font-size: 26px;
    line-height: 2.5;
    color: black;
    border: none;
    font-weight: 500;
  }
  .folderSelector {
    display: block;
    min-height: 40px;
    @include diary-inner-content(95%, 550px);
    margin: 0 auto;
    padding: 0 40px 0 5px;
    border: none;
    font-size: 18px;
    text-align: left;
    appearance: none;

    &:first-child {
      letter-spacing: 0.1em;
      color: rgba(0, 0, 0, 0.7);
    }
    // 添加====================
    .option {
      letter-spacing: 3px;
      text-shadow: 1px 1px 3px #333;

      &:hover {
        background: #008c96;
      }
    }
    // 添加====================
  }
  .logArea {
    position: relative;
    min-height: 46vh;
    @include diary-inner-content(95%, 550px);
    box-sizing: border-box;
    padding: 1.25em 1.25em;
    margin: 1em auto;
    line-height: 1.5;
    border: none;
    resize: vertical;
    background: rgba(245, 245, 245, 1);
    font-size: 16px;
    font-family: "微软雅黑", "Microsoft YaHei";
    // transition: width 0.4s ease-in, background-color 2s ease-in-out;

    &:focus {
      background-color: rgb(235, 250, 253);
    }

    @media screen and (max-width: 500px) {
      padding: 5px;
    }
  }
  .logSubmit {
    display: inline-block;
    @include standardButton(18px);
    margin: 1em auto;
  }
  .expander {
    position: relative;
    display: block;
    width: 15px;
    height: 15px;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    transition: all 0.25s linear;
  }
  /* 图片上传框 */
  .imageArray {
    display: block;
    min-height: 80px;
    box-sizing: border-box;
    @include diary-inner-content(95%, 555px);
    margin: 0 auto;
    height: auto;
    text-align: left;
    background-color: rgba(245, 245, 245, 0.8);
    margin-top: 10px;
    padding-bottom: 10px;
  }
  .iamgeCell,
  .imageRect {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: left;
    border: #55555540 1px solid;
    overflow: hidden;
  }
}
</style>
