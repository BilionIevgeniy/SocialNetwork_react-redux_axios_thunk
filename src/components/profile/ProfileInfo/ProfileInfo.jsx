import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import css from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"

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
          <ProfileStatus  {...props}/>
        )}
      </div>
    </div>
  );
};
export default ProfileInfo;
