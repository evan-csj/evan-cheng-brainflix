import React, { useState, useRef } from 'react';
import { API_ADDRESS } from '../../axios';
import './Video.scss';
// import playIcon from '../../../assets/icons/play.svg';
// import pauseIcon from '../../../assets/icons/pause.svg';
// import scrubIcon from '../../../assets/icons/scrub.svg';
// import fullscreenIcon from '../../../assets/icons/fullscreen.svg';
// import closeFullscreenIcon from '../../../assets/icons/close_fullscreen.svg';
// import volumeUpIcon from '../../../assets/icons/volume_up.svg';
// import volumeOffIcon from '../../../assets/icons/volume_off.svg';
const testVideo =
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

function Video(props) {
	const [playing, setPlaying] = useState(false);
	const [mute, setMute] = useState(false);
	const videoRef = useRef(null);

	const videoUrl = props.video.image
		? API_ADDRESS + '/' + props.video.image
		: '';

	const playHandler = control => {
		if (control === 'play') {
			videoRef.current.play();
			setPlaying(true);
		} else if (control === 'pause') {
			videoRef.current.pause();
			setPlaying(false);
		}
	};

	const fullscreenHandler = control => {
		if (control === 'request') {
			videoRef.current.requestFullscreen();
		} else if (control === 'exit') {
			videoRef.current.exitFullscreen();
		}
	};

	const muteHandler = control => {
		if (control === 'mute') {
			videoRef.current.muted = true;
			setMute(true);
		} else if (control === 'unmute') {
			videoRef.current.muted = false;
			setMute(false);
		}
	};

	return (
		<div className="video-container">
			<video ref={videoRef} poster={videoUrl}>
				<source src={testVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="video-controls">
				<div className="video-controls__container">
					<div className="video-controls__play-pause">
						{playing ? (
							<button
								className="pause-button"
								type="button"
								onClick={() => playHandler('pause')}
							></button>
						) : (
							<button
								className="play-button"
								type="button"
								onClick={() => playHandler('play')}
							></button>
						)}
					</div>

					<div className="video-controls__progress">
						<progress
							className="progress--video"
							value="20"
							max="100"
						>
							{/* <span className="bar"></span> */}
						</progress>
					</div>

					<div className="video-controls__fullscreen-mute">
						<button
							className="video-controls__fullscreen"
							type="button"
							onClick={() => fullscreenHandler('request')}
						></button>

						{mute ? (
							<button
								className="video-controls__volume-off"
								type="button"
								onClick={() => muteHandler('unmute')}
							></button>
						) : (
							<button
								className="video-controls__volume-up"
								type="button"
								onClick={() => muteHandler('mute')}
							></button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Video;
