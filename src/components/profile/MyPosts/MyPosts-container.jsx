
import {
  addTextActionCreator,
  addPostActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps= (state)=>{
  return {
    state : state.profilePage,
  }  
}

let mapDispatchToProps= (dispatch)=>{

  return {
    updateNewPostText : (text)=>{
      dispatch(addTextActionCreator(text))
    },
    addPost : ()=>{
      dispatch(addPostActionCreator())
    }
  }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
