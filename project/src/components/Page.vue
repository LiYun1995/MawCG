<template>
  <div :class="[maName + '_container']">
    <span
      :class="[maName + '_upDir']"
      @click="up"
    >上一页</span>
    <div :class="[maName + '_dir']">
      <span
        :class="[maName + '_item']"
        v-for="(item,index) in this.lists"
      >{{index+1}}</span>
    </div>
    <span
      :class="[maName + '_downDir']"
      @click="down"
    >下一页</span>
  </div>
</template>

<script>
const maName = "ma_page";
export default {
  name: "",
  props: {
    lists: {
      type: Array
    }
  },
  data() {
    return {
      maName: maName,
      itemDom: {},
      count: 0
    };
  },
  mounted() {
    let defaultActive = document.getElementsByClassName("ma_page_item");
    defaultActive[0].classList.add("ma_page_item_active");  
    this.itemDom = defaultActive;
    this.$emit('configEvent',this.count);
  },
  methods: {
    up() {
      this.count--;
      if (this.count < 0) {
        this.itemDom[this.count + 1].classList.remove("ma_page_item_active");
        this.count = this.lists.length-1;
        this.itemDom[this.count].classList.add("ma_page_item_active");
        this.$emit('configEvent',this.count);
      } else {
        this.itemDom[this.count].classList.add("ma_page_item_active");
        this.itemDom[this.count + 1].classList.remove("ma_page_item_active");
        this.$emit('configEvent',this.count);
      }
    },
    down() {
      this.count++;
      if (this.count == this.lists.length) {
        this.itemDom[this.count - 1].classList.remove("ma_page_item_active");
        this.count = 0;
        this.itemDom[this.count].classList.add("ma_page_item_active");
        this.$emit('configEvent',this.count);
      } else {
        this.itemDom[this.count].classList.add("ma_page_item_active");
        this.itemDom[this.count - 1].classList.remove("ma_page_item_active");
        this.$emit('configEvent',this.count);
      }
    }
  }
};
</script>
