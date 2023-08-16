import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import SendPostForm from './MyPostForm';
import {addPostActionCreator} from '../../../store/profile-reducer';

const MyPosts = () => {
	const dispatch = useDispatch();
	const {profilePage} = useSelector((state) => ({
		profilePage: state.profilePage,
	}));
	const {postData} = profilePage;
	let newPostData = postData.map((item) => (
		<Post key={item.id} likeCount={item.likeCount} text={item.text} />
	));

	const SendPost = (data) => {
		dispatch(addPostActionCreator(data.post));
	};

	return (
		<div>
			<div className={`${css.head}`}>Posts:</div>
			<div>{newPostData}</div>
			<div className={`${css.head}`}>Send Post:</div>
			<SendPostForm onSubmit={SendPost} />
		</div>
	);
};

export default MyPosts;
