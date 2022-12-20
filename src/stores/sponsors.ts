import {API_HOME_SPONSORS_LIST} from "@/api/Home/SponsorsList"

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type Sponsors from '@/types/Sponsors'

export const useHomeSponsorsList = defineStore('sponsors', () => {
  const sponsorsList = ref(null)
  const sponsorsCount = ref(null)
  const sponsorsNext = ref(null)
  const sponsorsPrevious = ref(null)


  const doubleCount = computed(() => {
    return sponsorsList;
  })

  console.log(doubleCount.value)

  async function sponsors({page, page_size, search, ordering}: Sponsors) {
    return API_HOME_SPONSORS_LIST(page, page_size, search, ordering)
      .then(res => {
        if(res?.status === 200) {
          console.log(res?.data.results)
          sponsorsList.value = res?.data.results;
          sponsorsCount.value = res?.data.count;
          sponsorsNext.value = res?.data.next;
          sponsorsPrevious.value = res?.data.previous;
        } else {
          console.log(res)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
  return { sponsors, doubleCount, sponsorsList }
})
