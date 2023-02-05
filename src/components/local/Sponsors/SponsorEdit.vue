<template>
  <dialog open
    class="flex w-full z-20 fixed bg-transparent overflow-y-initial min-h-screen items-center bg-[#0b0b0bd1] justify-center backdrop-blur-[4px]">
    <div @click="sponsors.editModalTrigger(false)" class="absolute w-full h-full"></div>
    <div class="flex flex-col z-10 w-[45%] overflow-y-auto h-[80vh] 2xl:h-auto space-y-4 rounded-lg bg-white py-7 px-8">
      <div class="flex justify-between w-full">
        <h1 class="font-rubik font-bold text-2xl">Tahrirlash</h1>
        <img @click="sponsors.editModalTrigger(false)" class="cursor-pointer" src="@/assets/images/cross.svg" alt="">
      </div>

      <div class="h-[2px] w-full bg-[#F5F5F7]"></div>

      <div class="flex">
        <button @click="legalChange = false" :class="{ 'border-[#3366FF] text-[#fff] bg-[#3366FF]': !legalChange }"
          class=" w-1/2 uppercase border-2 border-r-0 duration-200 rounded-l-lg border-[#E0E7FF] py-[12px] px-12 text-pro font-semibold text-sm tracking-wider text-filterColor">
          Jismoniy shaxs
        </button>
        <button @click="legalChange = true" :class="{ 'border-[#3366FF] text-[#fff] bg-[#3366FF]': legalChange }"
          class="w-1/2 uppercase border-2 border-l-0 duration-200 rounded-r-lg border-[#E0E7FF] py-[12px] px-12  font-semibold text-sm tracking-wider text-filterColor">
          Yuridik shaxs
        </button>
      </div>

      <div>
        <p class="uppercase font-rubik text-[12px] text-[#1D1D1F] tracking-wider font-semibold">F.I.Sh. (Familiya Ism
          Sharifingiz)</p>
        <input v-model="full_name" id="login" autocomplete="off" type="text" placeholder="Blablayev Blabla"
          class="focus:border-[#2E5BFF] text-[#2E384D] login-input" />
      </div>

      <div>
        <p class="uppercase font-rubik text-[12px] text-[#1D1D1F] tracking-wider font-semibold">Telefon raqam</p>
        <input v-model="phone" id="login" autocomplete="off" placeholder="+998 (99) 999-99-99" v-maska
          data-maska="+998 (##) ###-##-##" type="text" class="focus:border-[#2E5BFF] text-[#2E384D] login-input" />
      </div>

      <div>
        <p class="uppercase font-rubik text-[12px] text-[#1D1D1F] tracking-wider font-semibold">Holati</p>
        <div class="relative mt-1">
          <button @click="selectTrigger = !selectTrigger" type="button" :class="selectBorderColor"
            class="relative w-full bg-[#F9FAFF] cursor-pointer rounded-md border-[1px] px-2 py-3 text-left shadow-sm focus:outline-none sm:text-sm"
            aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
            <span class="flex items-center">
              <span class="ml-3 text-[16px] opacity-80 block truncate">{{ choosenItem.name }}</span>
            </span>
            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                :fill="arrowColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </button>
          <transition name="fade">
            <ul v-if="selectTrigger"
              class="absolute border-[1px] border-[#E0E7FF] z-10 mt-2 max-h-56 w-full overflow-auto rounded-md bg-white text-base shadow-lg focus:outline-none"
              tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
              <li @click="choosenTrigger(item.id)" v-for="item in listItems" :key="item.id"
                class="last:border-0 border-b-[1px] border-[#E0E7FF] text-gray-900 relative cursor-pointer select-none p-2"
                id="listbox-option-0" role="option">
                <div class="flex items-center">
                  <span class="ml-3 opacity-80 block truncate">{{ item.name }}</span>
                </div>
                <span v-if="choosenItem.id === item.id"
                  class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </li>
            </ul>
          </transition>
        </div>
      </div>

      <div>
        <p class="uppercase font-rubik text-[12px] text-[#1D1D1F] tracking-wider font-semibold">Homiylik summasi</p>
        <input v-model.trim="sum" id="login" autocomplete="off" type="text" v-maska data-maska="9 99#"
          data-maska-tokens="9:[0-9]:repeated" data-maska-reversed
          class="focus:border-[#2E5BFF] text-[#2E384D] login-input" />
      </div>

      <div>
        <p class="uppercase font-rubik text-[12px] text-[#1D1D1F] tracking-wider font-semibold">To'lov Turi</p>
        <div class="relative mt-1">
          <button @click="selectTrigger2 = !selectTrigger2" type="button" :class="selectBorderColor2"
            class="relative w-full bg-[#F9FAFF] cursor-pointer rounded-md border-[1px] px-2 py-3 text-left shadow-sm focus:outline-none sm:text-sm"
            aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
            <span class="flex items-center">
              <span class="ml-3 text-[16px] opacity-80 block truncate">{{ choosenItem2.name }}</span>
            </span>
            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                :fill="arrowColor2" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </button>
          <transition name="fade">
            <ul v-if="selectTrigger2"
              class="absolute border-[1px] border-[#E0E7FF] z-10 mt-2 max-h-56 w-full overflow-auto rounded-md bg-white text-base shadow-lg focus:outline-none"
              tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
              <li @click="choosenTrigger2(item.id)" v-for="item in listItems2" :key="item.id"
                class="last:border-0 border-b-[1px] border-[#E0E7FF] text-gray-900 relative cursor-pointer select-none p-2"
                id="listbox-option-0" role="option">
                <div class="flex items-center">
                  <span class="ml-3 opacity-80 block truncate">{{ item.name }}</span>
                </div>
                <span v-if="choosenItem2.id === item.id"
                  class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </li>
            </ul>
          </transition>
        </div>
      </div>

      <div class="h-[2px] w-full bg-[#F5F5F7]"></div>

      <div v-if="legalChange">
        <p class="uppercase font-rubik text-[12px] text-[#1D1D1F] tracking-wider font-semibold">Tashkilot nomi</p>
        <input v-model="firm" id="login" autocomplete="off" type="text"
          class="focus:border-[#2E5BFF] text-[#2E384D] login-input" />
      </div>

      <div class="flex justify-end items-center">
        <button @click="saveChanges"
          class="px-5 py-2 bg-[#3366FF] space-x-1 border-2 border-[#3366FF] rounded-lg flex justify-center items-center">
          <img src="@/assets/images/save.svg" alt="">
          <p class="text-white font-rubik">Saqlash</p>
        </button>
      </div>

    </div>
  </dialog>
