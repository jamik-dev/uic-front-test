import axios from "axios";

export const API_HOME_DASHBOARD_QUANTITY = async () => {
  return await axios.get('https://metsenatclub.xn--h28h.uz/api/v1/dashboard/')
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    })
}
