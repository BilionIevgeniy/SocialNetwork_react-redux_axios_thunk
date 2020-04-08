import {instance} from "./axiosInstance"

export const usersAPI = {
   getUsers (page = 1, size = 5)  {
      return instance
         .get(`users?page=${page}&count=${size}`)
         .then(response => response.data)
   }
}

export const followAPI ={
   unFollow  (id)  {
      return instance
         .delete(`follow/${id}`)
         .then(response => response.data)
   },
   
   
    followUser (id) {
      return instance
         .post(`follow/${id}`, {})
         .then(response => response.data)
   }
}

export const profileAPI = {
   getProfile (id) {
   return instance
      .get(`profile/${id}`)
      .then(response => response.data)
}} 

export const authAPI = {
   setMe  () {
      return instance.get(`auth/me`)
   }
}


