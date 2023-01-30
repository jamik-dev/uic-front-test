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