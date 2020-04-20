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
   },
   getStatus (id){

      return  instance
      .get(`profile/status/${id}`)
      
      .then(response => response.data)
   },
   updateStatus(status){
      return  instance
      .put(`profile/status`,{
         
         status : status
      })
      .then(response => {
         
         return response.data})
   }

} 

export const authAPI = {
   setMe  () {
      return instance.get(`auth/me`).then(response => {
         
         return response.data})
   },

   logIn(email,password,rememberMe = false){
      return instance.post('auth/login',{
         email,
         password,
         rememberMe
      }).then(response => {
         
         return response.data})
   },
   
   logOut(){
      return instance.post('auth/logout',{
         
      }).then(response => {
         
         return response.data})
   },
   getCaptcha(){
      return instance.get('security/get-captcha-url')
      .then(response=>response.data.url)
   }
}



// security/get-captcha-url
// REQUEST
// type: get

// RESPONSE
// json object


// properties:
// url: url to display captcha-image

