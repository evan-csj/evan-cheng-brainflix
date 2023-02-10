import React from 'react';
import addCommentIcon from '../../../../assets/icons/add_comment.svg';
import './CommentForm.scss';

function Form(props) {
	const submitHandler = event => {
		event.preventDefault();
		props.addComment(event.target.content.value);
		event.target.reset();
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="text-input">
				<label htmlFor="content">Join the conversation</label>
				<textarea
					type="textarea"
					name="content"
					id="content"
					rows="5"
					placeholder="Add a new comment"
					required
				/>
			</div>
			<div className="button">
				<button type="submit">
					<span>Comment</span>
					<img
						className="icon--button"
						src={addCommentIcon}
						alt="add comment"
					/>
				</button>
			</div>
		</form>
	);
}

export default Form;
