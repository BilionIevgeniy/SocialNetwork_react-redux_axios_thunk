import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import css from "./ProfileInfo.module.css";

const ProfileInfo = props => {
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
          <div>
            <img
              style={{ marginTop: "10px", width: "160px" }}
              src={profile.photos.large}
              alt=""
            />

            <div>
              <div className="aboutMe">
                <div className="fullname">I am : {profile.fullName}</div>
                <div className="aboutMe">About me : {profile.aboutMe}</div>
              </div>

              <div className="contacts">
                <div className="facebook">
                  facebook: {profile.contacts.facebook}
                </div>
                <div className="website">
                  website: {profile.contacts.website}
                </div>
                <div className="vk">vk {profile.contacts.vk}</div>
                <div className="twitter">
                  twitter {profile.contacts.twitter}
                </div>
                <div className="instagram">
                  instagram: {profile.contacts.instagram}
                </div>
              </div>

              <div className="workState">
                  <div className="job">
                  {/* lookingForAJob: true */}
                  </div>
                  <div className="jobDescription">
                  {/* lookingForAJobDescription: "не ищу, а дурачусь" */}
                  </div>
              </div>




            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProfileInfo;
