import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  const user = ref(null)

  function login(data) {
    token.value = data.token
    user.value = data.user
  }

  function logout() {
    token.value = ''
    user.value = null
  }

  return { token, user, login, logout }
})
