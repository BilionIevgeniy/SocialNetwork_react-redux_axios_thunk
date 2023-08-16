import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_USERS_STATUS = 'SET_USERS_STATUS'


let postiD = 5;
let initialState = {
  usersProfile: null,
  postData: [
    { id: 1, likeCount: '10', text: 'First post' },
    { id: 2, likeCount: '3', text: 'Second post' },
    { id: 3, likeCount: '4', text: 'Third post' },
    { id: 4, likeCount: '10', text: 'Firth post' }
  ],

  status: '',

}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:
      return {
        ...state,
        postData: [...state.postData, { id: postiD++, likeCount: '15', text: action.text }]
      };

    case SET_USERS_PROFILE:
      return {
        ...state,
        usersProfile: action.usersProfile
      }

    case SET_USERS_STATUS:
      return {

        ...state,
        status: action.status
      }

    default:
      return state;
  }
}

// Thunk Creators:
export const getProfileThunkCreator = (id) => (dispatch) => {
  profileAPI.getProfile(id)
    .then(data => {
      dispatch(setUsersProfile(data))
    });
}

export const getStatusThunkCreator = (id) => (dispatch) => {

  profileAPI.getStatus(id)
    .then(data => {

      dispatch(setStatus(data))
    });
}


export const updateStatusThunkCreator = (status, id) => (dispatch) => {

  profileAPI.updateStatus(status)
    .then(data => {

      if (data.resultCode === 0) { dispatch(getStatusThunkCreator(id)) }

    });

}

// Action Creators:
export const addPostActionCreator = (text) => ({ type: ADD_POST, text });

export const setUsersProfile = (usersProfile) => ({ type: SET_USERS_PROFILE, usersProfile })
export const setStatus = (status) => ({ type: SET_USERS_STATUS, status })


export default profileReducer;