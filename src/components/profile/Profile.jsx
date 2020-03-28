import React from "react";
import css from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPosts-container";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={css.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};
export default Profile;
