<template>
    <span :class="btnStyles" class="ma_button_common" @click="childBtnClick">
      <slot></slot>
    </span>
</template>

<script>
const myComponentsName = "ma_button";
export default {
  name:'MaButton',
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
          switch(this.type){
            case 'default':
            return `${myComponentsName}_default`;
            case 'warn':
            return `${myComponentsName}_warn`;
            case 'sure':
            return `${myComponentsName}_sure`;
            case 'cancle':
            return `${myComponentsName}_cancle`
          }
      }
  },
  methods:{
    childBtnClick(){
      this.$emit('click')
    },
  }
};
</script>
