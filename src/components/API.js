import axios from 'axios';

const API_ADDRESS = 'https://project-2-api.herokuapp.com';
const API_KEY = '611d31a1-7bdd-4769-8e5f-de260b873bb4';

const newCommentHeader = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const GetVideoList = async () => {
	try {
		const videoList = await axios.get(
			`${API_ADDRESS}/videos?api_key=${API_KEY}`
		);
		return videoList;
	} catch (error) {
		console.error(error.response.data.message);
	}
};

const GetVideoDetail = async activeVideoId => {
	try {
		const videoDetail = await axios.get(
			`${API_ADDRESS}/videos/${activeVideoId}?api_key=${API_KEY}`
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
			`${API_ADDRESS}/videos/${videoId}/comments?api_key=${API_KEY}`,
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
			`${API_ADDRESS}/videos/${videoId}/comments/${commentId}?api_key=${API_KEY}`
		);
		return comment;
	} catch (error) {
		console.error(error.response);
	}
};

export { GetVideoList, GetVideoDetail, PostNewComment, DeleteComment };
