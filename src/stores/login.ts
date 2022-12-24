import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API_AUTH_LOGIN } from '@/api/Auth/AuthLogin'
import type Login from '@/types/Interfaces'

export const useAuthLogin = defineStore('login', () => {
  const user = ref<string>('')
  const error = ref<string>('')
  const doubleCount = computed(() => {
    return user;
  })

  const errorMessage = computed(() => {
    return error;
  })

  async function login({username, password}: Login) {
    error.value = ''
    return API_AUTH_LOGIN(username, password)
      .then(res => {
        if(res?.status === 200) {
          user.value = res.data.access
          localStorage.setItem('user', JSON.stringify(user.value))
        }
      })
      .catch(err => {
        error.value = err.response.data.detail
      })
  }

  async function logout() {
    localStorage.removeItem('user');
    user.value = '';

  }

  return { login, logout, doubleCount, errorMessage }
})
