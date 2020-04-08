import React from "react";
import User from "./User/User";
import css from "./Users.module.css";


const Users = props => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  let setCss = (i)=>{
    return `${props.currentPage === i ? css.selected : css.page}` 
  }

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(
      <span
        key = {i}
        onClick={() => { 
          props.changeCurrentPage(i);
        }}
        className={setCss(i)}
      >
        {i}
      </span>
    );
  }
  
  return (
    <div>
      {props.users.map(user => (
        <User
          unfollowThCr={props.unfollowThCr}
          followThCr={props.followThCr}
          
          followingProgress={props.followingProgress}
          isAutorised = {props.isAutorised}
          url={user.photos}
          key={user.id}
          id={user.id}
          name={user.name}
          status={user.status}
          location={user.location}
          isFollowed={user.followed}
          userId = {props.userId}
        />
      ))}
      <div className={css.pages_wrapper}>
        {pages}
      </div>
    </div>
  );
};

export default Users;
