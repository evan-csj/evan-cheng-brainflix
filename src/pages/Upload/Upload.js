// Library
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import { submitHandler, textareaAutoSize } from '../../components/formChange';
import { API_ADDRESS } from '../../components/axios';

// scss
import './Upload.scss';
import 'react-dropdown/style.css';

// static
import publish from '../../assets/icons/publish.svg';

function Upload(props) {
	const navigate = useNavigate();
	const textareaRef = useRef(null);
	const [uploadImage, setUploadImage] = useState(props.defaultImage);

	return (
		<>
			<div className="divider"></div>
			<section>
				<h1>Upload Video</h1>
				<form
					onSubmit={event => {
						submitHandler(
							event,
							props.addVideo,
							textareaRef,
							'video'
						);
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
							<Dropdown
								options={props.imageList}
								value={uploadImage}
								onChange={event => {
									props.updateUploadImage(event);
									setUploadImage(event.value);
								}}
								placeholder="Select an image"
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
										textareaAutoSize(event, textareaRef, '')
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
