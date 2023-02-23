import React from 'react';

function Upload() {
	return (
		<section>
			<h1>Upload Video</h1>
			<label>Video Thumbnail</label>
			<label htmlFor="video-title">Title Your Video</label>
			<input
				className="no-error"
				name="video-title"
				type="text"
				placeholder="Add a title to your video"
			/>
			<label htmlFor="video-description">Add a Video Description</label>
			<textarea
				type="textarea"
				name="video-description"
				rows="3"
				placeholder="Add a new comment"
				required
				// onChange={handleChange}
			/>
		</section>
	);
}

export default Upload;
