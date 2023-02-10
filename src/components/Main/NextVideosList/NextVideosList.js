import React from 'react';

import './NextVideosList.scss';
import Thumbnail from './Thumbnail/Thumbnail';

function NextVideosList(props) {
	const thumbnailList = props.videos;
	const currentVideoId = props.thisVideoId;

	return (
		<>
			<h2>Next Videos</h2>
			<div className="next-videos-list">
				{thumbnailList
					.filter(thumbnail => thumbnail.id !== currentVideoId)
					.map((thumbnail, index) => {
						return (
							<Thumbnail
								key={index}
								id={thumbnail.id}
								image={thumbnail.image}
								title={thumbnail.title}
								channel={thumbnail.channel}
								changeActiveVideo={props.changeActiveVideo}
							/>
						);
					})}
			</div>
		</>
	);
}

export default NextVideosList;