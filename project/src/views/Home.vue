<template>
  <div class="home">
    <button @click="modal1 = !modal1">Modal</button>
     <MaModal title="Hello LYGG" v-model="modal1">
          <h1>Sekiro</h1>
          <p>Shadows</p>
          <p>Die</p>
          <p>Twice</p>
      </MaModal>
  </div>
</template>

<script>
// @ is an alias to /src
import MaModal from "@/components/Modal.vue";

export default {
  name: "home",
  data() {
    return {
      modal1: false
    };
  },
  components: {
    MaModal
  },
  methods: {}
};
</script>
