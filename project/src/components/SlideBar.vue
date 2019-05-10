<template>
  <div
    :class="[myComponentsName +'_container']"
    :style="configStyles"
  >
    <div
      ref="slideBody"
      :class="[myComponentsName + '_body']"
    >
      <div
        @mouseover="slide"
        ref="slideBtn"
        :class="[myComponentsName + '_button']"
      ></div>
      <div
        ref="slideShade"
        :class="[myComponentsName + '_shade']"
      ></div>
    </div>
  </div>
</template>

<script>
const myComponentsName = "ma_slidebar";
export default {
  name: "MaSlideBar",
  props: {
    width: {
      type: [String, Number],
      default: 520
    }
  },
  data() {
    return {
      myComponentsName: myComponentsName
    };
  },
  computed: {
    configStyles() {
      if (this.width instanceof String) {
        return { width: this.width };
      }
      return { width: this.width + "px" };
    }
  },
  methods: {
    slide(e = window.event) {
      let btnDom = this.$refs.slideBtn;
      let shadeDom = this.$refs.slideShade;
      let bodyDom = this.$refs.slideBody;
      let slideBodyWidth = window.getComputedStyle(bodyDom, "").width;
      btnDom.onmousedown = function(e = window.event) {
        let clientX = e.clientX;
        document.onmousemove = function(e = window.event) {
          let offsetX = e.offsetX;
          if (offsetX > Number(slideBodyWidth.split("p")[0])) {
            offsetX = Number(slideBodyWidth.split("p")[0]);
          }
          btnDom.setAttribute("style", "left:" + offsetX + "px");
          shadeDom.setAttribute("style", "width:" + offsetX + "px");
          document.onmouseup = function(e = window.event) {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      };
    }
  }
};
</script>
