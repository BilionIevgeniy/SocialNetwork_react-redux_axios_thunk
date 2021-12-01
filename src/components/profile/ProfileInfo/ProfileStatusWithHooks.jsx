import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  const { profile } = props;

  //STATE HOOKS
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  // EFFECT HOOKS
  useEffect(() => {
    // effect
    setStatus(props.status);

    return () => {
      // cleanup
    };
  }, [
    props.status,
    // input
  ]);

  // CallBacks
  const onInputChange = (e) => {
    setStatus(e.target.value);
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    props.updateStatusThunkCreator(status, props.id);
    setEditMode(false);
  };

  return (
    <div>
      <img
        style={{ marginTop: "10px", width: "160px" }}
        src={profile.photos.large}
        alt=""
      />

      <div>
        <div>
          {!editMode ? (
            <div>
              <span onDoubleClick={activateEditMode}>
                Status: {props.status}
              </span>
            </div>
          ) : (
            <div>
              <input
                autoFocus={true}
                onBlur={deActivateEditMode}
                type="text"
                defaultValue={status}
                onChange={onInputChange}
              />
            </div>
          )}
        </div>

        <div className="aboutMe">
          <div className="fullname">I am : {profile.fullName}</div>
          <div className="aboutMe">About me : {profile.aboutMe}</div>
        </div>

        <div className="contacts">
          <div className="facebook">facebook: {profile.contacts.facebook}</div>
          <div className="website">website: {profile.contacts.website}</div>
          <div className="vk">vk: {profile.contacts.vk}</div>
          <div className="twitter">twitter {profile.contacts.twitter}</div>
          <div className="instagram">
            instagram: {profile.contacts.instagram}
          </div>
        </div>

        <div className="workState">
          <div className="job">{/* lookingForAJob: true */}</div>
          <div className="jobDescription">
            {/* lookingForAJobDescription: "не ищу, а дурачусь" */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileStatusWithHooks;
