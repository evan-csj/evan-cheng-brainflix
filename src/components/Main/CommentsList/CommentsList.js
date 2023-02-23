// Library
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { PostNewComment } from '../../API';
import DynamicDate from '../../DynamicDate';

// Component
import Comment from './Comment/Comment';
import Form from './CommentForm/CommentForm';
import myAvatar from '../../../assets/images/Mohan-muruge.jpg';

// scss
import './CommentsList.scss';

function CommentsList(props) {
	const relativeTime = require('dayjs/plugin/relativeTime');
	dayjs.extend(relativeTime);

	const comments = props.videoComments;
	const userName = 'First-Name Last-Name';
	const [activeVideoComments, setActiveVideoComments] = useState(comments);

	const addComment = content => {
		const newComment = {
			name: userName,
			comment: content,
		};

		PostNewComment(newComment, props.id);
		const newVideoComments = [newComment, ...activeVideoComments];
		setActiveVideoComments(newVideoComments);
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
									comment.name === userName ? myAvatar : ''
								}
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
