import axios from 'axios';

const API_PORT = 8080;
const API_ADDRESS = `http://localhost:${API_PORT}`;

const newCommentHeader = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const getVideoList = async () => {
	try {
		const videoList = await axios.get(`${API_ADDRESS}/videos`);
		return videoList;
	} catch (error) {
		console.error(error.response.data.message);
	}
};

const getVideoDetail = async activeVideoId => {
	try {
		const videoDetail = await axios.get(
			`${API_ADDRESS}/videos/${activeVideoId}`
		);
		return videoDetail;
	} catch (error) {
		return error.response;
	}
};

const postNewComment = (videoId, newComment) => {
	try {
		const comment = axios.post(
			`${API_ADDRESS}/videos/${videoId}/comments`,
			newComment,
			newCommentHeader
		);
		return comment;
	} catch (error) {
		console.error(error.response);
	}
};

const deleteOldComment = (videoId, commentId) => {
	try {
		const comment = axios.delete(
			`${API_ADDRESS}/videos/${videoId}/comments/${commentId}`
		);
		return comment;
	} catch (error) {
		console.error(error.response);
	}
};

const postNewVideo = newVideo => {
	try {
		const videos = axios.post(`${API_ADDRESS}/videos`, newVideo);
		return videos;
	} catch (error) {}
};

export {
	API_ADDRESS,
	getVideoList,
	getVideoDetail,
	postNewComment,
	deleteOldComment,
	postNewVideo,
};
