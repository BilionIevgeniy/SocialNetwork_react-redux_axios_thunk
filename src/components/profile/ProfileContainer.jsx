import React from "react";
import css from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";
import { compose } from "redux";


let InnerProfile = (props) => {
    return (<div className={css.content}>
                <ProfileInfo {...props} profile={props.profile} /> 
                 <MyPostsContainer {...props} profile={props.profile} />
            </div>)
}


class ProfileContainer extends React.Component {
  
  state = {
    id: ''
  }

  componentDidMount() {
    // в props приходит вся информация из URL(match,location,history,staticContext) и из connect
    // делаем логику если мы заходим в Profile  без id:
    let id = +this.props.match.params.userId;
    if(!id) {
      if(!this.props.isAuthed){
        this.props.history.push('/login')
      }
      id =+this.props.authorisedUsersId
    }
    this.setState({id});
    this.props.getProfileThunkCreator(id);
    this.props.getStatusThunkCreator(id);

  }
  
  render() {      
      return  <InnerProfile id={this.state.id} {...this.props} profile={this.props.usersProfile}/>    
  }

}


let mapStateToProps = (state) => ({
  usersProfile: state.profilePage.usersProfile,
  usersStatus: state.profilePage.status,
  authorisedUsersId: state.auth.id,
  isAuthed: state.auth.isAuthed

});

 export default compose (
    connect(mapStateToProps, { getProfileThunkCreator,
    getStatusThunkCreator, updateStatusThunkCreator }),
    withRouter
 )(ProfileContainer) 