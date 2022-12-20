<template>
  <section class="bg-[#F5F5F7] min-h-screen">
    <Navbar />
    <router-view></router-view>
  </section>
</template>

<script lang="ts" setup>
import Navbar from "@/components/global/Navbar.vue"
</script>