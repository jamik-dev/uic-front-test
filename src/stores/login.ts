import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API_AUTH_LOGIN } from '@/api/Auth/AuthLogin'
import type Login from '@/types/Interfaces'

export const useAuthLogin = defineStore('login', () => {
  const user = ref(null)

  const doubleCount = computed(() => {
    return user;
  })

  async function login({username, password}: Login) {
    return API_AUTH_LOGIN(username, password)
      .then(res => {
        if(res?.status === 200) {
          user.value = res.data.access
          console.log(res)
          localStorage.setItem('user', JSON.stringify(user.value))
        }
      })
  }

  async function logout() {
    localStorage.removeItem('user');
    user.value = null;

  }

  return { login, logout, doubleCount }
})
