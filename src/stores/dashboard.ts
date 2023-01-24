import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { API_HOME_DASHBOARD_QUANTITY } from '@/api/Home/Dashboard'
import type DashboardNumber from '@/types/DashboardNumber'
export const useDashboard = defineStore('dashboard', () => {
  const error = ref<string>('')
  const dashboardSumma = reactive<DashboardNumber>({
    total_must_pay: 0,
    total_need: 0,
    total_paid: 0
  })
  const errorMessage = computed(() => {
    return error;
  })


  async function dashboard_quantity() {
    error.value = ''
    return API_HOME_DASHBOARD_QUANTITY()
      .then(res => {
        if(res?.status === 200) {
          dashboardSumma.total_must_pay = res.data.total_must_pay;
          dashboardSumma.total_need = res.data.total_need;
          dashboardSumma.total_paid = res.data.total_paid;
        }
      })
      .catch(err => {
        error.value = err.response.data.detail
      })
  }
  return { dashboard_quantity, dashboardSumma, errorMessage }
})
