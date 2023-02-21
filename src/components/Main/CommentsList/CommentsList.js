import React, { useEffect, useState } from 'react';
// import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import DynamicDate from '../../DynamicDate';
import Comment from './Comment/Comment';
import Form from './CommentForm/CommentForm';
import myAvatar from '../../../assets/images/Mohan-muruge.jpg';
import './CommentsList.scss';
import axios from 'axios';

const apiAddress = 'https://project-2-api.herokuapp.com';
const apiKey = '611d31a1-7bdd-4769-8e5f-de260b873bb4';

const newCommentHeader = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const PostNewComment = (newComment, videoId) => {
	try {
		axios.post(
			`${apiAddress}/videos/${videoId}/comments?api_key=${apiKey}`,
			newComment,
			newCommentHeader
		);
	} catch (e) {
		console.error('error');
	}
};

function CommentsList(props) {
	const relativeTime = require('dayjs/plugin/relativeTime');
	dayjs.extend(relativeTime);

	const comments = props.videoComments;
	const userName = 'First-Name Last-Name';
	const [newComment, setNewComment] = useState(null);
	const [activeVideoComments, setActiveVideoComments] = useState(comments);

	const addComment = content => {
		const newComment = {
			name: userName,
			comment: content,
		};
		setNewComment(newComment);
		const newVideoComments = [newComment, ...activeVideoComments];
		setActiveVideoComments(newVideoComments);
	};

	useEffect(() => {
		if (newComment !== null) {
			PostNewComment(newComment, props.id);
		}
	}, [newComment, props.id]);

	return (
		<div className="comments">
			<p className="text text--name">
				{activeVideoComments.length} Comments
			</p>
			<div className="comments__form">
				<img className="avatar" src={myAvatar} alt="avatar" />
				<Form addComment={addComment} />
			</div>
			<div className="comments__list">
				{activeVideoComments.map((comment, index) => {
					const date = DynamicDate(comment.timestamp);

					return (
						<Comment
							key={index}
							id={comment.id}
							index={index}
							length={activeVideoComments.length}
							avatar={comment.name === userName ? myAvatar : ''}
							name={comment.name}
							date={date}
							text={comment.comment}
							like={comment.likes}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default CommentsList;
