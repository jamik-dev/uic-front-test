<template>
  <div class="flex bg-white p-6 rounded-lg w-full">
    <apexchart type="line" class="w-full" height="400" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script lang="ts" setup>

const chartOptions = {
  chart: {
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Homiylar va talabalar soni',
    align: 'left',
    style: {
      fontSize: '26px'
    }
  },
  xaxis: {
    categories: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
  }
}

const series = [{
  name: "Homiylar",
  data: [5000, 20000, 5000, 30000, 10000, 40000, 20000, 45000, 25000, 40000, 20000, 35000],
  color: '#4C6FFF'
},
{
  name: "Talabalar",
  data: [30000, 20000, 35000, 25000, 45000, 25000,45000, 10000, 45000, 20000, 40000, 20000],
  color: '#FF92AE'
}]
</script>

<style scoped>

</style>