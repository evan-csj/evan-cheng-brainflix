import React, { useRef } from 'react';
import { SubmitHandler, TextareaAutoSize } from '../../components/FormChange';
import { useNavigate } from 'react-router-dom';
import { API_ADDRESS, PostNewVideo } from '../../components/API';
import publish from '../../assets/icons/publish.svg';
import './Upload.scss';

function Upload(props) {
	const navigate = useNavigate();
	const textareaRef = useRef(null);
	const uploadImage = 'upload-video-preview.jpg';

	const addVideo = (title, description) => {
		const newVideo = {
			title: title,
			channel: props.userName,
			image: uploadImage,
			description: description,
		};

		PostNewVideo(newVideo);
		props.upload()
	};

	return (
		<>
			<div className="divider"></div>
			<section>
				<h1>Upload Video</h1>
				<form
					onSubmit={event => {
						SubmitHandler(event, addVideo, textareaRef, 'video');
						navigate('/home');
					}}
				>
					<div className="form-input">
						<div className="form-input--video form-input__unit">
							<label>Video Thumbnail</label>
							<img
								src={API_ADDRESS + '/' + uploadImage}
								alt="preview"
							/>
						</div>
						<div className="form-input--text">
							<div className="form-input__unit">
								<label htmlFor="video-title">
									Title Your Video
								</label>
								<input
									className="no-error"
									id="video-title"
									name="videoTitle"
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
									className="text-area--upload"
									id="video-description"
									type="textarea"
									ref={textareaRef}
									name="videoDescription"
									rows={1}
									placeholder="Add a new comment"
									required
									onInput={event =>
										TextareaAutoSize(event, textareaRef, '')
									}
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
						<button
							type="button"
							className="button--reverse"
							onClick={() => {
								navigate('/home');
								props.cancel();
							}}
						>
							<span>Cancel</span>
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Upload;
