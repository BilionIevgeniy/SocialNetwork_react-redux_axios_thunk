import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'


let postiD = 5;
let initialState = {
    usersProfile: null,
    postData: [
        {id: 1,  likeCount: '10',  text: 'First post'},
        {id: 2,  likeCount: '3',  text: 'Second post'},
        {id: 3,  likeCount: '4',  text: 'Third post'},
        {id: 4,  likeCount: '10',  text: 'Firth post'}
    ],
    postText: 'add Text',

}

const profileReducer = (state = initialState,action)=>{

   switch(action.type){

      case ADD_POST :
        return {
            ...state,
            postData : [...state.postData,{id: postiD++,likeCount: '15',text: state.postText}],
            postText: ''
         };
          
          

      case  UPDATE_TEXT :
        return {
            ...state,
            postText: action.newText
         };
      
      case SET_USERS_PROFILE:
        return{
          ...state,
          usersProfile : action.usersProfile
        }
           

          default: 
          return state;
  }
}

// Thunk Creators:
export const getProfileThunkCreator = (id) => (dispatch)=>{
  profileAPI.getProfile(id)
                .then(data => {
                  dispatch(setUsersProfile(data))
                });
}

// Action Creators:
export const addPostActionCreator = ()=>({ type : ADD_POST});
export const addTextActionCreator = (text)=>({type:UPDATE_TEXT, newText : text});
export const setUsersProfile = (usersProfile)=>({type:SET_USERS_PROFILE,usersProfile})


export default profileReducer