<template>
  <Panel class="header">
    <span class="iconfont icon-find find"></span>
    <span class="dateWrapper">
      {{formatDate}}
      <i class="iconfont icon-arrow_down" @click="selectDate()"></i>
      <!-- <input type="date" @change="setDate()" id="selector"> -->
      <Calendar v-if="isExpanded"></Calendar>
    </span>
    <span class="right">
      <em @click="rewind()">今天</em>
      <i class="iconfont icon-arrow_down"></i>
    </span>
  </Panel>
</template>

<script type="text/ecmascript-6">
import Panel from '@/components/Core/Panel'
import Calendar from './Calendar'

export default {
  props: {
    today: {
      type: Object,
      default () {
        return {
          year: '',
          month: '',
          date: '',
          weekday: '',
          leapYear: false
        }
      }
    },
    chosen: {
      type: Object,
      default () {
        return {
          year: '',
          month: '',
          date: '',
          weekday: '',
          leapYear: false
        }
      }
    }
  },
  data () {
    return {
      isExpanded: true
    }
  },
  computed: {
    formatDate: function () {
      let month = this.chosen.month
      let date = this.chosen.date
      if (this.chosen.month < 10) {
        month = '0' + this.chosen.month
      }
      if (this.chosen.date < 10) {
        date = '0' + this.chosen.date
      }
      const addup = this.chosen.year + '-' + month + '-' + date
      return addup
    }
  },
  methods: {
    selectDate () {
      const selector = document.getElementById('selector')
      selector.click()
    },
    setDate () {
      let selector = document.getElementById('selector')
      let dateArray = selector.value.split('-')
      const rechoose = this.$parent.chosen
      rechoose.year = parseInt(dateArray[0])
      rechoose.month = parseInt(dateArray[1])
      rechoose.date = parseInt(dateArray[2])
      rechoose.weekday = parseInt(this.getWeekday(dateArray[0], dateArray[1], dateArray[2]))
      rechoose.leapYear = parseInt(this.$parent.leapYear(dateArray[0]))
      this.$parent.initalCalendar(rechoose.year, rechoose.month, rechoose.date, rechoose.weekday)
    },
    getWeekday (year, month, date) {
      date = new Date(year, month, date)
      return date.getDay()
    },
    rewind () {
      // 调用父组件rewind回到当前日
      this.$parent.rewind()
    }
  },
  components: {
    Panel,
    Calendar
  }
}
</script>

<style scoped lang="scss">
@import "../../../common/scss/mixin.scss";

.header {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  line-height: 50px;
  padding: 0 16px;
  background-color: #fff;

  .find {
    font-size: 16px;
    color: $lightGray;
  }

  .dateWrapper,
  #selector {
    top: 50%;
    left: 50%;
    font-size: 14px;
    overflow: hidden;
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
  }

  #selector {
    height: 40px;
    width: 80px;
    opacity: 0;
    transform: translate3d(-43px, -50%, 0);
  }

  .right {
    font-size: 14px;

    & > em {
      font-size: 14px;
      color: $lightGreen;
    }
  }
}
</style>
