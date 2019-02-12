<template>
  <div class="calendar">
    <!-- 展开日历  -->
    <ul class="weekdays">
      <li v-for="(item,key) in weekdayList" :key="key">{{item}}</li>
    </ul>
    <ul class="calendarDates">
      <li
        v-for="(item,key) in days"
        :key="key"
        :class="{selected:item.selected, gray:item.month!=='current'}"
        class="day"
        @click="check(key);setSelected()"
      >
        <div>{{item.day}}</div>
        <div v-if="item.hasEvent" class="dot">●</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
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
      weekdayList: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      days: []
    }
  },
  methods: {
    leapYear (year) {
      return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ? 1 : 0
    },
    getFirstWeekday (date, weekday) {
      // 推出当月第一个为weekday的日期
      while (date > 7) {
        date -= 7
      }
      let firstWeekday = weekday - (date - 1)
      // 当最小日的星期数字过小时需要补充一周
      return firstWeekday < 0 ? firstWeekday + 7 : firstWeekday
    },
    CreateDate (date, weekday, month, status, events) {
      return {
        day: date,
        weekday: weekday,
        month: month,
        selected: status,
        hasEvent: events
      }
    },
    initalCalendar (year, month, date, weekday) {
      if (!year || !month || !date || !weekday) return console.log('未取得日期')
      this.days = []
      let feb = 28
      this.leapYear(year) === 1 ? feb = 29 : feb = 28
      const datesMap = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      let thisMonthDates = datesMap[month - 1]
      let lastMonthDates = () => {
        return (month - 1 > 0) ? datesMap[month - 2] : 31// 本月不为1月时,返回31
      }
      let firstWeekday = this.getFirstWeekday(date, weekday)
      let datesBefore = firstWeekday - 0
      // 打印日历表
      this.printCarlendar(datesBefore, lastMonthDates, thisMonthDates, firstWeekday)
      // 打印完毕
      // 选中当前日
      this.setSelected()
    },
    printCarlendar (datesBefore, lastMonthDates, thisMonthDates, firstWeekday) {
      // 生成大日历
      // 上月末填充时
      if (datesBefore === 0) {
        for (let i = 7; i > 0; i--) {
          let getDateBefore = lastMonthDates() - i + 1
          let getWeekdayBefore = 7 - i
          this.days.push(new this.CreateDate(getDateBefore, getWeekdayBefore, 'prev', false))
        }
      } else {
        while (datesBefore > 0) {
          let getDateBefore = lastMonthDates() - datesBefore + 1
          let getWeekdayBefore = firstWeekday - datesBefore
          this.days.push(new this.CreateDate(getDateBefore, getWeekdayBefore, 'prev', false))
          datesBefore--
        }
      }
      // 本月
      for (let i = 0; i < thisMonthDates; i++) {
        let day = i + 1 // 定义第X天
        let weekday = (firstWeekday + i) % 7
        this.days.push(new this.CreateDate(day, weekday, 'current', false))
      }
      // 下个月
      let daysLeft = 7 - this.days.length % 7
      if (daysLeft === 0) {
        for (let i = 0; i < 7; i++) { // +7天
          const weekday = (i + thisMonthDates + firstWeekday) % 7
          this.days.push(new this.CreateDate(i + 1, weekday, 'next', false))
        }
      } else {
        for (let i = 0; i < daysLeft; i++) { // + daysLeft 天
          let weekday = (i + thisMonthDates + firstWeekday) % 7
          this.days.push(new this.CreateDate(i + 1, weekday, 'next', false))
        }
      }
    },
    // 第一次选中本日
    setSelected () {
      this.days.forEach(item => {
        if (item.month === 'current' && item.day === this.chosen.date) item.selected = true
      })
    },
    check (key) {
      // 清除所有选中
      this.days.forEach(element => {
        element.selected = false
      })
      // 由日历表传值给chosen对象
      this.chosen.date = this.days[key].day
      this.chosen.weekday = this.days[key].weekday
      // 日期√ 星期几√ 月份/年份按情况计算 闰年返回initialCalendar时计算
      if (this.days[key].month === 'current') {
        // 本月跳转
      } else if (this.days[key].month === 'prev') {
        // 前月跳转:根据1月为边界条件
        if (this.chosen.month === 1) {
          this.chosen.month = 12
          --this.chosen.year
        } else {
          --this.chosen.month
        }
        // 下月跳转:根据12月为边界条件
      } else if (this.days[key].month === 'next') {
        if (this.chosen.month === 12) {
          this.chosen.month = 1
          ++this.chosen.year
        } else {
          ++this.chosen.month
        }
      } else {
        console.error('can\'t get month.attr')
      }
    },
    rewind () {
      let localTime = new Date()
      this.chosen.year = localTime.getFullYear()
      this.chosen.month = localTime.getMonth() + 1
      this.chosen.date = localTime.getDate()
      this.chosen.weekday = localTime.getDay()
      this.initalCalendar(this.today.year, this.today.month, this.today.date, this.today.weekday)
    }
  },
  mounted () {
  },
  watch: {
    'today': {
      handler: function () {
        this.initalCalendar(this.today.year, this.today.month, this.today.date, this.today.weekday)
      },
      deep: true
    },
    'chosen': {
      handler: function () {
        this.initalCalendar(this.chosen.year, this.chosen.month, this.chosen.date, this.chosen.weekday)
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../common/scss/mixin.scss";

.calendar {
  width: 100%;
  padding: 0px 0;
  background-color: $lightGreen;
  color: #fff;
  text-align: center;

  &::before {
    content: " ";
    position: absolute;
    left: 50%;
    width: 20px;
    height: 20px;
    background-color: $lightGreen;
  }
  .calendarDates {
    cursor: pointer;
  }

  & > ul {
    width: 100%;
    display: flex;
    flex-flow: row wrap;

    & > li {
      display: inline-block;
      height: 41px;
      line-height: 41px;
      position: relative;
      flex-basis: 14.285%;
      font-size: 12px;

      .dot {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0) scale(0.8);
      }
    }

    .selected {
      color: #000;
      background-color: #fff;

      .dot {
        color: $lightGreen;
      }
    }
  }
}

.gray {
  color: rgba(255, 255, 255, 0.6);
}
</style>
