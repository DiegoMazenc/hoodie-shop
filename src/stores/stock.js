import hoodie from '../json/hoodie.json'
import { defineStore } from 'pinia'

export const useHoodieStore = defineStore('hoodie', {
    state: () => ({
        hoodie: hoodie,
    }),
    
    getters: {
        getHoodie: (state) => state.hoodie
    },
    
    actions: {

    }

})