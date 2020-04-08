import React from "react";
import css from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import { getProfileThunkCreator } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";




    class ProfileContainer extends React.Component{

        componentDidMount(){
            // в props приходит вся информация из URL(match,location,history,staticContext) и из connect
            // делаем логику если мы заходим в Profile  без id:
            let id = +this.props.match.params.userId;
 
            id = id ||  2;
            this.props.getProfileThunkCreator(id)

        }


        render(){
            return (
                <div className={css.content}>

                    <ProfileInfo {...this.props} profile={this.props.usersProfile}/>

                    <MyPostsContainer {...this.props} profile={this.props.usersProfile}/>
                    
                 </div>
            )
        }
    }

    let matchStateToProps = (state)=>({
        usersProfile: state.profilePage.usersProfile
    })
    let WithRouterComponent = withRouter(ProfileContainer);

    export default  connect(matchStateToProps, {getProfileThunkCreator})(withRouter(WithRouterComponent))

