<template>
      <div class="py-12">
        <div class="w-[85%] mx-auto">
          <table
            class="table w-full"
          >
            <thead class="bg-gray-800 text-gray-500">
              <tr>
                <th scope="col" class="py-3 px-6">#</th>
                <th scope="col" class="py-3 px-6">f.i.sh.</th>
                <th scope="col" class="py-3 px-6">Tel.Raqami</th>
                <th scope="col" class="py-3 px-6">Homiylik summasi</th>
                <th scope="col" class="py-3 px-6">Sarflangan summa</th>
                <th scope="col" class="py-3 px-6">Sana</th>
                <th scope="col" class="py-3 px-6">Holati</th>
                <th scope="col" class="py-3 px-6">Amallar</th>
              </tr>
            </thead>
            <TableList v-for="list in sponsors.sponsorsList" :list="list" />
          </table>

          <div class="flex justify-between items-center">
            <div>
              <p class="font-rubik text-[#1D1D1F]">{{sponsors.sponsorsCount}} tadan  1-{{ pagination.page_size }} ko‘rsatilmoqda</p>
            </div>
            <div class="flex space-x-6">
              <div class="flex space-x-4 items-center">
                <p class="font-rubik text-[#1D1D1F]">Ko‘rsatish</p>
                <select v-model.number="pagination.page_size" class="p-1 outline-0 bg-[#fff] pagination-button h-8 w-14">
                  <option selected value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>

                </select>
              </div>
              <div class="flex space-x-4 font-rubik">
                <div @click="pagination.page = pagination.page - 1 > 0 ? pagination.page - 1 : pagination.page" class="centering h-8 w-8 rounded-md border border-[#DFE3E8] bg-[#fff]" :class="{'bg-[#DFE3E8]': pagination.page == 1}"><img src="@/assets/images/left-arrow.svg" alt=""></div>
                <div @click="pagination.page=1" class="centering pagination-button h-8 w-8" :class="activeClass(1)">1</div>
                <div @click="pagination.page=2" class="centering pagination-button h-8 w-8" :class="activeClass(2)">2</div>
                <div class="centering pagination-button h-8 w-8" :class="activeClass2" >{{ (pagination.page != 1 && pagination.page != 2 && pagination.page != Math.floor(sponsors.sponsorsCount/pagination.page_size) && pagination.page != Math.floor(sponsors.sponsorsCount/pagination.page_size + 1)) ?  pagination.page : '...'}}</div>
                <div @click="pagination.page=Math.floor(sponsors.sponsorsCount/pagination.page_size)" class="centering pagination-button h-8 w-8" :class="activeClass(Math.floor(sponsors.sponsorsCount/pagination.page_size))" >{{ Math.floor(sponsors.sponsorsCount/pagination.page_size) }}</div>
                <div @click="pagination.page=Math.floor(sponsors.sponsorsCount/pagination.page_size)+1" class="centering pagination-button h-8 w-8" :class="activeClass(Math.floor(sponsors.sponsorsCount/pagination.page_size)+1)" >{{ Math.floor(sponsors.sponsorsCount/pagination.page_size)+1 }}</div>
                <div @click="pagination.page = pagination.page < Math.floor(sponsors.sponsorsCount/pagination.page_size)+1 ? pagination.page + 1 : pagination.page" class="centering bg-[#fff] h-8 w-8 rounded-md border border-[#DFE3E8]" :class="{'bg-[#DFE3E8]': pagination.page == Math.floor(sponsors.sponsorsCount/pagination.page_size)+1}" ><img src="@/assets/images/right-arrow.svg" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>  
</template>

<script lang="ts" setup>
import TableList from "./TableList.vue"
import { useHomeSponsorsList } from "@/stores/sponsors";
import type Sponsors from "@/types/Sponsors";
import {reactive, watch, computed} from 'vue'
const sponsors = useHomeSponsorsList()

const pagination = reactive<Sponsors>({
  page: 1,
  page_size: 5,
  search: '',
  ordering: ''
})
const activeClass = (num: number) => {
  return {'activeClass': pagination.page === num ? true : false}
}

const activeClass2 = computed(() => {
  return (pagination.page != 1 && pagination.page != 2 && pagination.page != Math.floor(sponsors.sponsorsCount/pagination.page_size) && pagination.page != Math.floor(sponsors.sponsorsCount/pagination.page_size + 1)) ? 'activeClass' : '';
})

watch(pagination, function() {
  sponsors.sponsors(pagination)
})


</script>

<style>
</style>