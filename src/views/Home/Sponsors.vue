<template>
  <section id="sponsors">
    <Tablet v-if="sponsorsList.sponsorsList" />
    <div v-if="!sponsorsList.sponsorsList" class="flex items-center justify-center vue-loader">
      <vue-loaders-ball-pulse color="#5BABF2" scale="2" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import Tablet from "@/components/local/Sponsors/Tablet.vue"
import { useSponsors } from "@/stores/sponsors";
import type Sponsors from "@/types/Sponsors";
import { reactive } from 'vue'


const sponsorsList = useSponsors()

const pagination = reactive<Sponsors>({
  page: 1,
  page_size: 10,
  search: '',
  ordering: ''
})

sponsorsList.sponsors(pagination)

</script>

<style scoped>
.vue-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>