
import { addTextActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    const {postData, postText} = props.state;

    let onPostChange = ()=>{
        let text = elemRef.current.value;
        props.updateNewPostText(text)
    };
    let onClick = ()=>{
      props.addPost()
    }

    let elemRef = React.createRef();

    let newPostData = postData.map((item)=> <Post key={item.id}  likeCount={item.likeCount} text={item.text}/>);


  return (
    <div>
      <div className={`${css.head}`}>Send Post:</div>
      <textarea onChange={onPostChange} ref={elemRef} value={postText} />
      <br />
      <button onClick={onClick} className="btn btn-primary">Add Post</button>
      <div>
          {newPostData}
      </div>
    </div>
  );

};


let mapStateToProps= (state)=>{
  return {
    state : state.profilePage,
  }  
}

let mapDispatchToProps= {
    updateNewPostText : addTextActionCreator,
    addPost : addPostActionCreator
}
export default connect(mapStateToProps,mapDispatchToProps)(MyPosts)
