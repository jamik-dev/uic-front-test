<template>
  <section id="sponsors">
    <Navigation />
    <Tablet :ushla="sponsorsList.sponsorsList" />
  </section>
</template>

<script lang="ts" setup>
import Navigation from "@/components/local/Navigation.vue"
import Tablet from "@/components/local/Tablet.vue"
import { useHomeSponsorsList } from "@/stores/sponsors";
import type Sponsors from "@/types/Sponsors";
import {reactive} from 'vue'

const sponsorsList = useHomeSponsorsList()
const pagination = reactive<Sponsors>({
  page: 1,
  page_size: 10,
  search: '',
  ordering: ''
})
sponsorsList.sponsors(pagination) 

</script>