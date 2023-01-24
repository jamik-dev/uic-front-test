<template>
    <div class="flex w-1/3 p-5 bg-white rounded-lg space-x-3">
      <div class="flex justify-center items-center">
        <img :src="getImageUrl" alt="">
      </div>
      <div class="flex flex-col justify-center">
        <p class="text-[#7A7A9D] text-sm font-rubik">{{ props.title }}</p>
        <div class="flex space-x-2">
          <h1 class="text-[#2E384D] text-2xl font-bold">{{ props.quantity }}</h1><span
            class="text-[#B2B7C1] text-2xl font-bold">UZS</span>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue';
const props = defineProps({
  quantity: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  img: {
    required: true,
    type: String
  }
})

const getImageUrl = computed(() => {
  return new URL(`../../assets/images/${props.img}`, import.meta.url).href
})
</script>

<style scoped>
</style>