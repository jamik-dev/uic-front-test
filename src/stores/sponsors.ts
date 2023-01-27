import {API_HOME_SPONSORS_LIST} from "@/api/Home/SponsorsList"

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type Sponsors from '@/types/Sponsors'

export const useSponsors = defineStore('sponsors', () => {
  const sponsorsList = ref(null)
  const sponsorsCount = ref<number>(0)
  const sponsorsNext = ref(null)
  const sponsorsPrevious = ref(null)

  const filterModal = ref<Boolean>(false)

  const doubleCount = computed(() => {
    return sponsorsList;
  })
  
  function filterTrigger(bool: Boolean) {
    filterModal.value = bool;
  }
  
  async function sponsors({page, page_size, search, ordering}: Sponsors) {
    return API_HOME_SPONSORS_LIST(page, page_size, search, ordering)
      .then(res => {
        if(res?.status === 200) {
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
  return { sponsors, filterModal, filterTrigger, doubleCount, sponsorsList, sponsorsCount }
})
