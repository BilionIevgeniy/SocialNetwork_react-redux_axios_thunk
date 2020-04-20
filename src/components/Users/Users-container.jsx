import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  changeCurrentPageAC,
  getUsersThunkCreator,
  unfollowThCr,
  followThCr,
} from "../../redux/users-reducer";

import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  changeCurPage = (i) => {
    this.props.getUsersThunkCreator(i, this.props.pageSize);
  };

  render() {
    return (
      <div>
        <Users
          unfollowThCr={this.props.unfollowThCr}
          followThCr={this.props.followThCr}
          followingProgress={this.props.followingProgress}
          isAutorised={this.props.isAutorised}
          currentPage={this.props.currentPage}
          changeCurrentPage={this.changeCurPage}
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          userId={this.props.userId}
        />
      </div>
    );
  }
}



let mapStateToProps = ({ usersPage, auth }) => {
  return {
    followingProgress: usersPage.followInProgress,
    isAutorised: auth.isAuthed,
    users: usersPage.users,
    pageSize: usersPage.pageSize,
    totalUsersCount: usersPage.totalUsersCount,
    currentPage: usersPage.currentPage,
    isFetching: usersPage.isFetching,
    userId: usersPage.userId,
  };
};

let mapDispatchToProps = {
  unfollowThCr,
  followThCr,
  changeCurrentPageAC,
  getUsersThunkCreator,
};

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersContainer)
 
