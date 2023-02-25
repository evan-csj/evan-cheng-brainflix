import React from 'react';

import './Comment.scss';

import del from '../../../../assets/icons/delete.svg';

function Comment(props) {
	const avatar = props.avatar ? (
		<img className="avatar" src={props.avatar} alt="avatar" />
	) : (
		<div className="avatar"></div>
	);

	const commentAction = props.avatar ? (
		<div className="comment__action">
			<img
				className="icon--action"
				src={del}
				alt="delete icon"
				onClick={() => props.deleteComment(props.id)}
			/>
		</div>
	) : (
		<></>
	);

	let commentClass = '';
	if (props.index !== props.length - 1) {
		commentClass = 'comment--not-last';
	}

	return (
		<article className={commentClass}>
			{avatar}
			<div className="comment">
				<div className="comment__attribute">
					<span className="text text--name">{props.name}</span>
					<span className="text text--number">{props.date}</span>
				</div>
				<p className="comment__text">{props.text}</p>
				{commentAction}
			</div>
		</article>
	);
}

export default Comment;
