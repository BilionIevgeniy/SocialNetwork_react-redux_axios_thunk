import React from "react";

class ProfileStatus extends React.Component {
  
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.props.updateStatusThunkCreator(this.state.status,this.props.id)
    this.setState({
      editMode: false,
    });
    
  };

  onInputChange=(e)=>{
    console.log('input value ' +  e.target.value)
    let text = e.target.value;
    this.setState({
      status: text
    });
  }

  componentDidUpdate(prevProps,prevState){
    
    if(prevState.status !== this.state.status){
      this.setState({
        status: this.state.status
      });

    }

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
                <span onDoubleClick={this.activateEditMode}>
                  Status: {this.props.status}
                </span>
              </div>
            )}

            {this.state.editMode && (
              <div>
                <input
                  autoFocus={true}
                  onBlur={this.deactivateEditMode}
                  type="text"
                  value={this.state.status}
                  onChange={this.onInputChange}
                />
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
  }
}
export default ProfileStatus;
