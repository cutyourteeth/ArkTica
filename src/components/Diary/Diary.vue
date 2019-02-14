<template>
  <div>
    <Navibar></Navibar>
    <div class="contentWrapper">
      <transition name="fade">
        <keep-alive>
          <Log v-if="!isWriting"></Log>
        </keep-alive>
      </transition>
      <Saver v-if="!!isWriting"></Saver>
      <button class="iconfont icon-edit drawer" @click="editing">placeHolder</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Navibar from './Navibar/Navibar'
import Log from './Log/Log'
import Saver from './Saver/Saver'
export default {
  data () {
    return {
      isWriting: true
    }
  },
  methods: {
    editing () {
      this.isWriting = !this.isWriting
    }
  },
  components: {
    Navibar,
    Log,
    Saver
  }
}
</script>

<style lang="scss">
Navibar {
  position: fixed;
}
.drawer {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
