import React, { useState } from 'react';
import Video from './Video/Video';
import Info from './Info/Info';
import Comments from './CommentsList/CommentsList';
import NextVideo from './NextVideosList/NextVideosList';

import videoDetailList from '../../data/video-details.json';
import thumbnailList from '../../data/videos.json';

import './Main.scss';

function Main() {
	const defaultVideo = videoDetailList[0];
	const [activeVideo, setActiveVideo] = useState(defaultVideo);

	const changeActiveVideo = id => {
		const nextVideo = videoDetailList.filter(
			videoDetail => videoDetail.id === id
		);
		setActiveVideo(nextVideo[0]);
	};

	return (
		<main>
			<Video video={activeVideo} />
			<div className="text-control">
				<div className="text-control__current-video">
					<Info video={activeVideo} />
					<Comments
						key={activeVideo.id}
						videoComments={activeVideo.comments}
					/>
				</div>
				<div className="text-control__next-videos">
					<NextVideo
						videos={thumbnailList}
						thisVideoId={activeVideo.id}
						changeActiveVideo={changeActiveVideo}
					/>
				</div>
			</div>
		</main>
	);
}

export default Main;
