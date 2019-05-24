<template>
  <div class="about">
    <MaCalendar></MaCalendar>
    <MaButton>默认按钮</MaButton>
    <MaButton
      type="warn"
      @click="testBtn"
    >警告按钮</MaButton>
    <MaButton
      type="sure"
      ghost
    >确认按钮</MaButton>
    <MaButton type="cancle">取消按钮</MaButton>
    <div style="width:500px" v-show="test[0]">
      <div style="width:100%;height:300px;background:gray">
        <h1 style="font-size:20px;font-weight:500;color:white">{{testPage}}</h1>
        <table>
          <thead>
            <th>姓名</th>
            <th>年龄</th>
            <th>电话</th>
          </thead>
          <tbody>
            <tr v-for="item in resultTable[this.testPage]">
              <td>{{item.name}}</td>
              <td>{{item.age}}</td>
              <td>{{item.num}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <MaPage
        :lists="resultTable"
        @configEvent="showCount"
      ></MaPage>
      <button @click="testchange">asdasd</button>
    </div>
  </div>
</template>
<script>
import MaCalendar from "@/components/Calendar.vue";
import MaButton from "@/components/Button.vue";
import MaPage from "@/components/Page.vue";
export default {
  data() {
    return {
      mylist: [1, 2, 3, 4, 5, 6, 7, 8],
      tableOnly: 3,
      testPage: 0,
      test:[true,true],
      testTable: [
        {
          name: "李云1",
          age: 23,
          num: 18781776093
        },
        {
          name: "李云1",
          age: 23,
          num: 18781776093
        },
        {
          name: "李云1",
          age: 23,
          num: 18781776093
        },
        {
          name: "李云2",
          age: 23,
          num: 18781776093
        },
        {
          name: "李云2",
          age: 23,
          num: 18781776093
        },
        {
          name: "李云2",
          age: 23,
          num: 18781776093
        },
        {
          name: "李云2",
          age: 23,
          num: 18781776093
        }
      ],
      resultTable: []
    };
  },
  components: {
    MaCalendar,
    MaButton,
    MaPage
  },
  methods: {
    testBtn() {
      console.log(111);
    },
    showCount(data) {
      this.testPage = data;
    },
    sliceArr(array, size) {
      let result = [];
      for (let x = 0; x < Math.ceil(array.length / size); x++) {
        let start = x * size;
        let end = start + size;
        result.push(array.slice(start, end));
      }
      return result;
    },
    testchange(){
      this.test = !this.test
    }
  },
  created() {
    this.resultTable = this.sliceArr(this.testTable,3);
    console.log(this.resultTable);
  }
};
</script>
