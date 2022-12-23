<template>
  <section id="sponsors">
    <Tablet  v-if="sponsorsList.sponsorsList" :ushla="sponsorsList.sponsorsList" />
    <div v-if="!sponsorsList.sponsorsList" class="flex items-center justify-center vue-loader">
      <vue-loaders-ball-pulse color="#5BABF2" scale="2" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import Tablet from "@/components/local/Tablet.vue"
import { useHomeSponsorsList } from "@/stores/sponsors";
import type Sponsors from "@/types/Sponsors";
import {reactive, ref} from 'vue'


const sponsorsList = useHomeSponsorsList()
const pagination = reactive<Sponsors>({
  page: 11,
  page_size: 5,
  search: '',
  ordering: ''
})

sponsorsList.sponsors(pagination)

</script>

<style scoped>
.vue-loader{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>