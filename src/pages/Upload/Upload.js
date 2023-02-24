import React from 'react';
import preview from '../../assets/images/Upload-video-preview.jpg';
import publish from '../../assets/icons/publish.svg';
import './Upload.scss';

function Upload() {
	return (
		<>
			<div className="divider"></div>
			<section>
				<h1>Upload Video</h1>
				<form>
					<div className="form-input">
						<div className="form-input--video form-input__unit">
							<label>Video Thumbnail</label>
							<img src={preview} alt="preview" />
						</div>
						<div className="form-input--text">
							<div className="form-input__unit">
								<label htmlFor="video-title">
									Title Your Video
								</label>
								<input
									className="no-error"
									name="video-title"
									type="text"
									placeholder="Add a title to your video"
									required
								/>
							</div>
							<div className="form-input__unit">
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
						</div>
					</div>
					<div className="form-button">
						<button className="button" type="submit">
							<span>Publish</span>
							<img
								className="icon--button"
								src={publish}
								alt="publish"
							/>
						</button>
						<button type="button" className="button--reverse">
							<span>Cancel</span>
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Upload;
