import React from 'react';
import avatar from '../../../assets/images/Mohan-muruge.jpg';
import addComment from '../../../assets/icons/add_comment.svg';
import './Comments.scss';

function Comments(props) {
	const comments = props.video.comments;

	return (
		<div className="comments">
			<p>{comments.length} Comments</p>
			<div className="comments__form">
				<img className="avatar" src={avatar} alt="avatar" />
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
						<button type="submit">Comment</button>
						<img
							className="icon"
							src={addComment}
							alt="add comment"
						/>
					</div>
				</form>
			</div>
			<div className="comments__list"></div>
		</div>
	);
}

export default Comments;
