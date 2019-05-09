<template>
  <div
    :class="[myComponentsName +'_container']"
    onmouseover="chooseVoice(this)"
  >
    <div class="main_bottom"></div>
    <div class="main_body"></div>
  </div>
</template>

<script>
const myComponentsName = "ma_slidebar";
export default {
  props: {
    width: {
      type: [String, Number],
      default: 520
    }
  },
  data() {}
};
</script>
