<template>
  <section class="bg-[#F5F5F7] min-h-screen relative">
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
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
} 

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-out;
}

.route-enter-to, .route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>