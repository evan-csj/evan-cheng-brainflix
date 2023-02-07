import React from 'react';
import Comment from './Comment/Comment';
import myAvatar from '../../../assets/images/Mohan-muruge.jpg';
import addComment from '../../../assets/icons/add_comment.svg';
import './CommentsList.scss';

function CommentsList(props) {
	const comments = props.video.comments;

	return (
		<div className="comments">
			<p className="text text--name">{comments.length} Comments</p>
			<div className="comments__form">
				<img className="avatar" src={myAvatar} alt="avatar" />
				<form>
					<div className="text-input">
						<label>Join the conversation</label>
						<textarea
							type="textarea"
							name="comment"
							rows="5"
							placeholder="Add a new comment"
							required
						/>
					</div>
					<div className="button">
						<button type="submit">
							<span>Comment</span>
						</button>
						<img
							className="icon--button"
							src={addComment}
							alt="add comment"
						/>
					</div>
				</form>
			</div>
			<div className="comments__list">
				{comments.map((comment, index) => {
					return (
						<Comment
							key={comment.id}
							avatar={index < 3 ? '' : myAvatar}
							name={comment.name}
							date={comment.timestamp}
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
