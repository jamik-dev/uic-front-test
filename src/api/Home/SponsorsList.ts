import axios from "axios"

export const API_HOME_SPONSORS_LIST = async (page: number, page_size: number, search: string = '', ordering: string = '') => {
  return await axios.get('https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/', {params: {page, page_size, search, ordering }})
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    })
}