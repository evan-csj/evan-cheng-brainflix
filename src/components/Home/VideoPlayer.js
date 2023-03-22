// Library
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getDefaultVideo, getVideoList, getVideoDetail } from '../axios';

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
	const defaultVideo = useRef(null);
	const [fetch, setFetch] = useState(false);

	useEffect(() => {
		if (defaultVideo.current === null) {
			getVideoList().then(response => {
				setSideVideo(response.data);
				defaultVideo.current = response.data[0];
				setFetch(true);
			});
		}
	}, [sideVideo]);

	useEffect(() => {
		if (props.sideVideo !== null) {
			setSideVideo(props.sideVideo);
		}
	}, [props.sideVideo]);

	useEffect(() => {
			if (videoId === undefined) {
				getDefaultVideo().then(response => {
					setMainVideo(response.data);
				});
			} else {
				getVideoDetail(videoId).then(response => {
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
	}, [videoId]);

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
