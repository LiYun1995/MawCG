<template>
  <span
    :class="isGhost?btnStylesWghost:btnStyles"
    class="ma_button_common"
    @click="childBtnClick"
  >
    <slot></slot>
  </span>
</template>

<script>
const myComponentsName = "ma_button";
export default {
  name: "MaButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    ghost: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      myComponentsName: myComponentsName,
      isGhost: this.ghost
    };
  },
  computed: {
    btnStyles() {
      switch (this.type) {
        case "default":
          return `${myComponentsName}_default`;
        case "warn":
          return `${myComponentsName}_warn`;
        case "sure":
          return `${myComponentsName}_sure`;
        case "cancle":
          return `${myComponentsName}_cancle`;
      }
    },
    btnStylesWghost() {
      switch (this.type) {
        case "default":
          return `${myComponentsName}_default ghost`;
        case "warn":
          return `${myComponentsName}_warn ghost`;
        case "sure":
          return `${myComponentsName}_sure ghost`;
        case "cancle":
          return `${myComponentsName}_cancle ghost`;
      }
    }
  },
  methods: {
    childBtnClick() {
      this.$emit("click");
    }
  },
  mounted() {
    if (this.ghost) {
      console.log(this.ghost);
    }
  }
};
</script>
