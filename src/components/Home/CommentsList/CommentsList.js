// Library
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { PostNewComment, DeleteComment } from '../../API';
import DynamicDate from '../../DynamicDate';
import Toast, { Error, Success, Warn } from '../../Toast/Toast';

// Component
import Comment from './Comment/Comment';
import Form from './CommentForm/CommentForm';
import myAvatar from '../../../assets/images/Mohan-muruge.jpg';

// scss
import './CommentsList.scss';

const postMsgError = 'Fail to leave a comment!';
const deleteMsgError = 'Fail to delete a comment! Please refresh!';
const postMsg = 'Succeed to leave a comment!';
const deleteMsg = 'Succeed to delete a comment!';

function CommentsList(props) {
	const relativeTime = require('dayjs/plugin/relativeTime');
	dayjs.extend(relativeTime);

	const comments = props.videoComments;
	const [activeVideoComments, setActiveVideoComments] = useState(comments);

	const addComment = content => {
		const newComment = {
			name: props.userName,
			comment: content,
		};

		PostNewComment(props.id, newComment)
			.then(response => {
				const newVideoComments = [
					response.data,
					...activeVideoComments,
				];
				setActiveVideoComments(newVideoComments);
				Success(postMsg);
			})
			.catch(_error => {
				Error(postMsgError);
			});
	};

	const deleteComment = commentId => {
		DeleteComment(props.id, commentId)
			.then(_response => {
				Warn(deleteMsg);
				const newVideoComments = activeVideoComments.filter(
					element => element.id !== commentId
				);
				setActiveVideoComments(newVideoComments);
			})
			.catch(_error => {
				Error(deleteMsgError);
			});
	};

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
				{activeVideoComments
					.sort((a, b) => {
						return b.timestamp - a.timestamp;
					})
					.map((comment, index) => {
						const date = DynamicDate(comment.timestamp);

						return (
							<Comment
								key={index}
								id={comment.id}
								index={index}
								length={activeVideoComments.length}
								avatar={
									comment.name === props.userName ? myAvatar : ''
								}
								name={comment.name}
								date={date}
								text={comment.comment}
								like={comment.likes}
								deleteComment={deleteComment}
							/>
						);
					})}
			</div>
			<Toast />
		</div>
	);
}

export default CommentsList;
