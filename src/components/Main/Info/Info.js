import React from 'react';
import viewIcon from '../../../assets/icons/views.svg';
import likeIcon from '../../../assets/icons/likes.svg';

import './Info.scss';

function Info(props) {
	const options = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		timeZone: 'UTC',
	};

	const videoInfo = props.video;
	const title = videoInfo.title;
	const channel = videoInfo.channel;
	const date = new Date(videoInfo.timestamp).toLocaleDateString(
		'en-US',
		options
	);
	const views = videoInfo.views;
	const likes = videoInfo.likes;

	return (
		<div className="info">
			<div className="info__title">
				<h1>{title}</h1>
			</div>
			<div className="info__data">
				<div>
					<span className="text text--name">By {channel}</span>
					<span className="text text--number">{date}</span>
				</div>
				<div>
					<div>
						<img
							className="icon--data"
							src={viewIcon}
							alt="view icon"
						/>
						<span className="text text--number">{views}</span>
					</div>
					<div>
						<img
							className="icon--data"
							src={likeIcon}
							alt="like icon"
						/>
						<span className="text text--number">{likes}</span>
					</div>
				</div>
			</div>
			<p className="info__description">{videoInfo.description}</p>
		</div>
	);
}

export default Info;
