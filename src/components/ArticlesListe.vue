<script>
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { useHoodieStore } from "../stores/stock.js";
import CarteHoodie from "./CarteHoodie.vue"

export default {
  name: "ArticlesList",
  data() {
    return {
      selectedSizeIndex: null
    };
  },
  components:{
    CarteHoodie
  },
  methods: {

    updateSelectedSizeIndex(ref, index) {
      this.selectedSizeIndex = index;
    },
    
  },

  computed: {
    ...mapState(useHoodieStore, ["hoodie"]),
    hoodies() {
      return this.hoodie; // Assuming 'hoodie' is an array in your store state
    },
  }
};
</script>

<template>
  <div class="container mx-auto mt-4 w-2/3 bg-card-background rounded py-2">
    <div id="item-list" class="px-4">
      <!-- item card -->
      <CarteHoodie 
      v-for="(hoodie, index) in hoodies"
        :key="index"
        :hoodie="hoodie"
        />
    </div>
  </div>
</template>
