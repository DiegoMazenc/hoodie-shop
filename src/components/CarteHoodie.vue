<script>
import SizeSelectCard from "./SizeSelectCard.vue";
import QttSelectOption from "./QttSelectOption.vue";

export default {
  name: "CarteHoodie",

  components: {
    SizeSelectCard,
    QttSelectOption,
  },

  props: {
    hoodie: Object,
  },

  data() {
    return {
      selectedSizeIndex: null,
      sizeselect: null,
      refArticle: null,
      stockArticle: 0,
      ruptureArticle:"test",
      stockOptions: [],
      stockColor : null,
    };
  },

  methods: {
    updateSelectedSizeIndex(index, size) {
      this.selectedSizeIndex = index;
      this.sizeselect = size;
      this.stockArticle = this.getStockForSize(size);
      this.updateStockOptions();
      this.ruptureStock();
      
    },

    updateStockOptions() {
      this.stockOptions = [0, ...Array.from({ length: this.stockArticle }, (_, i) => i + 1)];
    },

    ruptureStock() {
      if (this.stockArticle == 0){
        this.ruptureArticle = "Rupture";
        this.stockColor = "red";
      } else {
        this.ruptureArticle = this.stockArticle;
        this.stockColor = "green";
      }
    },

    getStockForSize(taille) {
      const stockForSize = this.hoodie.globalStock.find(
        (stock) => stock.size === taille
      );
      return stockForSize ? stockForSize.stock : 0;
    },

    selectRef(ref) {
      this.refArticle = ref;
      
    },
  },

  watch: {
    sizeselect(newValue, selectedSizeIndex) {
      console.log("Size selected:", newValue, selectedSizeIndex);
    },
  },
};
</script>
<template>
  <div class="flex w-full border-b-2 border-tertiary-contrast mt-6">
    <div class="flex rounded-lg bg-card-background-light shadow-lg flex-row w-full">
      <img class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        :src="'src/assets/img/' + hoodie.picture" alt="" />
      <div class="flex flex-col justify-start p-6">
        <h5 class="mb-2 text-2xl font-bold text-neutral-800">
          {{ hoodie.name }}
          <span
            class="inline-block ml-4 bg-button-background border-button-text rounded-md border-2 border-primary px-6 py-2 text-sm font-bold uppercase leading-normal text-primary">
            {{ hoodie.price }}€
          </span>
        </h5>

        <p class="mb-4 text-base text-neutral-600">
          {{ hoodie.description }}
        </p>
        <p class="text-xs text-neutral-600">
          <SizeSelectCard v-for="(size, sizeIndex) in hoodie.availableSize" :key="sizeIndex" :size="size"
            :sizeIndex="sizeIndex" :selectedSizeIndex="selectedSizeIndex" @size-selected="updateSelectedSizeIndex"
            @click="selectRef(hoodie.ref)" />
        </p>
        <div class="flex flex-row mt-12 space-elements">
          <div class="basis-1/4 w-96 ">
            QTY
            <select>
              <option v-if="!refArticle">Select Size</option>
              <option v-if="refArticle" v-for="quantity in stockOptions" :key="quantity" :value="quantity">
                {{ quantity }}
              </option>

            </select>
            <p v-if="refArticle"> Stock : <span :class="{ 'stockInfo-red': stockColor === 'red', 'stockInfo-green': stockColor === 'green' }">{{ ruptureArticle }}</span> </p>
          </div>
          <div class="basis-1/4">
            <button type="button"
              class="inline-block rounded border-2 bg-tertiary-contrast text-card-background-light border-button-text px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-info w-44">
              ADD TO CART
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="ml-2 w-6 h-6 float-right">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
.space-elements{
  justify-content: space-between;
}

.stockInfo-red {
  color: red;
}

.stockInfo-green {
  color: rgb(0, 212, 0);
}
</style>