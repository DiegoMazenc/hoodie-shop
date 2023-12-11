<script>
import { mapState } from "pinia";
import { useHoodieStore } from "../stores/stock.js";

export default {
  name: "PanierArticles",
  computed: {
    ...mapState(useHoodieStore, ["cart"]),
  },
};
</script>

<template>
  <div>
    <h2>Mon Panier</h2>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        <div class="cart-item">
          <img :src="'src/assets/img/' + item.picture" alt="" class="cart-item-image" />
          <div class="cart-item-details">
            <p>{{ item.name }}</p>
            <p>{{ item.price }}€</p>
            <p>Taille: {{ item.size }}</p>
            <p>Quantité: {{ item.quantity }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item-image {
  width: 50px; /* Ajustez la taille de l'image selon vos besoins */
  height: auto; /* Ajustez la taille de l'image selon vos besoins */
  margin-right: 10px;
}

.cart-item-details {
  display: flex;
  flex-direction: column;
}
</style>

