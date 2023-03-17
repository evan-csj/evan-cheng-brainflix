import axios from 'axios';

const API_PORT = 8080;
const API_ADDRESS = `http://localhost:${API_PORT}`;

const newCommentHeader = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const GetVideoList = async () => {
	try {
		const videoList = await axios.get(`${API_ADDRESS}/videos`);
		return videoList;
	} catch (error) {
		console.error(error.response.data.message);
	}
};

const GetVideoDetail = async activeVideoId => {
	try {
		const videoDetail = await axios.get(
			`${API_ADDRESS}/videos/${activeVideoId}`
		);
		return videoDetail;
	} catch (error) {
		console.error(error.response.data.message);
		return error.response;
	}
};

const PostNewComment = (videoId, newComment) => {
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

const DeleteComment = (videoId, commentId) => {
	try {
		const comment = axios.delete(
			`${API_ADDRESS}/videos/${videoId}/comments/${commentId}`
		);
		return comment;
	} catch (error) {
		console.error(error.response);
	}
};

export {
	API_ADDRESS,
	GetVideoList,
	GetVideoDetail,
	PostNewComment,
	DeleteComment,
};
