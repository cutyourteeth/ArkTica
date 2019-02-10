<template>
  <div class="panel">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.panel {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>
