import type SponsorsUpdate from "@/types/SponsorsUpdate";
import axios from "axios"

export const API_HOME_SPONSORS_SINGLE = async (id: number) => {
  return await axios.get(`https://metsenatclub.xn--h28h.uz/api/v1/sponsor-detail/${id}/`)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    })
}

export const API_HOME_SPONSORS_UPDATE = async (id: number, {full_name, phone, sum, is_legal, firm, comment}: SponsorsUpdate) => {
  return await axios.put(`https://metsenatclub.xn--h28h.uz/api/v1/sponsor-update/${id}/`, {full_name, phone, sum, is_legal, firm, comment})
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    })
}