import React from 'react';
import Video from './Video/Video';
import Info from './Info/Info';
import Next from './Next/Next';

import videoDetailList from '../../data/video-details.json';
import videoList from '../../data/videos.json';

function Main() {
	const activeVideo = videoDetailList[0];

	return (
		<div>
			<div>
				<Video video={activeVideo} />
				<Info video={activeVideo} />
			</div>
			<div>
				<Next videoList={videoList} />
			</div>
		</div>
	);
}

export default Main;
