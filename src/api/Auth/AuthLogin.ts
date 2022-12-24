import axios from "axios"

export const API_AUTH_LOGIN = async (username: string, password: string) => {
  return await axios.post('https://metsenatclub.xn--h28h.uz/api/v1/auth/login/', {username, password})
    .then(response => {
      return response;
    })
}