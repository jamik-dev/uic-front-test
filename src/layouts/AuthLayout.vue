<template>
  <section class="bg-[#F5F5F7] min-h-screen">
    <notifications :pauseOnHover="true" />
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
  </router-view>
  </section>
</template>

<style scoped>
</style>
