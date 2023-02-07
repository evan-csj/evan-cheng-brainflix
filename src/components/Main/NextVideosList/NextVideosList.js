import React from 'react';

import './NextVideosList.scss';
import Thumbnail from './Thumbnail/Thumbnail';

function NextVideosList(props) {
	const thumbnailList = props.videos;
	console.log(thumbnailList)

	return (
		<div className="next-videos">
			<h2>Next Videos</h2>
			<div className="next-videos__list">
				{thumbnailList.map(thumbnail => {
					return (
						<Thumbnail
							key={thumbnail.id}
							image={thumbnail.image}
							title={thumbnail.title}
							channel={thumbnail.channel}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default NextVideosList;
