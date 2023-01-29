<template>
  <div class="flex flex-col h-screen items-center justify-center">
    <div class="mb-[48px]">
      <img src="@/assets/images/logo.svg" alt="">
    </div>

    <!-- Inner div -->
    <div class="mx-auto bg-[#fff] w-90 shadow-lg text-center p-8 border border-[#EBEEFC] rounded-xl">
      <!-- Login title -->
      <h3 class="font-bold text-[#28293D] text-left text-2xl">Kirish</h3>

      <!-- Form -->
      <form @submit.prevent="submit" class="mt-[44px] text-left space-y-[22px]">
        <div class="space-y-[22px]">
          <div>
            <label for="login">LOGIN</label>
            <input id="login" autocomplete="off" type="text" class="text-placeholder login-input"
              placeholder="Enter Email..." v-model.trim="username" />
          </div>
          <div>
            <label for="password">PAROL</label>
            <input id="password" type="password" class="text-[#2E384D] tracking-wider login-input"
              placeholder="Enter Password..." v-model.trim="password" />
          </div>
        </div>
        <div class="space-y-[22px] mt-[22.5px]">
          <vue-recaptcha :load-recaptcha-script="true"
            :sitekey="'6LcQyaIjAAAAANhBxyxsxcR3jS9cSX_7nc4aOAXz'"></vue-recaptcha>
          <button type="submit"
            class="bg-[#2E5BFF] duration-200 rounded-lg block text-center text-[#fff] w-full px-[103px] py-[14px] font-semibold text-md font-rubik flex items-center justify-center">
            Kirish
            <vue-loaders-ball-spin-fade-loader v-if="isLoading" color="#fff" scale="0.4" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VueRecaptcha } from 'vue-recaptcha';
import { reactive, toRefs, watch, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthLogin } from '@/stores/login'
import { useNotification } from "@kyvg/vue3-notification";
import type Login from '@/types/Interfaces';

const login = reactive<Login>({
  username: '',
  password: ''
})
const { notify } = useNotification()
const { username, password } = toRefs(login);
const router = useRouter();
const authLogin = useAuthLogin();
const error = ref('')
const isLoading = ref(false)

function submit() {
  if (login.username && login.password) {
    isLoading.value = true;
    authLogin.login(login);
  } else {
    notify({
      title: 'Warning',
      text: '<b>Iltimos bo\'sh joyni to\'ldiring!</b>',
      type: 'warn'
    })
  }
}
watch(authLogin.doubleCount, function () {
  if (authLogin.doubleCount.value) {
    isLoading.value = false;
    router.push('/sponsors')
  } else {
    isLoading.value = false;
    router.push('/login')
  }
})

watch(authLogin.errorMessage, function () {
  if (authLogin.errorMessage.value) {
    notify({
      title: 'Error',
      text: '<b>' + authLogin.errorMessage.value + '</b>',
      type: 'error'
    })
    isLoading.value = false;
  }
})
</script>

<style scoped>
.vue-loaders.ball-spin-fade-loader {
  border-width: 5px;
  margin-left: 10px;
}
</style>