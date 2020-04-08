import { usersAPI, followAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
let initialState = {
   users : [],
   pageSize : 5,//берем хардкодим ,сколько пользователей показывать
   totalUsersCount: 17, 
   currentPage: 1, // получаем с сервера
   isFetching: false, // при отправке запроса для крутилки
   followInProgress: [2], //для кнопки follow/unfollow
   userId : null

}

const usersReducer = (state = initialState,action)=>{

   switch(action.type) {
      
      case FOLLOW :
         return {
            ...state,
            users: state.users.map(user => {
               if(user.id === action.userId){
                  return {...user,followed: true}
               }
               return user
            })
         }

      case UNFOLLOW :
         return{
            ...state,
            users: state.users.map(user => {
               if(user.id === action.userId){
                  return {...user,followed: false}
               }
               return user
            })
         }
      
      case SET_USERS:
         {
         return{
            ...state,
            users: [...action.users]
         }
      }
      case CHANGE_CURRENT_PAGE:
         return{
            ...state,
            currentPage: action.currentPage
         }

      case SET_TOTAL_USERS:
         return{
            ...state,
            totalUsersCount: action.totalUsers
         }

      case TOGGLE_IS_FETCHING :
         return{
            ...state,
            isFetching: action.isFetching
         }

      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return{
            ...state,
            userId : action.userId
         }

         default: return state
   }

}


// Thunk creators:
export const getUsersThunkCreator= (currentPage,pageSize) => (dispatch)=>{
   dispatch(toggleIsFetchingAC(true))
   usersAPI.getUsers(currentPage,pageSize)
          .then(data => {
              dispatch(toggleIsFetchingAC(false))
              dispatch(setUsersAC(data.items))
              dispatch(setTotalUsersAC(data.totalCount))
          });
}
export const unfollowThCr = (id)=> (dispatch)=>{
   dispatch(toggleFollowingProgress(id))
   followAPI.unFollow(id)
     .then(data => {
       if(data.resultCode === 0){
         dispatch(unfollowAC(id))
       }
       dispatch(toggleFollowingProgress('null'))
     });
}
export const followThCr = (id)=> (dispatch)=>{
   dispatch(toggleFollowingProgress(id))
   followAPI.followUser(id)
     .then(data => {
       if(data.resultCode === 0){
         dispatch(followAC(id))
       }
       dispatch(toggleFollowingProgress('null'))
     });
}

// Action Creators:
export const changeCurrentPageAC = (page)=>({type:CHANGE_CURRENT_PAGE, currentPage : page});
 
export const followAC = (userId)=>({type:FOLLOW,userId});

export const unfollowAC = (userId)=>({type:UNFOLLOW,userId});

export const setTotalUsersAC = (totalUsers)=>({type:SET_TOTAL_USERS,totalUsers});

export const setUsersAC = (user)=>({type: SET_USERS, users: [...user] });

export const toggleIsFetchingAC = (isFetching)=>({type: TOGGLE_IS_FETCHING, isFetching });

export const toggleFollowingProgress = (userId)=>({type:TOGGLE_IS_FOLLOWING_PROGRESS,userId});

export default usersReducer


