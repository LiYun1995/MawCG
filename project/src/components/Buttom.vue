<template>
  <component>
    <span :class="btnStyles">
      <slot></slot>
    </span>
  </component>
</template>

<script>
const myComponentsName = "ma_buttom";
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    ghost:{
        type:Boolean,
        default:false
    }
  },
  data() {
    return {
      myComponentsName: myComponentsName,
    };
  },
  computed:{
      btnStyles(){
          
      }
  }
};
</script>
