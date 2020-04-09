import { authAPI } from "../api/api"

const SET_AUTHED_USER = 'SET_AUTHED_USER'

let initialState = {
   id:  null,
   email:  null,
   login: null,
   isAuthed: null
}

const authReducer = (state = initialState,action)=>{

   switch(action.type) {
      case SET_AUTHED_USER:
         return{
            ...state,
            ...action.data,
            isAuthed:action.data.resultCode
         }

         default: return state
   }

}
export default authReducer;


// Thunk Creator
export const setAuthedUserThCr = ()=>(dispatch)=>{
   authAPI.setMe()
        .then(response => {
           const {id, email, login} = response.data.data
            dispatch(setAuthedUser(id, email, login,response.data.resultCode))
        })
}
export const setAuthedUser = (id, email, login,resultCode)=>({type: SET_AUTHED_USER, data:{id, email, login,resultCode}});
