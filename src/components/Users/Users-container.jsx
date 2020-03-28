import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC,setUsersAC, changeCurrentPageAC,setTotalUsersAC  } from "../../redux/users-reducer";


let mapStateToProps =(state)=>{
    
    return{
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

    }
};
let mapDispatchToProps = (dispatch)=>{
    return{
        follow:(id)=>{
            dispatch(followAC(id))
        },
        unfollow:(id)=>{
            dispatch(unfollowAC(id))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        changeCurrentPage:(page)=>{
            dispatch(changeCurrentPageAC(page))
        },
        setTotalUsers: (totalUsers)=>{
            dispatch(setTotalUsersAC(totalUsers))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer