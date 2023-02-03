<template>
  <section class="bg-[#F5F5F7] min-h-screen h-auto relative">

    <transition name="fade">
      <SponsorsFilter v-if="sponsors.filterModal" />
    </transition>

    <transition name="fade">
      <SponsorEdit v-if="sponsors.editModal" />
    </transition>

    <Navbar />

    <transition name="fade" mode="out-in">
      <Navigation v-if="sponsors.navigation" />
      <NavigationSponsor v-else />
    </transition>

    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <keep-alive>
          <component :is="slotProps.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts" setup>
import Navigation from "@/components/global/Navigation.vue";
import NavigationSponsor from '@/components/local/Sponsors/NavigationSponsor.vue';
import Navbar from "@/components/global/Navbar.vue";
import SponsorsFilter from "@/components/local/Sponsors/SponsorsFilter.vue";
import SponsorEdit from "@/components/local/Sponsors/SponsorEdit.vue";
import { useSponsors } from "@/stores/sponsors";
import { storeToRefs } from 'pinia';
import { watch } from "vue";

const sponsors = useSponsors();
const {editModal} = storeToRefs(sponsors);

watch(editModal, function() {
  const body = document.querySelector('body') as HTMLBodyElement; 
  body.style.overflow = editModal.value ? 'hidden' : 'visible';
})

</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>