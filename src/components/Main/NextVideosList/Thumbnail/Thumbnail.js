import React from 'react';
import './Thumbnail.scss';

function Thumbnail(props) {
	return (
		<div
			className="thumbnail"
			onClick={() => props.changeActiveVideo(props.id)}
		>
			<img src={props.image} alt={props.title} />
			<div>
				<h3>{props.title}</h3>
				<p>{props.channel}</p>
			</div>
		</div>
	);
}

export default Thumbnail;
