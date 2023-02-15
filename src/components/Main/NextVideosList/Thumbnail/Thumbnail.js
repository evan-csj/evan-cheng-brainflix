import React from 'react';
import { Link } from 'react-router-dom';
import './Thumbnail.scss';

function Thumbnail(props) {
	return (
		<Link to={`/video/${props.id}`}>
			<div
				className="thumbnail"
				// onClick={() => props.changeActiveVideo(props.id)}
			>
				<img src={props.image} alt={props.title} />
				<div>
					<h3>{props.title}</h3>
					<p>{props.channel}</p>
				</div>
			</div>
		</Link>
	);
}

export default Thumbnail;
