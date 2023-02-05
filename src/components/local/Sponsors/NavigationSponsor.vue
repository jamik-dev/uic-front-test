<template>
  <div class="w-full bg-white">
    <div class="w-[85%] mx-auto flex items-center py-6">
      <div class="flex w-full items-center">
        <router-link to="/sponsors" class="flex items-center text-xl text-[#28293D] font-semibold"><img class="mr-3"
            src="@/assets/images/arrow-left-2.svg" alt="">{{ sponsors.data.full_name }}</router-link>
        <div :class="moderateColor" class="px-3 py-[6px] font-rubik flex items-center rounded-lg ml-3 text-xs">
          {{ sponsors.data.get_status_display }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSponsors } from '@/stores/sponsors';
import { computed } from "vue";
const sponsors = useSponsors();


const moderateColor = computed(() => {
  if (sponsors.data.get_status_display == 'Yangi') {
    return 'text-[#5BABF2] bg-[#DDFFF2]'
  } else if (sponsors.data.get_status_display == 'Moderatsiyada') {
    return 'text-[#FFA445] bg-[#ffa4451a]'
  } else if (sponsors.data.get_status_display == 'Tasdiqlangan') {
    return 'text-[#00CF83] bg-[#00cf831a]'
  } else {
    return 'text-[#979797] bg-[#9797971a]'
  }
})
</script>

<style scoped>

</style>