</template>

<script lang="ts" setup>
import { useSponsors } from '@/stores/sponsors';
import { ref, computed, watch } from "vue";
import { vMaska } from "maska";
import type itemObj from "@/types/DashboardFilter"

const sponsors = useSponsors();
const listItems = ref<itemObj[]>([
  { id: 1, name: 'Yangi' },
  { id: 2, name: 'Moderatsiyada' },
  { id: 3, name: 'Tasdiqlangan' },
  { id: 4, name: 'Bekor qilingan' }
])
const listItems2 = ref<itemObj[]>([
  { id: 1, name: 'Pul o\'tkazmalari' },
  { id: 2, name: 'bla bla' },
])
const selectTrigger = ref(false);
const selectTrigger2 = ref(false);

const legalChange = ref(sponsors.data.is_legal)

const choosenItem = ref<itemObj>({ id: listItems.value.filter(t => t.name === sponsors.data.get_status_display)[0].id, name: sponsors.data.get_status_display })
const choosenItem2 = ref<itemObj>({ id: 1, name: 'Pul o\'tkazmalari' })

const arrowColor = computed(() => {
  return selectTrigger.value ? '#2E5BFF' : 'currentColor';
})

const selectBorderColor = computed(() => {
  return selectTrigger.value ? 'border-[#2E5BFF]' : 'border-gray-300';
})

const arrowColor2 = computed(() => {
  return selectTrigger2.value ? '#2E5BFF' : 'currentColor';
})

const selectBorderColor2 = computed(() => {
  return selectTrigger2.value ? 'border-[#2E5BFF]' : 'border-gray-300';
})


function choosenTrigger(id: number) {
  const item = listItems.value.filter(t => t.id === id);
  choosenItem.value = item[0];
  selectTrigger.value = false;
}

function choosenTrigger2(id: number) {
  const item = listItems2.value.filter(t => t.id === id);
  choosenItem2.value = item[0];
  selectTrigger2.value = false;
}

// inputs modal 

const full_name = ref(sponsors.data.full_name);
const phone = ref(sponsors.data.phone);
const sum = ref<number | string>(sponsors.data.sum);
const firm = ref(sponsors.data.firm);

watch(sum, function () {
  sum.value = String(sum.value).slice(0, 10)
})

function saveChanges() {
  sponsors.sponsorsUpdate(sponsors.data.id, { full_name: full_name.value, phone: phone.value, sum: Number(String(sum.value).replace(/\s/g, '').slice(0, 8)), firm: firm.value, is_legal: legalChange.value, comment: '' })
  sponsors.editModalTrigger(false);
}
</script>

<style scoped>

</style>