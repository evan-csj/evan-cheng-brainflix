import React, { useState, useRef } from 'react';
import { API_ADDRESS } from '../../axios';
import './Video.scss';

const testVideo =
	'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

function Video(props) {
	const [playing, setPlaying] = useState(false);
	const [mute, setMute] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const videoRef = useRef(null);
	const progressRef = useRef(null);

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

	const progressHandler = event => {
		const percentage =
			(event.pageX - progressRef.current.offsetLeft) /
			progressRef.current.offsetWidth;
		videoRef.current.currentTime = percentage * videoRef.current.duration;
	};

	const progressUpdate = () => {
		const currentTimeRef = videoRef.current.currentTime;
		const durationRef = videoRef.current.duration;
		setCurrentTime(currentTimeRef);
		setDuration(durationRef);

		if(currentTimeRef === durationRef) {
			setPlaying(false);
		}
	};

	const timeConvert = time => {
		const m = parseInt(time / 60);
		const s = parseInt(time).toString().padStart(2, '0');
		return m + ':' + s;
	};

	return (
		<div className="video-container">
			<video
				ref={videoRef}
				poster={videoUrl}
				onTimeUpdate={progressUpdate}
			>
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
							className="scrub"
							value={currentTime}
							min="0"
							max={duration}
							ref={progressRef}
							onClick={progressHandler}
						></progress>
						<span className="time-text">
							{timeConvert(currentTime)} / {timeConvert(duration)}
						</span>
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
