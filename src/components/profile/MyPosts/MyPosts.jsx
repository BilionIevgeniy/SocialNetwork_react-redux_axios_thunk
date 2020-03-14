import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addTextActionCreator,addPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    const {postData, postText} = props.state.profilePage;

    let onPostChange = ()=>{
        let text = elemRef.current.value;
        props.dispatch(addTextActionCreator(text))
    };
    let onClick = ()=>{
      props.dispatch(addPostActionCreator())
    }

    let elemRef = React.createRef();

    let newPostData = postData.map((item)=> <Post likeCount={item.likeCount} text={item.text}/>);


  return (
    <div>
      <div className={`${css.head}`}>My Posts:</div>
      <textarea onChange={onPostChange} ref={elemRef} value={postText} />
      <br />
      <button onClick={onClick} className="btn btn-primary">Add Post</button>
      <div>
          {newPostData}
      </div>
    </div>
  );

};
export default MyPosts;
