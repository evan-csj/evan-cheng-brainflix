import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import * as global from '../../global';
import Comment from './Comment/Comment';
import Form from './CommentForm/CommentForm';
import myAvatar from '../../../assets/images/Mohan-muruge.jpg';
import './CommentsList.scss';

function CommentsList(props) {
	const relativeTime = require('dayjs/plugin/relativeTime');
	dayjs.extend(relativeTime);
	
	const comments = props.videoComments;
	const userName = 'First-Name Last-Name';
	const [activeVideoComments, setActiveVideoComments] = useState(comments);

	const addComment = content => {
		const newComment = {
			id: uuid(),
			name: userName,
			comment: content,
			like: 0,
			timestamp: dayjs(),
		};

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
				{activeVideoComments.map((comment, index) => {
					// const date = dayjs(comment.timestamp).fromNow();
					const date = global.DynamicDate(comment.timestamp);

					return (
						<Comment
							key={comment.id}
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
