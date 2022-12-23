<template>
  <div class="z-[-1] flex items-center py-6 bg-[#fff]">
    <div class="flex flex-row mx-auto justify-between w-[85%]">
      <div class="flex">
        <router-link
        to="/dashboard"
          class="border-2 duration-200 rounded-l-lg border-[#E0E7FF] py-[12px] px-12 text-pro font-semibold text-sm tracking-wider text-filterColor">
          DASHBOARD
      </router-link>
        <router-link
        to="/sponsors"
          class="border-y-2 duration-200 border-[#E0E7FF] py-[12px] px-12 text-pro font-semibold text-sm tracking-wider text-filterColor">
          HOMIYLAR
    </router-link>
        <router-link
        to="/students"
          class="border-2 duration-200 rounded-r-lg border-[#E0E7FF] py-[12px] px-12  font-semibold text-sm tracking-wider text-filterColor">
          TALABALAR
        </router-link>
      </div>
      <div class="flex space-x-10">
        <div class="flex bg-[#E8E8E8] rounded-lg justify-center items-center">
          <span class="p-3"><img src="@/assets/images/search.svg" class="text-[#B1B1B8] h-6 w-6" alt="" /></span>
          <input type="text"
            class="py-3 pr-3 pl-1 rounded-r-lg w-full outline-0 bg-[#E8E8E8] text-[#B1B1B8] placeholder:text-[#B1B1B8] text-pro placeholder:text-pro"
            placeholder="Izlash" />
        </div>
        <div class="centering p-3 rounded-lg bg-[#EDF1FD] text-[#3365FC] space-x-2 px-8">
          <span><img src="@/assets/images/filter.svg" alt="" /></span>
          <p class="font-pro text-md">Filter</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
</style>