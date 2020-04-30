import { createSelector } from "reselect";



const getUsers = (state)=>{
   return state.usersPage.users
};




// this is example of using reselect library:
export const getUsersSelector = createSelector(getUsers,(users)=>{
   return users
})




export const getPageSize = (state) => {
   return state.usersPage.pageSize
};

export const getFollowingProgress = (state) => {
   return state.usersPage.followingProgress
};

export const getIsAuthedState = (state) => {
   return state.auth.isAuthed
};

export const getTotalUsersCount = (state) => {
   return state.usersPage.totalUsersCount
};

export const getCurrentPage = (state) => {
   return state.usersPage.currentPage
};

export const getIsFetchingState = (state) => {
   return state.usersPage.isFetching
};

export const getUserId = (state) => {
   return state.usersPage.userId
}
   


