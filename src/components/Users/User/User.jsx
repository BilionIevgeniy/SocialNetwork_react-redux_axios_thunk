import React from "react";
import css from "./User.module.css";
import userPhoto from '../../../assets/images/1551511784_4.jpg'
import { NavLink } from "react-router-dom";


       
const User = props => {
 
  return (
    <div className={css.wrapper}>
    
      <div>

        <NavLink to={`/profile/${props.id}`}>
          <img className={css.avatar} src={props.url.small != null ? props.url.small : userPhoto} alt='avatar'/>
        </NavLink>
        
        {props.isFollowed 
        ?
          <button  disabled={props.userId === props.id} className='btn btn-info'  
            onClick={()=>{
              props.unfollowThCr(props.id)
            }}>Unsubscribe</button> 
        :
          <button  disabled={props.userId === props.id} className='btn btn-info' 
            onClick={()=>{
                props.followThCr(props.id)
              }}>Subscribe</button>}
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