import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  getUsersThunkCreator,
  unfollowThCr,
  followThCr,
} from "../../store/users-reducer";

import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";
import {
  getUsersSelector,
  getPageSize,
  getIsAuthedState,
  getFollowingProgress,
  getTotalUsersCount,
  getIsFetchingState,
  getUserId,
  getCurrentPage,
} from "../../store/selectors";

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
        {this.props.isFetching ? (
          <Preloader />
        ) : (
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
        )}
      </div>
    );
  }
}

// imported from selectors
let mapStateToProps = (state) => {
  return {
    followingProgress: getFollowingProgress(state),
    isAutorised: getIsAuthedState(state),
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetchingState(state),
    userId: getUserId(state),
  };
};

let mapDispatchToProps = {
  unfollowThCr,
  followThCr,
  getUsersThunkCreator,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  UsersContainer
);
