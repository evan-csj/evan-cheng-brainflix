import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Video from './Video/Video';
import Info from './Info/Info';
import Comments from './CommentsList/CommentsList';
import NextVideo from './NextVideosList/NextVideosList';

import './VideoPlayer.scss';

const apiAddress = 'https://project-2-api.herokuapp.com';
const apiKey = '611d31a1-7bdd-4769-8e5f-de260b873bb4';

const GetVideoList = async () => {
	try {
		const videoList = await axios.get(
			`${apiAddress}/videos?api_key=${apiKey}`
		);
		return videoList;
	} catch (e) {
		console.error('error');
	}
};

const GetVideoDetail = async activeVideoId => {
	try {
		const videoDetail = await axios.get(
			`${apiAddress}/videos/${activeVideoId}?api_key=${apiKey}`
		);
		return videoDetail;
	} catch (e) {
		console.error('error');
	}
};

function VideoPlayer() {
	const { videoId } = useParams();
	const [mainVideo, setMainVideo] = useState(null);
	const [sideVideo, setSideVideo] = useState(null);

	useEffect(() => {
		if (videoId === undefined) {
			if (sideVideo === null) {
				GetVideoList().then(response => {
					setSideVideo(response.data);
					GetVideoDetail(response.data[0].id).then(response => {
						setMainVideo(response.data);
					});
				});
			} else {
				GetVideoDetail(sideVideo[0].id).then(response => {
					setMainVideo(response.data);
				});
			}
		} else {
			GetVideoDetail(videoId).then(response => {
				setMainVideo(response.data);
			});
			if (sideVideo === null) {
				GetVideoList().then(response => {
					setSideVideo(response.data);
				});
			}
		}
	}, [videoId, sideVideo]);

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
