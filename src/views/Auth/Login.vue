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
          <form class="mt-[44px] text-left space-y-[22px]">
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
                />
              </div>
            </div>
            <div class="space-y-[22px] mt-[22.5px]">
              <form action="?" method="POST">
                <div class="g-recaptcha" data-sitekey="empty"></div>
              </form>
                <router-link
                  to="/sponsors"
                  class="bg-[#2E5BFF] rounded-lg block text-center text-[#fff] w-full px-[103px] py-[14px] font-semibold text-md font-rubik"
                >
                  Kirish
            </router-link>
            </div>
          </form>
        </div>
      </div>
</template>

<script lang="ts" setup>
</script>

<style>
</style>