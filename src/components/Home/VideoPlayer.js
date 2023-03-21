// Library
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetVideoList, GetVideoDetail } from '../API';

// Component
import Video from './Video/Video';
import Info from './Info/Info';
import Comments from './CommentsList/CommentsList';
import NextVideo from './NextVideosList/NextVideosList';

// scss
import './VideoPlayer.scss';

function VideoPlayer(props) {
	const { videoId } = useParams();
	const [mainVideo, setMainVideo] = useState(null);
	const [sideVideo, setSideVideo] = useState(null);
	const [fetch, setFetch] = useState(false);

	useEffect(() => {
		if (sideVideo === null) {
			GetVideoList().then(response => {
				setSideVideo(response.data);
				setFetch(true);
			});
		}
	});

	useEffect(() => {
		if (fetch) {
			if (videoId === undefined) {
				GetVideoDetail(sideVideo[0].id).then(response => {
					setMainVideo(response.data);
				});
			} else {
				GetVideoDetail(videoId).then(response => {
					if (response.data.hasOwnProperty('id')) {
						setMainVideo(response.data);
					} else {
						const errorVideo = {
							title: response.data.message,
							channel: 'No Channel',
							description: '',
							views: 0,
							likes: 0,
							timestamp: '',
							comments: [],
						};
						setMainVideo(errorVideo);
					}
				});
			}
		}
	}, [videoId, fetch]);

	const activeVideo = {
		mainVideo: mainVideo,
		sideVideo: sideVideo,
	};

	if (mainVideo === null || sideVideo === null) {
		return null;
	} else {
		return (
			<main>
				<Video video={activeVideo.mainVideo} />
				<div className="text-control">
					<div className="text-control__current-video">
						<Info video={activeVideo.mainVideo} />
						<Comments
							key={activeVideo.mainVideo.id}
							id={activeVideo.mainVideo.id}
							videoComments={activeVideo.mainVideo.comments}
							userName={props.userName}
						/>
					</div>
					<div className="text-control__next-videos">
						<NextVideo
							videos={activeVideo.sideVideo}
							thisVideoId={activeVideo.mainVideo.id}
						/>
					</div>
				</div>
			</main>
		);
	}
}

export default VideoPlayer;
