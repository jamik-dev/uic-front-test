import { API_HOME_SPONSORS_LIST } from "@/api/Home/SponsorsList";
import { API_HOME_SPONSORS_SINGLE, API_HOME_SPONSORS_UPDATE } from "@/api/Home/SponsorsSingle";

import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";
import type Sponsors from "@/types/Sponsors";
import type SponsorsSingle from "@/types/SponsorsSingle";
import type SponsorsUpdate from "@/types/SponsorsUpdate"
export const useSponsors = defineStore("sponsors", () => {
  // sponsors
  const sponsorsList = ref(null);
  const sponsorsCount = ref<number>(0);
  const sponsorsNext = ref(null);
  const sponsorsPrevious = ref(null);

  const filterModal = ref<Boolean>(false);

  const doubleCount = computed(() => {
    return sponsorsList;
  });

  function filterTrigger(bool: Boolean) {
    filterModal.value = bool;
  }

  const page_sp = ref(1);
  const page_size_sp = ref(10);

  async function sponsors({ page, page_size, search, ordering }: Sponsors) {
    page_sp.value = page;
    page_size_sp.value = page_size;
    return API_HOME_SPONSORS_LIST(page, page_size, search, ordering)
      .then((res) => {
        if (res?.status === 200) {
          sponsorsList.value = res?.data.results;
          sponsorsCount.value = res?.data.count;
          sponsorsNext.value = res?.data.next;
          sponsorsPrevious.value = res?.data.previous;
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // sponsors single
  const editModal = ref(false);
  const navigation = ref(true);
  const data = reactive<SponsorsSingle>({
    comment: "",
    created_at: "",
    firm: "",
    full_name: "",
    get_status_display: "",
    id: 0,
    is_legal: false,
    phone: "",
    sum: 0,
  });
  async function sponsorsSingle(id: number) {
    return API_HOME_SPONSORS_SINGLE(id)
      .then((res) => {
        if (res?.status === 200) {
          data.comment = res.data.comment;
          data.created_at = res.data.created_at;
          data.firm = res.data.firm;
          data.full_name = res.data.full_name;
          data.get_status_display = res.data.get_status_display;
          data.id = res.data.id;
          data.is_legal = res.data.is_legal;
          data.phone = res.data.phone;
          data.sum = res.data.sum;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function sponsorsUpdate(id: number, { full_name, phone, sum, is_legal, firm, comment }: SponsorsUpdate) {
    return API_HOME_SPONSORS_UPDATE(id, { full_name, phone, sum, is_legal, firm, comment })
      .then((res) => {
        if(res?.status === 200) {
          data.comment = res.data.comment;
          data.created_at = res.data.created_at;
          data.firm = res.data.firm;
          data.full_name = res.data.full_name;
          data.get_status_display = res.data.get_status_display;
          data.id = res.data.id;
          data.is_legal = res.data.is_legal;
          data.phone = res.data.phone;
          data.sum = res.data.sum;
        }
      })

  }

  function navigationTrigger(bool: boolean) {
    navigation.value = bool;
  }

  function editModalTrigger(bool: boolean) {
    editModal.value = bool;
  }

  return {
    page_sp,
    page_size_sp,
    sponsors,
    filterModal,
    filterTrigger,
    doubleCount,
    sponsorsList,
    sponsorsCount,
    navigationTrigger,
    navigation,
    sponsorsSingle,
    data,
    editModal,
    editModalTrigger,
    sponsorsUpdate
  };
});
