<template>
  <div :class="[myComponentsName +'_container']">
    <div :class="[myComponentsName +'_timer']">
      <h1 :class="[myComponentsName +'_timer_time']">{{time}}</h1>
      <p :class="[myComponentsName +'_timer_date']">{{date}}</p>
    </div>
    <hr class="ma_lineStyle">
    <div :class="[myComponentsName +'_can_check']">
      <span :class="[myComponentsName +'_check_date']">{{checkDate}}</span>
      <span :class="[myComponentsName +'_check_btn']">
        <span :class="[myComponentsName +'_check_btnup']" @click="upDate">
          <i class="ma-icon-arrow-up"></i>
        </span>
        <span :class="[myComponentsName +'_check_btndown']" @click="downDate">
          <i class="ma-icon-arrow-down"></i>
        </span>
      </span>
    </div>
    <div :class="[myComponentsName +'_calendar']">
      <div :class="[myComponentsName +'_can_head']">
        <span
          v-for="item in weekList"
          :class="[myComponentsName +'_can_head_item']"
        >{{item}}</span>
      </div>
      <div
        :class="[myComponentsName +'_can_body']"
        v-html="canBody"
      ></div>
    </div>
    <div :class="[myComponentsName +'_daily']"></div>
    <div :class="[myComponentsName +'_foot_check']"></div>
  </div>
</template>

<script>
const myComponentsName = "ma_calendar";
export default {
  name: "MaCalendar",
  props: {},
  data() {
    return {
      myComponentsName: myComponentsName,
      weekList: ["一", "二", "三", "四", "五", "六", "日"],
      time: "15:43",
      date: "2019/5/10",
      checkDate: "2019年5月",
      canBody: ""
    };
  },
  mounted() {
    let newCalendar = new Date();
    this.initCanlendar(newCalendar.getFullYear(), newCalendar.getMonth() + 1);
    this.time = this.getDate()[0];
    this.date = this.getDate()[1];
    this.checkDate = this.getDate()[2];
    setInterval(() => {
      this.time = this.getDate()[0];
      this.date = this.getDate()[1];
    }, 1000);
  },
  methods: {
    getDate() {
      //初始化时间
      let newDate = new Date();
      let _year = newDate.getFullYear();
      let _month = newDate.getMonth() + 1;
      let _day = newDate.getDate();
      let _hour = newDate.getHours();
      let _minute = newDate.getMinutes();
      let _seconds = newDate.getSeconds();
      let myTime = `${this.toDouble(_hour)}:${this.toDouble(
        _minute
      )}:${this.toDouble(_seconds)}`;
      let myDate = `${_year}年${_month}月${_day}日`;
      let myCheckDate = `${_year}年${_month}月`;
      return [myTime, myDate, myCheckDate];
    },
    toDouble(num) {
      //小于10的数用00形式显示
      if (num < 10) {
        return "0" + num;
      }
      return num;
    },
    upDate() {
      //上翻月
      let nowYear = Number(this.checkDate.split("年")[0]);
      let nowMonth = Number(this.checkDate.split("年")[1].replace("月", ""));
      nowMonth++;
      if (nowMonth > 12) {
        nowMonth = 1;
        nowYear++;
      }
      let upDate = `${nowYear}年${nowMonth}月`;
      this.checkDate = upDate;
      this.initCanlendar(nowYear, nowMonth);
    },
    downDate() {
      //下翻月
      let nowYear = Number(this.checkDate.split("年")[0]);
      let nowMonth = Number(this.checkDate.split("年")[1].replace("月", ""));
      nowMonth--;
      if (nowMonth < 1) {
        nowMonth = 12;
        nowYear--;
      }
      let downDate = `${nowYear}年${nowMonth}月`;
      this.checkDate = downDate;
      this.initCanlendar(nowYear, nowMonth);
    },
    initCanlendar(year, month) {
      //初始化日历并显示
      let html = "";
      let allDay = this.getAllDay(year, month); //一个月有几天
      let beforAllDay = this.getAllDay(year, month - 1);
      let beforDateList = [];
      let dateList = [];
      let afterDateList = [];
      let beforFirstDay = 0;
      let afterLastDay = 0;
      let dateArg = `${year},${this.toDouble(month)},1`;
      let firstDay = new Date(dateArg).getDay(); //一个月第一天是星期几
      if (firstDay === 0) {
        beforFirstDay = 6;
      } else {
        beforFirstDay = firstDay - 1;
      }
      afterLastDay = 42 - allDay - beforFirstDay;
      for (let i = 0; i < beforFirstDay; i++) {
        beforDateList.unshift(beforAllDay - i);
      }
      for (let i = 0; i < allDay; i++) {
        dateList[i] = i + 1;
      }
      for (let i = 0; i < afterLastDay; i++) {
        afterDateList[i] = i + 1;
        // debugger
      }
      for (let i = 0; i < beforDateList.length; i++) {
        html += `<span class='calendar_item  gray_item'>${
          beforDateList[i]
        }</span>`;
      }
      for (let i = 0; i < dateList.length; i++) {
        html += `<span class='calendar_item'>${dateList[i]}</span>`;
      }
      for (let i = 0; i < afterDateList.length; i++) {
        html += `<span class='calendar_item gray_item'>${
          afterDateList[i]
        }</span>`;
      }
      this.canBody = html;
    },
    isRunYear(year) {
      //判断闰年
      if (
        (year % 4 === 0 && year % 100 != 0) ||
        (year % 100 === 0 && year % 400 === 0)
      ) {
        return 29;
      }
      return 28;
    },
    getAllDay(year, month) {
      let myMonth = month;
      if (myMonth === 0) {
        myMonth = 12;
      }
      let allDay = 0; // 一个月有多少天
      switch (myMonth) {
        case 1:
          allDay = 31;
          break;
        case 2:
          allDay = this.isRunYear(year);
          break;
        case 3:
          allDay = 31;
          break;
        case 4:
          allDay = 30;
          break;
        case 5:
          allDay = 31;
          break;
        case 6:
          allDay = 30;
          break;
        case 7:
          allDay = 31;
          break;
        case 8:
          allDay = 31;
          break;
        case 9:
          allDay = 30;
          break;
        case 10:
          allDay = 31;
          break;
        case 11:
          allDay = 30;
          break;
        case 12:
          allDay = 31;
          break;
      }
      return allDay;
    }
  }
};
</script>
