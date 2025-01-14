import { defineStore } from 'pinia'

export const useStoreUser = defineStore('storeUser', {
  state: () => {
    return {
      userId: ''
    }
  },
})