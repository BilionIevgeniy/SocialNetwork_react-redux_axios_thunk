import axios from "axios";

export  const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "3eb5539c-b976-4100-a0aa-ad516655059d",
   }
})