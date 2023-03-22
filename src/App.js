import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toast, { Success, Warn } from './components/Toast/Toast';
import { postNewVideo } from './components/axios';
import Header from './components/Header/Header';
import VideoPlayer from './components/Home/VideoPlayer';
import Upload from './pages/Upload/Upload';
import Error from './components/Error/Error';
import './App.scss';

const uploadMsg = 'Succeed to upload a video!';
const cancelMsg = 'Cancel video upload!';

function App() {
	const userName = 'First-Name Last-Name';
	const uploadImage = 'upload-video-preview.jpg';
	const [sideVideoRef, setSideVideoRef] = useState(null);
	const videoUpload = () => {
		Success(uploadMsg);
	};

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
			setSideVideoRef(response.data);
		});
	};

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
								sideVideo={sideVideoRef}
							/>
						}
					/>
					<Route
						path="/home"
						element={
							<VideoPlayer
								userName={userName}
								sideVideo={sideVideoRef}
							/>
						}
					/>
					<Route
						path="/videos"
						element={
							<VideoPlayer
								userName={userName}
								sideVideo={sideVideoRef}
							/>
						}
					/>
					<Route
						path="/videos/:videoId"
						element={
							<VideoPlayer
								userName={userName}
								sideVideo={sideVideoRef}
							/>
						}
					/>
					<Route
						path="/upload"
						element={
							<Upload
								upload={videoUpload}
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
