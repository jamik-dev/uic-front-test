<template>
   <div class="flex flex-col h-screen items-center justify-center">
        <div class="mb-[48px]">
          <img src="@/assets/images/logo.svg" alt="">
        </div>
        <!-- Inner div -->
        <div
          class="mx-auto bg-[#fff] w-90 shadow-lg text-center p-8 border border-[#EBEEFC] rounded-xl"
        >
          <!-- Login title -->
          <h3 class="font-bold text-[#28293D] text-left text-2xl">Kirish</h3>

          <!-- Form -->
            <form @submit.prevent="submit" class="mt-[44px] text-left space-y-[22px]">
              <div class="space-y-[22px]">
                <div>
                  <label
                  for="login"
                  >LOGIN</label
                >
                <input
                id="login"
                autocomplete="off"
                type="text"
                class="text-placeholder login-input"
                  placeholder="Enter Email..."
                  v-model.trim="username"
                />
              </div>
              <div>
                <label
                  for="password"
                  >PAROL</label
                >
                <input
                  id="password"
                  type="password"
                  class="text-[#2E384D] tracking-wider login-input"
                  placeholder="Enter Password..."
                  v-model.trim="password"
                  />
                </div>
              </div>
              <div class="space-y-[22px] mt-[22.5px]">
                <vue-recaptcha sitekey="Your key here"></vue-recaptcha>
                <button
                type="submit"
                class="bg-[#2E5BFF] rounded-lg block text-center text-[#fff] w-full px-[103px] py-[14px] font-semibold text-md font-rubik"
                >
                Kirish
              </button>
            </div>
          </form>
        </div>
      </div>
</template>

<script lang="ts" setup>
import { VueRecaptcha } from 'vue-recaptcha';
import {reactive, toRefs} from 'vue';
import { useRouter } from 'vue-router';
import {useAuthLogin} from '@/stores/login'
import type Login from '@/types/Interfaces';
const login = reactive<Login>({
  username: '',
  password: ''
})
const {username, password} = toRefs(login);
const router = useRouter();
const authLogin = useAuthLogin();

async function submit() {
  authLogin.login(login);
  if (authLogin.doubleCount.value) {
    router.push('/sponsors')
  }
}


</script>

<style>
</style>