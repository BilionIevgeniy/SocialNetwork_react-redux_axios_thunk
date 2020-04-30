import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import css from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  const { profile } = props;
  return (
    <div className={css.profileInfo}>
      <img
        src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
        alt=""
      />

      <div>
        {profile === null ? (
          <Preloader />
        ) : (
          <ProfileStatusWithHooks status={props.usersStatus} {...props}/>
          // <ProfileStatus status={props.usersStatus} {...props}/>
        )}
      </div>
    </div>
  );
};
export default ProfileInfo;
