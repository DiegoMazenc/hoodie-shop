import hoodie from '../json/hoodie.json'
import { defineStore } from 'pinia'

export const useHoodieStore = defineStore('hoodie', {
    state: () => ({
        hoodie: hoodie,
        cart: [], // Nouvelle propriété pour stocker le panier d'achat
  }),

  getters: {
    getHoodie: (state) => state.hoodie,
    getCart: (state) => state.cart,
  },

  actions: {
    updateCart({ refArticle, size, quantity }) {
      const foundItem = this.hoodie.find(item => item.ref === refArticle);
    
      if (foundItem) {
        // Mise à jour de la référence de l'article dans le store
        foundItem.refArticle = refArticle;
    
        // Ajout de l'article au panier avec la taille et la quantité
        foundItem.size = size;
        foundItem.quantity = quantity;
    
        this.cart.push(foundItem);
      }
    
      console.log(refArticle, size,  quantity);
    },
    // ...
  }
})

