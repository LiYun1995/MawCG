<template>
  <div
    :class="[myComponentsName + '_shade']"
    v-if="visible"
  >
    <div
      :class="[myComponentsName + '_container']"
      :style="configStyles"
    >
      <div :class="[myComponentsName + '_header']">
        <h1 :class="[myComponentsName + '_title']">{{title}}</h1>
        <span
          :class="[myComponentsName + '_close']"
          @click="toggleModal"
        >×</span>
      </div>
      <div :class="[myComponentsName + '_content']">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  const myComponentsName = "ma_modal";
  export default {
    name: "MaModal",
    props: {
      title: {
        type: String
      },
      width: {
        type: [Number, String],
        default: 520
      },
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        myComponentsName: myComponentsName,
        visible: this.value
      };
    },
    mounted() {
      console.log(this.value);
    },
    watch: {
      value(val) {
        this.visible = val;
      }
    },
    computed: {
      configStyles() {
        if (this.width instanceof String) {
          return {width: this.width};
        }
        return {width: this.width + "px"};
      }
    },
    methods: {
      toggleModal() {
        this.visible = false;
        this.$emit("input", false);
      }
    }
  };
</script>

