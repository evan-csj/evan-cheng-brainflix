import React, { useState } from 'react';
import { SubmitHandler, HandleChange } from '../../components/FormChange';
import { useNavigate } from 'react-router-dom';
import WindowDimensions from '../../components/WindowDimension';
import preview from '../../assets/images/Upload-video-preview.jpg';
import publish from '../../assets/icons/publish.svg';
import './Upload.scss';

function Upload(props) {
	const [textAreaRows, setTextAreaRows] = useState(3);
	const { width } = WindowDimensions();
	const navigate = useNavigate();

	return (
		<>
			<div className="divider"></div>
			<section>
				<h1>Upload Video</h1>
				<form
					onSubmit={event => {
						SubmitHandler(event, undefined);
						setTextAreaRows(3);
						navigate('/home');
						props.upload();
					}}
				>
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
									className="text-area--upload"
									type="textarea"
									name="video-description"
									rows={textAreaRows}
									placeholder="Add a new comment"
									required
									onChange={event => {
										setTextAreaRows(
											HandleChange(event, width)
										);
									}}
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
						<button type="button" className="button--reverse" onClick={() => {navigate('/home'); props.cancel()}}>
							<span>Cancel</span>
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Upload;
