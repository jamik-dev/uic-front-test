<template>
  <dialog open
    class="flex w-full z-20 fixed bg-transparent h-screen items-center bg-[#0b0b0bd1] justify-center  backdrop-blur-[4px]">
    <div @click="sponsors.filterTrigger(false)" class="absolute w-full h-full"></div>
    <div class="flex flex-col z-10 w-[55%] space-y-7 rounded-lg bg-white py-7 px-8">
      <div class="flex justify-between w-full">
        <h1 class="font-rubik font-bold text-2xl">Filter</h1>
        <img @click="sponsors.filterTrigger(false)" class="cursor-pointer" src="@/assets/images/cross.svg" alt="">
      </div>
      <div class="h-[2px] w-full bg-[#F5F5F7]"></div>
      <div>
        <p class="uppercase font-rubik text-[12px] text-[#1D1D1F] tracking-wider font-semibold">Ariza Holati</p>
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
        <div class="grid gap-4 grid-cols-4 2xl:grid-cols-5 mt-2">
          <div @click="choosen2Trigger(item.id)" v-for="item in listItems2" :key="item.id"
            :class="{ 'border-[#2E5BFF] bg-[#F9FAFF]': choosenItem2 === item.id }"
            class="relative first:bg-[#E0E7FF] cursor-pointer bg-white border-2 border-[#E0E7FF] rounded-lg p-4 flex justify-center items-center">
            <span v-if="choosenItem2 === item.id" class="absolute -right-2 -top-2"><img
                src="@/assets/images/checked-icon.svg" alt=""></span>
            <div class="flex">
              <p class="text-[#2E384D] font-rubik text-sm tracking-wide font-semibold">{{ item.name }} <span
                  v-if="item.id !== 1" class="text-[#2E5BFF] font-medium">UZS</span></p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p class="uppercase font-rubik text-[12px] text-[#1D1D1F] tracking-wider font-semibold">Sana</p>
        <div class="flex w-1/2 relative">
          <input v-model="inputValue" v-maska data-maska="##.##.#### - ##.##.####" @focus="focused = true"
            @blur="focused = false"
            class="w-full border-2 py-2 px-3 rounded-lg text-gray-500 bg-[#F9FAFF] font-rubik focus:outline-none focus:border-[#2E5BFF]"
            placeholder="kk.oo.yyyy - kk.oo.yyyy" type="text" name="" id="">
          <span class="absolute block top-[10px] right-3">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.8333 4.33325H5.16667C4.24619 4.33325 3.5 5.07944 3.5 5.99992V17.6666C3.5 18.5871 4.24619 19.3333 5.16667 19.3333H16.8333C17.7538 19.3333 18.5 18.5871 18.5 17.6666V5.99992C18.5 5.07944 17.7538 4.33325 16.8333 4.33325Z"
                :stroke="focusedInput" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.3335 2.66675V6.00008" :stroke="focusedInput" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M7.6665 2.66675V6.00008" :stroke="focusedInput" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M3.5 9.33325H18.5" :stroke="focusedInput" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      <div class="h-[2px] w-full bg-[#F5F5F7]"></div>

      <div class="flex space-x-3 justify-end items-center">
        <button @click="cleanForm" :class="{ 'border-[#2E5BFF]': cleanAll2 }"
          class="px-6 py-2 space-x-1 border-2 rounded-lg flex justify-center items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.6449 10.0046C19.387 9.88988 16.972 8.81484 16.7132 8.7001C15.4988 8.1595 14.0765 8.70626 13.5366 9.91991L20.8647 13.1812C21.4053 11.9668 20.8586 10.5445 19.6449 10.0046ZM21.4161 2.07737C21.0111 1.89717 20.5806 1.94337 20.4489 2.19057L16.9403 8.80104L19.3076 9.85375L21.9798 2.87132C22.0753 2.60795 21.8212 2.25757 21.4161 2.07737Z"
              :stroke="cleanAll" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M19.6772 14.2177C18.1732 18.7966 16.2264 21.167 16.2264 21.167C16.2264 21.167 9.52132 20.9236 5.17188 15.5546C6.06979 15.6185 11.6675 15.1372 13.5958 11.4185"
              :stroke="cleanAll" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M7.77051 18.0255C7.77051 18.0255 9.89439 17.7455 11.0341 16.5549C10.1223 18.2268 9.03653 18.861 9.03653 18.861L7.77051 18.0255ZM10.7646 19.6996C10.7646 19.6996 12.4349 19.7184 15.2765 17.1009C14.2546 19.4312 12.922 20.5622 12.922 20.5622L10.7646 19.6996Z"
              :stroke="cleanAll" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M3.20337 9.04424C3.27136 9.01608 3.34423 9.00159 3.41782 9.00159C3.49142 9.00159 3.56429 9.01608 3.63228 9.04424C3.70027 9.07241 3.76205 9.11369 3.81409 9.16572C3.86612 9.21776 3.9074 9.27954 3.93557 9.34753C3.96373 9.41552 3.97822 9.4884 3.97822 9.56199C3.97822 9.63558 3.96373 9.70845 3.93557 9.77644C3.9074 9.84444 3.86612 9.90621 3.81409 9.95825C3.76205 10.0103 3.70027 10.0516 3.63228 10.0797C3.56429 10.1079 3.49142 10.1224 3.41782 10.1224C3.34423 10.1224 3.27136 10.1079 3.20337 10.0797C3.13538 10.0516 3.0736 10.0103 3.02156 9.95825C2.96952 9.90621 2.92824 9.84444 2.90008 9.77644C2.87192 9.70845 2.85742 9.63558 2.85742 9.56199C2.85742 9.4884 2.87192 9.41552 2.90008 9.34753C2.92824 9.27954 2.96952 9.21776 3.02156 9.16572C3.0736 9.11369 3.13538 9.07241 3.20337 9.04424Z"
              :fill="cleanAll" />
            <path
              d="M4.83485 9.48461C4.90491 9.41455 4.99994 9.37519 5.09903 9.37519C5.19811 9.37519 5.29314 9.41455 5.3632 9.48461C5.43327 9.55468 5.47263 9.6497 5.47263 9.74879C5.47263 9.84787 5.43327 9.9429 5.3632 10.013C5.29314 10.083 5.19811 10.1224 5.09903 10.1224C4.99994 10.1224 4.90491 10.083 4.83485 10.013C4.76479 9.9429 4.72543 9.84787 4.72543 9.74879C4.72543 9.6497 4.76479 9.55468 4.83485 9.48461Z"
              :fill="cleanAll" />
            <path
              d="M4.25179 11.1432C4.42695 10.968 4.66451 10.8696 4.91223 10.8696C5.15994 10.8696 5.39751 10.968 5.57266 11.1432C5.74782 11.3183 5.84623 11.5559 5.84623 11.8036C5.84623 12.0513 5.74782 12.2889 5.57266 12.464C5.39751 12.6392 5.15994 12.7376 4.91223 12.7376C4.66451 12.7376 4.42695 12.6392 4.25179 12.464C4.07663 12.2889 3.97822 12.0513 3.97822 11.8036C3.97822 11.5559 4.07663 11.3183 4.25179 11.1432Z"
              :fill="cleanAll" />
          </svg>
          <p :class="{ 'text-[#2E5BFF]': cleanAll2 }" class="text-[#B2B7C1] font-rubik">Tozalash</p>
        </button>
        <button
          class="px-5 py-2 bg-[#3366FF] space-x-1 border-2 border-[#3366FF] rounded-lg flex justify-center items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 12C2 12 5.63636 4.72729 12 4.72729C18.3636 4.72729 22 12 22 12C22 12 18.3636 19.2727 12 19.2727C5.63636 19.2727 2 12 2 12Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M11.9997 14.7273C13.506 14.7273 14.727 13.5062 14.727 12C14.727 10.4937 13.506 9.27271 11.9997 9.27271C10.4935 9.27271 9.27246 10.4937 9.27246 12C9.27246 13.5062 10.4935 14.7273 11.9997 14.7273Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <p class="text-white font-rubik">Natijalarni ko‘rish</p>
        </button>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import { useSponsors } from '@/stores/sponsors';
import { ref, computed } from "vue";
import { vMaska } from "maska";
import type itemObj from "@/types/DashboardFilter"

const sponsors = useSponsors();
const listItems = ref<itemObj[]>([
  { id: 1, name: 'Barchasi' },
  { id: 2, name: 'Yangi' },
  { id: 3, name: 'Moderatsiyada' },
  { id: 4, name: 'Tasdiqlangan' },
  { id: 5, name: 'Bekor qilingan' }
])
const listItems2 = ref<itemObj[]>([
  { id: 1, name: 'Barchasi' },
  { id: 2, name: '1 000 000' },
  { id: 3, name: '5 000 000' },
  { id: 4, name: '7 000 000' },
  { id: 5, name: '10 000 000' },
  { id: 6, name: '30 000 000' },
  { id: 7, name: '50 000 000' }
])
const selectTrigger = ref(false);
const focused = ref(false)
const inputValue = ref();
const choosenItem = ref<itemObj>({ id: 1, name: 'Barchasi' })
const choosenItem2 = ref(1)

const arrowColor = computed(() => {
  return selectTrigger.value ? '#2E5BFF' : 'currentColor';
})

const selectBorderColor = computed(() => {
  return selectTrigger.value ? 'border-[#2E5BFF]' : 'border-gray-300';
})

const focusedInput = computed(() => {
  return focused.value ? '#2E5BFF' : '#B5B5C3';
})

const cleanAll = computed(() => {
  return choosenItem.value.id !== 1 || inputValue.value || choosenItem2.value !== 1 ? '#2E5BFF' : '#B2B7C1';
})

const cleanAll2 = computed(() => {
  return choosenItem.value.id !== 1 || inputValue.value || choosenItem2.value !== 1 ? true : false;
})

function choosenTrigger(id: number) {
  const item = listItems.value.filter(t => t.id === id);
  choosenItem.value = item[0];
  selectTrigger.value = false;
}

function choosen2Trigger(id: number) {
  const item = listItems2.value.filter(t => t.id === id);
  choosenItem2.value = item[0].id;
}

function cleanForm() {
  choosenItem.value = { id: 1, name: 'Barchasi' };
  choosenItem2.value = 1;
  inputValue.value = "";
}
</script>

<style scoped>

</style>