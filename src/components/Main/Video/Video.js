import React from 'react';

import './Video.scss';

function Video(props) {
	return (
		<div className="video-control">
			<video controls poster={props.video.image}>
				<source src="" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default Video;
