import React, { useState } from 'react';
import { SubmitHandler, HandleChange } from '../../../FormChange';
import WindowDimensions from '../../../WindowDimension';
import addCommentIcon from '../../../../assets/icons/add_comment.svg';
import './CommentForm.scss';

function Form(props) {
	const { width } = WindowDimensions();
	const [textAreaRows, setTextAreaRows] = useState(1);

	return (
		<form
			onSubmit={event => {
				SubmitHandler(event, props.addComment);
				setTextAreaRows(1);
			}}
		>
			<div className="form-input__unit">
				<label htmlFor="content">Join the conversation</label>
				<textarea
					className={
						textAreaRows > 1
							? 'text-area--comment'
							: 'text-area--oneline'
					}
					type="textarea"
					name="content"
					id="content"
					rows={textAreaRows}
					placeholder="Add a new comment"
					required
					onChange={event => {
						setTextAreaRows(HandleChange(event, width, 'comment'));
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
