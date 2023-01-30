<template>
  <div id="sponsors-single" class="min-h-[120vh] 2xl:min-h-[90vh] relative overflow-hidden">
    <div class="mx-auto flex justify-center">
      <div class="w-[60%] mt-10">
        <AboutSponsor />
      </div>
    </div>
    <div class="absolute left-0 right-0 mx-auto my-0 -bottom-20 2xl:-bottom-40 w-[60%]">
      <img class="w-full" src="../../assets/images/education-banner.svg" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>
import AboutSponsor from "@/components/local/AboutSponsor.vue"
import { useSponsors } from "@/stores/sponsors";

const sponsors = useSponsors();
const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

sponsors.sponsorsSingle(Number(props.id))

</script>

<style scoped>

</style>