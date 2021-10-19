import { defineStore } from 'pinia'

export const useStore = defineStore('test', {
  state: () => {
    return {
      counter: 0
    }
  }
})
