import React from "react";
import css from "./Post.module.css";

const Post = ({text, likeCount}) => {
  return (
    <div>
      
      <img
        className={`${css.post__img}  rounded-circle`}
        src="https://hunyadi.info.hu/levente/images/stories/boxplus/image3.jpg"
        alt=""
      />
      <div>{text}</div>
      <div>
        <span className={css.count}>{likeCount} </span> Likes
      </div>
      <hr/>
    </div>
  );
};
export default Post;
