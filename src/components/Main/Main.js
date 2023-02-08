import React from 'react';
import Video from './Video/Video';
import Info from './Info/Info';
import Comments from './CommentsList/CommentsList';
import Next from './NextVideosList/NextVideosList';

import videoDetailList from '../../data/video-details.json';
import thumbnailList from '../../data/videos.json';

import './Main.scss';

function Main() {
	const currentVideo = videoDetailList[0];
	const currentVideoId = currentVideo.id;

	return (
		<main>
			<Video video={currentVideo} />
			<div className="text-control">
				<div className="text-control__current-video">
					<Info video={currentVideo} />
					<Comments video={currentVideo} />
				</div>
				<div className="text-control__next-videos">
					<Next videos={thumbnailList} thisVideoId={currentVideoId}/>
				</div>
			</div>
		</main>
	);
}

export default Main;
