const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'

let initialState = {
   users : [],
   pageSize : 5,//берем хардкодим ,сколько пользователей показывать
   totalUsersCount: 17, 
   currentPage: 1, // получаем с сервера
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

         default: return state
   }

}
export default usersReducer

export const changeCurrentPageAC = (page)=>({type:CHANGE_CURRENT_PAGE, currentPage : page});
export const followAC = (userId)=>({type:FOLLOW,userId});
export const unfollowAC = (userId)=>({type:UNFOLLOW,userId});
export const setTotalUsersAC = (totalUsers)=>({type:SET_TOTAL_USERS,totalUsers});
export const setUsersAC = (user)=>({type: SET_USERS, users: [...user] });
