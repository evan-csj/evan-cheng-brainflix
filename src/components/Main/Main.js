import React, { useState } from 'react';
import Video from './Video/Video';
import Info from './Info/Info';
import Comments from './CommentsList/CommentsList';
import NextVideo from './NextVideosList/NextVideosList';

import videoDetailList from '../../data/video-details.json';
import thumbnailList from '../../data/videos.json';

import './Main.scss';

function Main() {
	const defaultVideo = {
		mainVideo: videoDetailList[0],
		sideVideo: thumbnailList,
	};

	const [activeVideo, setActiveVideo] = useState(defaultVideo);

	const changeActiveVideo = id => {
		const nextVideo = videoDetailList.filter(
			videoDetail => videoDetail.id === id
		);
		setActiveVideo({
			mainVideo: nextVideo[0],
			sideVideo: thumbnailList,
		});
	};

	return (
		<main>
			<Video video={activeVideo.mainVideo} />
			<div className="text-control">
				<div className="text-control__current-video">
					<Info video={activeVideo.mainVideo} />
					<Comments
						key={activeVideo.mainVideo.id}
						videoComments={activeVideo.mainVideo.comments}
					/>
				</div>
				<div className="text-control__next-videos">
					<NextVideo
						videos={activeVideo.sideVideo}
						thisVideoId={activeVideo.mainVideo.id}
						changeActiveVideo={changeActiveVideo}
					/>
				</div>
			</div>
		</main>
	);
}

export default Main;
