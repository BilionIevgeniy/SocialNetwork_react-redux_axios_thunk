import { setAuthedUserThCr } from "./auth-reducer"


const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'

let initialState = {
   initialized: false
}

const appReducer = (state = initialState, action) => {

   switch (action.type) {
      case INITIALIZE_SUCCESS:
         return {
            ...state,
            initialized: true
         }

         default:
            return state
   }
}

export default appReducer;

// Thunk Creators

export const initializeAppThank = () => (dispatch)=>{
   let promise = dispatch(setAuthedUserThCr())
   Promise.all([promise]).then(()=>{
      dispatch(initializedSuccess())
   })
}

// Action Creators
export const initializedSuccess = () => ({type: INITIALIZE_SUCCESS});
