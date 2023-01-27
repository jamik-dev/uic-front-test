<template>
  <section class="bg-[#F5F5F7] min-h-screen h-auto relative">
    <transition name="fade">
      <SponsorsFilter v-if="sponsors.filterModal" />
    </transition>
    <Navbar />
    <Navigation />
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
import Navigation from "@/components/global/Navigation.vue"
import Navbar from "@/components/global/Navbar.vue"
import SponsorsFilter from "@/components/local/SponsorsFilter.vue";
import { useSponsors } from "@/stores/sponsors";

const sponsors = useSponsors();

</script>

<style>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease; 
}
</style>