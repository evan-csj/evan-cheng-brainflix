import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toast, { Success, Warn } from './components/Toast/Toast';
import { API_ADDRESS, PostNewVideo } from './components/API';
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

		PostNewVideo(newVideo).then(response => {
			console.log(response.data)
		});

	};

	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<VideoPlayer userName={userName} />}
					/>
					<Route
						path="/home"
						element={<VideoPlayer userName={userName} />}
					/>
					<Route
						path="/video"
						element={<VideoPlayer userName={userName} />}
					/>
					<Route
						path="/video/:videoId"
						element={<VideoPlayer userName={userName} />}
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
