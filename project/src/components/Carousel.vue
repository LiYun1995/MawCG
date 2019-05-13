<template>
  <div :class="[myComponentsName + '_container']">
    <ul>
      <li v-for="item in this.carItems">
        <slot :data="item">xxxx</slot>
      </li>
    </ul>
  </div>
</template>

<script>
const myComponentsName = "ma_carousel";
export default {
  name: "MaCarousel",
  props: {
    carItems: {
      type: Array,
      default: [1, 2, 3]
    }
  },
  data() {
    return {
      myComponentsName: myComponentsName
    };
  }
};
</script>
