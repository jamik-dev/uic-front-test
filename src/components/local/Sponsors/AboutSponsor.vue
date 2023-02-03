<template>
  <div class="w-full bg-white rounded-lg flex flex-col space-y-8 py-6 px-8 shadow-lg">
    <div class="flex justify-between items-center">
      <h1 class="font-rubik text-2xl font-semibold">Homiy haqida</h1>
      <button @click="sponsors.editModalTrigger(true)" class="outline-none px-8 py-3 flex items-center rounded-lg bg-[#EDF1FD] font-rubik text-md text-[#3365FC]"><img class="mr-2" src="@/assets/images/edit.svg" alt=""> Tahrirlash</button>
    </div>
    <div class="flex space-x-5 items-center">
      <div class="flex justify-center rounded-lg bg-[#EAECF0] border-[1px] border-[#EBEEFC] items-center p-4">
        <img src="@/assets/images/user-2.svg" alt="">
      </div>
      <p class="font-rubik font-semibold max-w-[20%]">{{ sponsors.data.full_name }}</p>
    </div>
    <div class="grid grid-cols-2 gap-y-6">
      <div class="flex flex-col space-y-3">
        <p class="font-rubik text-[#B5B5C3] uppercase text-xs font-semibold tracking-widest">telefon raqam</p>
        <p class="font-rubik text-md font-semibold tracking-wider">{{ sponsors.data.phone }}</p>
      </div>
      <div class="flex flex-col space-y-3">
        <p class="font-rubik text-[#B5B5C3] uppercase text-xs font-semibold tracking-widest">Homiylik summasi</p>
        <p class="font-rubik text-md font-semibold tracking-wider">{{ sponsors.data.sum.toLocaleString('fr-Fr') }} UZS</p>
      </div>
      <div v-if="sponsors.data.is_legal" class="flex flex-col space-y-3">
        <p class="font-rubik text-[#B5B5C3] uppercase text-xs font-semibold tracking-widest">Tashkilot nomi</p>
        <p class="font-rubik text-md font-semibold tracking-wider">{{ sponsors.data.firm }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSponsors } from '@/stores/sponsors';
const sponsors = useSponsors();

</script>

<style scoped>
</style>