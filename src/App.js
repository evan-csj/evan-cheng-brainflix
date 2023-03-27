// Library
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toast, { Success, Warn } from './components/Toast/Toast';
import { postNewVideo, getVideoList, getImagesList } from './components/axios';

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
	const defaultUploadImage = 'upload-video-preview.jpg';
	const [sideVideo, setSideVideo] = useState([]);
	const imageListRef = useRef([]);
	const uploadImage = useRef(defaultUploadImage);

	const cancelUpload = () => {
		Warn(cancelMsg);
	};

	const addVideo = (title, description) => {
		const newVideo = {
			title: title,
			channel: userName,
			image: uploadImage.current,
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

	useEffect(() => {
		getImagesList().then(response => {
			imageListRef.current = response.data;
		});
	}, []);

	const updateUploadImage = event => {
		uploadImage.current = event.value;
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
								imageList={imageListRef.current}
								defaultImage={defaultUploadImage}
								updateUploadImage={updateUploadImage}
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
