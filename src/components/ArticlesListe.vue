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

    updateSelectedSizeIndex(index) {
      this.selectedSizeIndex = index;
    },

  

    ...mapActions(useHoodieStore, ["updateRefArticle" , 'updateCart']),
    addToCartHandler({ refArticle, size, qtt }) {
      // Utilisez la nouvelle action du store
      this.updateCart({ refArticle, size, quantity: qtt });
    },
    
  },

  computed: {
    ...mapState(useHoodieStore, ["hoodie", "cart"]),
    hoodies() {
      return this.hoodie;
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
        @add-to-cart="addToCartHandler"
        />
    </div>
  </div>
</template>
