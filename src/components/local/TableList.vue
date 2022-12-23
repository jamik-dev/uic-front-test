<template>
  <tbody>
    <tr tabindex="0" class="bg-[#fff] text-center h-16">
      <td class="rounded-l-lg">
        <p class="text-base font-medium">
          {{ index }}
        </p>
      </td>
      <td>
        <p class="text-base font-medium">
          {{ list.full_name }}
        </p>
      </td>
      <td>
        <p class="text-sm">
          {{ list.phone }}
        </p>
      </td>
      <td>
        <p class="text-sm font-bold">
          {{ list.sum }} <span class="font-medium text-[#B2B7C1]">UZS</span>
        </p>
      </td>
      <td>
        <p class="text-sm font-bold">{{ list.spent }} <span class="font-medium text-[#B2B7C1]">UZS</span></p>
      </td>
      <td>
        <p class="text-sm">
          {{ list.created_at.slice(0, 10) }}
        </p>
      </td>
      <td>
        <p class="text-sm" :class="moderateColor">{{ list.get_status_display }}</p>
      </td>
      <td class="rounded-r-lg">
        <img src="@/assets/images/eye.svg" class="mx-auto" alt="">
      </td>
    </tr>
    <tr class="h-4"></tr>
  </tbody>
</template>

<script lang="ts" setup>
import {computed} from 'vue'

const props = defineProps({
  list: {
    required: true,
    type: null
  },
  index: {
    required: true,
    type: null
  }
})
const moderateColor = computed(() => {
  if(props.list.get_status_display == 'Yangi') {
    return 'text-[#5BABF2]'
  } else if (props.list.get_status_display == 'Moderatsiyada') {
    return 'text-[#FFA445]'
  } else if (props.list.get_status_display == 'Tasdiqlangan') {
    return 'text-[#00CF83]'
  } else {
    return 'text-[#979797]'
  }
})

</script>
