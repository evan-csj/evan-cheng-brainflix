import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toast, { Success, Warn } from './components/Toast/Toast';
import Header from './components/Header/Header';
import VideoPlayer from './components/Home/VideoPlayer';
import Upload from './pages/Upload/Upload';
import Error from './components/Error/Error';
import './App.scss';

const uploadMsg = 'Succeed to upload a video!';
const cancelMsg = 'Cancel video upload!';

function App() {
	const userName = 'First-Name Last-Name';
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
								userName={userName}
								upload={videoUpload}
								cancel={cancelUpload}
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
