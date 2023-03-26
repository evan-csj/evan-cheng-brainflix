// Library
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toast, { Success, Warn } from './components/Toast/Toast';
import { postNewVideo, getVideoList } from './components/axios';

// Component
import Header from './components/Header/Header';
import VideoPlayer from './components/Home/VideoPlayer';
import Upload from './pages/Upload/Upload';
import Error from './components/Error/Error';

// scss
import './App.scss';

const uploadMsg = 'Succeed to upload a video!';
const cancelMsg = 'Cancel video upload!';

function App() {
	const userName = 'First-Name Last-Name';
	const uploadImage = 'upload-video-preview.jpg';
	const [sideVideo, setSideVideo] = useState([]);

	const cancelUpload = () => {
		Warn(cancelMsg);
	};

	const addVideo = (title, description) => {
		const newVideo = {
			title: title,
			channel: userName,
			image: uploadImage,
			description: description,
		};

		postNewVideo(newVideo).then(response => {
			const newSideVideo = [...sideVideo, response.data];
			setSideVideo(newSideVideo);
		});

		Success(uploadMsg);
	};

	useEffect(() => {
		if (sideVideo.length === 0) {
			getVideoList().then(response => {
				setSideVideo(response.data);
			});
		}
	}, [sideVideo]);

	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<VideoPlayer
								userName={userName}
								sideVideo={sideVideo}
							/>
						}
					/>
					<Route
						path="/home"
						element={
							<VideoPlayer
								userName={userName}
								sideVideo={sideVideo}
							/>
						}
					/>
					<Route
						path="/videos"
						element={
							<VideoPlayer
								userName={userName}
								sideVideo={sideVideo}
							/>
						}
					/>
					<Route
						path="/videos/:videoId"
						element={
							<VideoPlayer
								userName={userName}
								sideVideo={sideVideo}
							/>
						}
					/>
					<Route
						path="/upload"
						element={
							<Upload
								cancel={cancelUpload}
								addVideo={addVideo}
							/>
						}
					/>
					<Route path="/*" element={<Error />} />
				</Routes>
			</BrowserRouter>
			<Toast />
		</div>
	);
}

export default App;
