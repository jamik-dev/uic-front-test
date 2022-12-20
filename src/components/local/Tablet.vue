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
            <tbody v-for="list in props.ushla">
              <tr
                tabindex="0"
                class="bg-[#fff] text-center h-16"
              >
                <td class="rounded-l-lg">
                  <p
                    class="text-base font-medium"
                  >
                    {{ list.id }}
                  </p>
                </td>
                <td>
                  <p
                    class="text-base font-medium"
                  >
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
                    {{list.created_at}}
                  </p>
                </td>
                <td>
                  <p class="text-sm text-[#5BABF2]">{{ list.get_status_display }}</p>
                </td>
                <td class="rounded-r-lg">
                    <img src="@/assets/images/eye.svg" class="mx-auto" alt="">
                </td>
              </tr>
              <tr class="h-4"></tr>
            </tbody>
          </table>

          <div class="flex justify-between items-center">
            <div>
              <p class="font-rubik text-[#1D1D1F]">59 tadan  1-10 ko‘rsatilmoqda</p>
            </div>
            <div class="flex space-x-6">
              <div class="flex space-x-4 items-center">
                <p class="font-rubik text-[#1D1D1F]">Ko‘rsatish</p>
                <div class="centering bg-[#fff] pagination-button h-8 w-14">10 <img class="ml-2" src="@/assets/images/bottom-arrow.svg" alt=""></div>
              </div>
              <div class="flex space-x-4 font-rubik">
                <div class="centering h-8 w-8 rounded-md bg-[#DFE3E8]"><img src="@/assets/images/left-arrow.svg" alt=""></div>
                <div class="centering pagination-button h-8 w-8">1</div>
                <div class="centering pagination-button h-8 w-8">2</div>
                <div class="centering pagination-button h-8 w-8">...</div>
                <div class="centering pagination-button h-8 w-8">9</div>
                <div class="centering pagination-button h-8 w-8">10</div>
                <div class="centering bg-[#fff] h-8 w-8 rounded-md border border-[#DFE3E8]"><img src="@/assets/images/right-arrow.svg" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>  
</template>

<script lang="ts" setup>
const props = defineProps({
  ushla: {
    required: true,
    type: null
  }
})

</script>

<style>
</style>