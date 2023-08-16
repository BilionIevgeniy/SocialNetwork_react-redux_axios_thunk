import {
   authAPI
} from "../api/api"
import { stopSubmit } from "redux-form"

const SET_AUTHED_USER = 'SET_AUTHED_USER'

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuthed: false
}

const authReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_AUTHED_USER:
         return {
            ...state,
            ...action.payload,
            isAuthed: action.payload.isAuth
         }

      default:
         return state
   }

}
export default authReducer;


// Thunk Creator
export const setAuthedUserThCr = () => (dispatch) => {
   return authAPI.setMe()
      .then(response => {
         if (response.resultCode === 0) {
            const {
               id,
               email,
               login
            } = response.data
            dispatch(setAuthedUser(id, email, login, true))
         }

      })
}

export const logInUserThank = (email, password, rememberMe) => (dispatch) => {
   authAPI.getCaptcha()
      .then(() => {
         authAPI.logIn(email, password, rememberMe)
            .then(response => {

               if (response.resultCode === 0) {
                  dispatch(setAuthedUserThCr())
               }
               else {
                  let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
                  dispatch(stopSubmit("login", { _error: message }))
               }
            })

      })

}

export const logOutThCr = () => (dispatch) => {
   authAPI.logOut()
      .then(response => {
         if (response.resultCode === 0) {
            dispatch(setAuthedUser(null, null, null, false))
         }
      })
}

// Action Creators
export const setAuthedUser = (id, email, login, isAuth) => ({
   type: SET_AUTHED_USER,
   payload: {
      id,
      email,
      login,
      isAuth
   }
});
