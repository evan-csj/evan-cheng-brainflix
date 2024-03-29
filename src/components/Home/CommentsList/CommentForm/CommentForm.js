import React, { useRef } from 'react';
import { submitHandler, textareaAutoSize } from '../../../formChange';
import addCommentIcon from '../../../../assets/icons/add_comment.svg';
import './CommentForm.scss';

function Form(props) {
	const textareaRef = useRef(null);

	return (
		<form
			onSubmit={event => {
				submitHandler(event, props.addComment, textareaRef, 'comment');
			}}
		>
			<div className="form-input__unit">
				<label htmlFor="content">Join the conversation</label>
				<textarea
					className="text-area--comment text-area--oneline"
					ref={textareaRef}
					type="textarea"
					name="content"
					id="content"
					rows={1}
					placeholder="Add a new comment"
					required
					onInput={event => {
						textareaAutoSize(event, textareaRef, 'comment');
					}}
				/>
			</div>
			<button className="button" type="submit">
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
