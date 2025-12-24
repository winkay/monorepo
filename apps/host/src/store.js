import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    user: null
  }),

  actions: {
    login({ token, user }) {
      this.token = token
      this.user = user
    },

    logout() {
      this.token = ''
      this.user = null
    }
  }
})
