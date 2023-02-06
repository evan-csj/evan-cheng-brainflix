import React from 'react';
import viewIcon from '../../../assets/icons/views.svg';
import likeIcon from '../../../assets/icons/likes.svg';

import './Info.scss';

function Info(props) {
	const videoInfo = props.video;
	const title = videoInfo.title;
	const channel = videoInfo.channel;
	const date = videoInfo.timestamp;
	const views = videoInfo.views;
	const likes = videoInfo.likes;

	return (
		<div className="info">
			<div className="info__title">
				<h1>{title}</h1>
			</div>
			<div className="info__data">
				<label className="channel">By {channel}</label>
				<label className="date">{date}</label>
				<div className="view">
					<img src={viewIcon} />
					<label>{views}</label>
				</div>
				<div className="like">
					<img src={likeIcon} />
					<label>{likes}</label>
				</div>
			</div>
			<p>{videoInfo.description}</p>
		</div>
	);
}

export default Info;
