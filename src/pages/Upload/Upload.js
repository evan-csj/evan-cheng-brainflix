import React from 'react';
import preview from '../../assets/images/Upload-video-preview.jpg';
import publish from '../../assets/icons/publish.svg';
import './Upload.scss';

function Upload() {
	return (
		<section>
			<h1>Upload Video</h1>
			<form>
				<div>
					<label>Video Thumbnail</label>
					<img src={preview} alt="preview" />
				</div>
				<div>
					<label htmlFor="video-title">Title Your Video</label>
					<input
						className="no-error"
						name="video-title"
						type="text"
						placeholder="Add a title to your video"
					/>
				</div>
				<div>
					<label htmlFor="video-description">
						Add a Video Description
					</label>
					<textarea
						type="textarea"
						name="video-description"
						rows="3"
						placeholder="Add a new comment"
						required
						// onChange={handleChange}
					/>
				</div>
				<button type="submit">
					<span>Publish</span>
					<img className="icon--button" src={publish} alt="publish" />
				</button>
			</form>
		</section>
	);
}

export default Upload;
