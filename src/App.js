import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import VideoPlayer from './components/Home/VideoPlayer';
import './App.scss';

function App() {
	useEffect(() => {
		document.title = 'BrainFlix';
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<VideoPlayer />} />
					<Route path="/home" element={<VideoPlayer />} />
					<Route path="/video/:videoId" element={<VideoPlayer />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
