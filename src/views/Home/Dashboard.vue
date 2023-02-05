<template>
  <div class="mt-12 pb-12 w-[85%] mx-auto">
    <div class="flex space-x-7">
      <DashboardMoney :quantity="formatter(dashboard.dashboardSumma.total_paid)" :img="'money-blue.svg'"
        :title="'Jami to‘langan summa'" />
      <DashboardMoney :quantity="formatter(dashboard.dashboardSumma.total_need)" :img="'money-yellow.svg'"
        :title="'Jami so‘ralgan summa'" />
      <DashboardMoney :quantity="formatter(dashboard.dashboardSumma.total_must_pay)" :img="'money-orange.svg'"
        :title="'To‘lanishi kerak summa'" />
    </div>
    <div class="flex w-full mt-7">
      <LineChart />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DashboardMoney from '@/components/local/Dashboard/DashboardMoney.vue';
import LineChart from '@/components/local/Dashboard/LineChart.vue';
import { useDashboard } from '@/stores/dashboard';
const dashboard = useDashboard();

dashboard.dashboard_quantity();

function formatter(num: Number) {
  return num.toLocaleString('fr-Fr');
}


</script>

<style scoped>

</style>