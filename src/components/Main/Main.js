import React from 'react';
import Video from './Video/Video';
import Info from './Info/Info';
import Comments from './Comments/Comments';
import Next from './Next/Next';

import videoDetailList from '../../data/video-details.json';
import videoList from '../../data/videos.json';

import './Main.scss';

function Main() {
	const currentVideo = videoDetailList[0];

	return (
		<main>
			<Video video={currentVideo} />
			<div className="text-control">
				<div className="text-control__current-video">
					<Info video={currentVideo} />
					<Comments video={currentVideo} />
				</div>
				<div className="text-control__next-videos">
					<Next videos={videoList} />
				</div>
			</div>
		</main>
	);
}

export default Main;
