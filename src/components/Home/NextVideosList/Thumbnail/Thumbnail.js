import React from 'react';
import { Link } from 'react-router-dom';
import { API_ADDRESS } from '../../../axios';
import './Thumbnail.scss';

function Thumbnail(props) {
	const imageUrl = API_ADDRESS + '/' + props.image;

	return (
		<Link to={`/videos/${props.id}`}>
			<div className="thumbnail">
				<img src={imageUrl} alt={props.title} />
				<div>
					<h3>{props.title}</h3>
					<p>{props.channel}</p>
				</div>
			</div>
		</Link>
	);
}

export default Thumbnail;
