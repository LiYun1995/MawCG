<template>
  <div class="home">
    <button @click="modal1 = !modal1">Modal</button>
    <MaSlideBar width=300 />
    <MaModal
      title="Hello LYGG"
      v-model="modal1"
    >
      <h1>Sekiro</h1>
      <p>Shadows</p>
      <p>Die</p>
      <p>Twice</p>
    </MaModal>
    <MaCarousel :carItems="testList">
      <template slot-scope="a">
        {{a.data}}
      </template>
    </MaCarousel>
  </div>
</template>

<script>
// @ is an alias to /src
import MaModal from "@/components/Modal.vue";
import MaSlideBar from "@/components/SlideBar.vue";
import MaCarousel from "@/components/Carousel.vue";
export default {
  name: "home",
  data() {
    return {
      modal1: false,
      testList:[{
        id:1,
        name:'LYGG'
      },{
        id:2,
        name:'MAW'
      },{
        id:3,
        name:'Sekiro'
      }]
    };
  },
  components: {
    MaModal,
    MaSlideBar,
    MaCarousel
  },
  methods: {}
};
</script>
