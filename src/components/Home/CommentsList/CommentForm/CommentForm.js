import React, { useState } from 'react';
import WindowDimensions from '../../../WindowDimension';
import addCommentIcon from '../../../../assets/icons/add_comment.svg';
import './CommentForm.scss';

function Form(props) {
	const [textAreaRows, setTextAreaRows] = useState(1);
	const { width } = WindowDimensions();

	const submitHandler = event => {
		event.preventDefault();
		props.addComment(event.target.content.value);
		event.target.reset();
		setTextAreaRows(1);
	};

	const handleChange = event => {
		const padding = width < 768 ? 12 : 16;
		const lineHeight = width < 768 ? 18 : 22;

		const height = event.target.scrollHeight - padding * 2;
		const requiredRows = Math.ceil(height / lineHeight);
		setTextAreaRows(requiredRows);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="text-input">
				<label htmlFor="content">Join the conversation</label>
				<textarea
					className={textAreaRows > 1 ? '' : 'oneline'}
					type="textarea"
					name="content"
					id="content"
					rows={textAreaRows}
					placeholder="Add a new comment"
					required
					onChange={handleChange}
				/>
			</div>
			<button type="submit">
				<span>Comment</span>
				<img
					className="icon--button"
					src={addCommentIcon}
					alt="add comment"
				/>
			</button>
		</form>
	);
}

export default Form;
