import React from 'react';
import { API_ADDRESS } from '../../axios';
import playIcon from '../../../assets/icons/play.svg';
import pauseIcon from '../../../assets/icons/pause.svg';
import scrubIcon from '../../../assets/icons/scrub.svg';
import fullscreenIcon from '../../../assets/icons/fullscreen.svg';
import closeFullscreenIcon from '../../../assets/icons/close_fullscreen.svg';
import volumeUpIcon from '../../../assets/icons/volume_up.svg';
import volumeOffIcon from '../../../assets/icons/volume_off.svg';
import './Video.scss';

function Video(props) {
	const videoUrl = props.video.image
		? API_ADDRESS + '/' + props.video.image
		: '';
	return (
		<div className="video-container">
			<video poster={videoUrl}>
				<source src="" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="video-controls">
				<img
					className="video-controls__play"
					src={playIcon}
					alt="play"
					data-state="play"
				/>
				<img
					className="video-controls__pause"
					src={pauseIcon}
					alt="pause"
					data-state="pause"
				/>
				<img
					className="video-controls__scrub"
					src={scrubIcon}
					alt="scrub"
				/>
				<img
					className="video-controls__fullscreen"
					src={fullscreenIcon}
					alt="fullscreen"
				/>
				<img
					className="video-controls__close-fullscreen"
					src={closeFullscreenIcon}
					alt="close fullscreen"
				/>
				<img
					className="video-controls__volume-up"
					src={volumeUpIcon}
					alt="volume up"
				/>
				<img
					className="video-controls__volume-off"
					src={volumeOffIcon}
					alt="volume off"
				/>
			</div>
		</div>
	);
}

export default Video;
