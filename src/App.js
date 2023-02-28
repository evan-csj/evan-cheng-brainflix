import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toast, { Success, Warn } from './components/Toast/Toast';
import Header from './components/Header/Header';
import VideoPlayer from './components/Home/VideoPlayer';
import Upload from './pages/Upload/Upload';
import './App.scss';

const uploadMsg = 'Succeed to upload a video!';
const cancelMsg = 'Cancel video upload!';

function App() {
	useEffect(() => {
		document.title = 'BrainFlix';
	}, []);

	const videoUpload = () => {
		Success(uploadMsg);
	};

	const cancelUpload = () => {
		Warn(cancelMsg);
	};

	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<VideoPlayer />} />
					<Route path="/home" element={<VideoPlayer />} />
					<Route path="/video/:videoId" element={<VideoPlayer />} />
					<Route
						path="/upload"
						element={
							<Upload
								upload={videoUpload}
								cancel={cancelUpload}
							/>
						}
					/>
					<Route path="/*" element={<VideoPlayer />} />
				</Routes>
			</BrowserRouter>
			<Toast />
		</div>
	);
}

export default App;
