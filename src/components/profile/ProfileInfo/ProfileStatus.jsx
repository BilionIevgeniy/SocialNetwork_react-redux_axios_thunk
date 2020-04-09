import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status : "hello"
  };

  activateEditMode=()=>{
      this.setState({
         editMode :true
      })
  } 

  deactivateEditMode=(e)=>{
     let text = e.target.value;
      this.setState({
         editMode : false,
         status : text
      })
  }

  render() {
    const { profile } = this.props;
    return (
      <div>
        <img
          style={{ marginTop: "10px", width: "160px" }}
          src={profile.photos.large}
          alt=""
        />

        <div>
          <div>
            {!this.state.editMode && (
              <div>
                <span onDoubleClick={this.activateEditMode} >{this.state.status}</span>
              </div>
            )}
            {this.state.editMode && (
              <div>
                <input onBlur={this.deactivateEditMode} type="text" defaultValue={this.state.status} />
              </div>
            )}
          </div>
          <div className="aboutMe">
            <div className="fullname">I am : {profile.fullName}</div>
            <div className="aboutMe">About me : {profile.aboutMe}</div>
          </div>

          <div className="contacts">
            <div className="facebook">
              facebook: {profile.contacts.facebook}
            </div>
            <div className="website">website: {profile.contacts.website}</div>
            <div className="vk">vk {profile.contacts.vk}</div>
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
  }
}
export default ProfileStatus;
