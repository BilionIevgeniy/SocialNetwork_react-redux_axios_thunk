import React from "react";
import css from "./User.module.css";
import userPhoto from '../../../assets/images/1551511784_4.jpg'
       
const User = props => {

  return (
    <div className={css.wrapper}>
    
      <div>
        <img className={css.avatar} src={props.url.small != null ? props.url.small : userPhoto} alt='avatar'/>
        {props.fol 
        ?<button className='btn btn-info'  onClick={()=>{props.unfollow(props.id)}}>Followed</button> 
        :<button className='btn btn-info' onClick={()=>{props.follow(props.id)}}>Unfollowed</button> }
      </div>

      <div className={css.user_info}>

        <div className={css.user_name}>
          <div>{props.name}</div>
          <div>{props.status}</div>
        </div>

        {/* <div>
          <div>{props.location.city}</div>,
          <div>{props.location.country}</div>
        </div> */}

      </div>
    </div>
  );
};

export default User;