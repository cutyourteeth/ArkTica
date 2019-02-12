<template>
  <Panel class="header">
    <a class="callSidebar">
      <div class="menu-icon"></div>
    </a>
    <span class="dateWrapper" @click="expand">
      {{formatDate}}
      <Calendar v-show="isExpanded" :today="today" :chosen="chosen"></Calendar>
    </span>
    <span class="right">
      <span class="iconfont icon-find find">查找</span>
      <span class="iconfont icon-favorite favorite">收藏</span>
      <em @click="rewind()">今天</em>
      <i class="iconfont icon-arrow_down"></i>
    </span>
  </Panel>
</template>

<script type="text/ecmascript-6">
import Panel from '@/components/Core/Panel'
import Calendar from './Calendar'

export default {
  data () {
    return {
      today: {
        year: '',
        month: '',
        date: '',
        weekday: '',
        leapYear: false
      },
      chosen: {
        year: '',
        month: '',
        date: '',
        weekday: '',
        leapYear: false
      },
      isExpanded: false
    }
  },
  computed: {
    formatDate () {
      // 防止直接对this.chosen做属性改动
      let month = this.chosen.month
      let date = this.chosen.date
      if (this.chosen.month < 10) month = '0' + this.chosen.month
      if (this.chosen.date < 10) date = '0' + this.chosen.date
      const addup = this.chosen.year + '-' + month + '-' + date
      return addup
    }
  },
  mounted () {
    this.initialDate()
  },
  methods: {
    initialDate () {
      const localTime = new Date()
      this.chosen.year = this.today.year = localTime.getFullYear()
      this.chosen.month = this.today.month = localTime.getMonth() + 1
      this.chosen.date = this.today.date = localTime.getDate()
      this.chosen.weekday = this.today.weekday = localTime.getDay()
    },
    expand () {
      this.isExpanded = !this.isExpanded
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
      this.$child.initalCalendar(rechoose.year, rechoose.month, rechoose.date, rechoose.weekday)
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

  .callSidebar {
    cursor: pointer;
    opacity: 0.7;
    margin: 10px 0;
    border-radius: 5px;
    padding: 6px;
    border: 1px $lightGreen solid;

    .menu-icon {
      width: 20px;
      height: 2px;
      border-top: 2px solid $lightGreen;
      border-bottom: 2px solid $lightGreen;
      background-color: $lightGreen;
      padding: 5px 0;
      background-clip: content-box;
    }
  }

  .dateWrapper {
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 50%;
    font-size: 14px;
    overflow: hidden;
    position: absolute;
    color: $lightGreen;
    transform: translate3d(-50%, 0, 0);

    Calendar {
      position: absolute;
      top: 90px;
      left: 50%;
    }
  }

  .right {
    font-size: 14px;
    color: $lightGray;

    .find,
    .favorite {
      cursor: pointer;
      margin-right: 30px;
    }

    & > em {
      font-size: 14px;
      color: $lightGreen;
    }
  }
}
</style>
