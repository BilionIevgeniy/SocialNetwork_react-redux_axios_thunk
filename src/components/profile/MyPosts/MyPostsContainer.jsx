import { addPostActionCreator } from "../../../store/profile-reducer";
import { connect } from "react-redux";
import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../../common/FormControls/FormsControls";
import {
  required,
  minLength,
  maxLength,
} from "../../../utils/validators/validators";

const minLength2 = minLength(2);
const maxLength15 = maxLength(15);

const MyPosts = ({ state, addPostActionCreator }) => {
  const { postData } = state;

  let newPostData = postData.map((item) => (
    <Post key={item.id} likeCount={item.likeCount} text={item.text} />
  ));

  const SendPostForm = ({ handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit}>
        <Field
          className="form-control form-group"
          validate={[required, minLength2, maxLength15]}
          name="post"
          component={Textarea}
          placeholder="Add Post"
        />
        <button className="btn btn-primary">Add Post</button>
      </form>
    );
  };

  const ReduxSendPostForm = reduxForm({
    form: "sendPost",
  })(SendPostForm);

  const SendPost = (data) => {
    addPostActionCreator(data.post);
  };

  return (
    <div>
      <div className={`${css.head}`}>Posts:</div>
      <div>{newPostData}</div>
      <div className={`${css.head}`}>Send Post:</div>
      <ReduxSendPostForm onSubmit={SendPost} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    state: state.profilePage,
  };
};

let mapDispatchToProps = {
  addPostActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
