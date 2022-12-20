<template>
  <header class="w-full h-16 py-3 sticky top-0 flex items-center bg-[#fff] shadow-lg">
    <div class="flex flex-row mx-auto justify-between align-center w-[85%]">
      <img src="@/assets/images/logo-pro.svg" alt="" />
      <div class="flex justify-between space-x-10 items-center">
        <div class="flex flex-row bg-grey-400 rounded-lg h-auto w-[120px] bg-[#F1F1F3] p-1">
          <div class="flex items-center justify-center w-2/3">
            <p class="font-pro font-semibold text-sm text-[#28293D]">
              Shohrux
            </p>
          </div>
          <div class="w-1/3 centering">
            <span class="flex items-end justify-center h-8 w-8 bg-[#00AE69] rounded-[4px]">
              <img src="@/assets/images/user.svg" class="h-6 w-6" alt="" />
            </span>
          </div>
        </div>
        <router-link to="/login">
          <img src="@/assets/images/logout.svg" class="cursor-pointer" alt="" />
        </router-link>
      </div>
    </div>
  </header>
  <Navigation />
</template>

<script lang="ts" setup>
</script>

<style>

</style>