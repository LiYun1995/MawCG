<template>
  <div class="about">
    <MaCalendar></MaCalendar>
    <MaButton>默认按钮</MaButton>
    <MaButton type="warn" @click="testBtn">警告按钮</MaButton>
    <MaButton type="sure" ghost>确认按钮</MaButton>
    <MaButton type="cancle">取消按钮</MaButton>
  </div>
</template>
<script>
import MaCalendar from "@/components/Calendar.vue";
import MaButton from "@/components/Button.vue";
export default {
  data() {
    return {};
  },
  components: {
    MaCalendar,
    MaButton
  },
  methods:{
    testBtn(){
      console.log(111);
    }
  }
};
</script>
