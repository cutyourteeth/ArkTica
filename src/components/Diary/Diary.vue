<template>
  <div>
    <Navibar></Navibar>
    <div class="contentWrapper">
      <Log v-if="!!isWriting"></Log>
      <Saver v-if="!!isWriting"></Saver>
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
  components: {
    Navibar,
    Log,
    Saver
  }
}
</script>

<style lang="scss">
</style>
