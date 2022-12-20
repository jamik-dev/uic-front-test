import axios from "axios"

export const API_HOME_SPONSORS_LIST = async (username: string, password: string) => {
  return await axios.post('https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/', {username, password})
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    })
}