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
</style>