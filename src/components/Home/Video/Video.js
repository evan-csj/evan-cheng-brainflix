import React from 'react';
import { API_ADDRESS } from '../../axios';
import './Video.scss';

function Video(props) {
	const videoUrl = props.video.image
		? API_ADDRESS + '/' + props.video.image
		: '';
	return (
		<div className="video-control">
			<video controls poster={videoUrl}>
				<source src="" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default Video;
