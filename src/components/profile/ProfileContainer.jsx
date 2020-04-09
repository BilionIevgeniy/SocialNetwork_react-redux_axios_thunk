import React from "react";
import css from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import { getProfileThunkCreator } from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


let InnerProfile = (props) => {
    return (<div className={css.content}>
                <ProfileInfo {...props} profile={props.profile} /> 
                 <MyPostsContainer {...props} profile={props.profile} />
            </div>)
}


class ProfileContainer extends React.Component {
  componentDidMount() {
    // в props приходит вся информация из URL(match,location,history,staticContext) и из connect
    // делаем логику если мы заходим в Profile  без id:
    let id = +this.props.match.params.userId;
    id = id || 2;
    this.props.getProfileThunkCreator(id);
  }
  render() {      
      return  <InnerProfile {...this.props} profile={this.props.usersProfile}/>    
}
}


let mapStateToProps = (state) => ({
  usersProfile: state.profilePage.usersProfile
});

 export default compose (
    connect(mapStateToProps, { getProfileThunkCreator }),
    withRouter,
    withAuthRedirect
 )(ProfileContainer) 