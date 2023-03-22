import React, { useState } from 'react';
import { putMoreLikes } from '../../axios';
import dynamicDate from '../../dynamicDate';
import viewIcon from '../../../assets/icons/views.svg';
import likeIcon from '../../../assets/icons/likes.svg';

import './Info.scss';

function Info(props) {
	const videoInfo = props.video;
	const title = videoInfo.title;
	const channel = videoInfo.channel;
	const date = dynamicDate(videoInfo.timestamp);
	const views = videoInfo.views;
	const [likes, setLikes] = useState(videoInfo.likes);

	const clickHandler = event => {
		event.preventDefault();
		putMoreLikes(props.video.id);
		const n = Number(likes.replace(',', '')) + 1;
		setLikes(n.toLocaleString());
	};

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
							className="icon--data icon--click"
							src={likeIcon}
							alt="like icon"
							onClick={clickHandler}
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
