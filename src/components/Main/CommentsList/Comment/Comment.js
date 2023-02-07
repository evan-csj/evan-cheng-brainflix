import React from 'react';

import './Comment.scss';

function Comment(props) {
	const avatar = props.avatar ? (
		<img className="avatar" src={props.avatar} alt="avatar" />
	) : (
		<div className="avatar"></div>
	);

	return (
		<article>
			{avatar}
			<div className="comment">
				<div className="comment__attribute">
					<span className="text text--name">{props.name}</span>
					<span className="text text--number">{props.date}</span>
				</div>
				<p className="comment__text">{props.text}</p>
				{/* <div className="comment__action"></div> */}
			</div>
		</article>
	);
}

export default Comment;
