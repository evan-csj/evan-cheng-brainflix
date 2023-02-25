import axios from 'axios';

const apiAddress = 'https://project-2-api.herokuapp.com';
const apiKey = '611d31a1-7bdd-4769-8e5f-de260b873bb4';

const newCommentHeader = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const GetVideoList = async () => {
	try {
		const videoList = await axios.get(
			`${apiAddress}/videos?api_key=${apiKey}`
		);
		return videoList;
	} catch (e) {
		console.error('error');
	}
};

const GetVideoDetail = async activeVideoId => {
	try {
		const videoDetail = await axios.get(
			`${apiAddress}/videos/${activeVideoId}?api_key=${apiKey}`
		);
		return videoDetail;
	} catch (e) {
		console.error('error');
	}
};

const PostNewComment = (videoId, newComment) => {
	try {
		const comment = axios.post(
			`${apiAddress}/videos/${videoId}/comments?api_key=${apiKey}`,
			newComment,
			newCommentHeader
		);
		return comment;
	} catch (e) {
		console.error('error');
	}
};

const DeleteComment = (videoId, commentId) => {
	try {
		const comment = axios.delete(
			`${apiAddress}/videos/${videoId}/comments/${commentId}?api_key=${apiKey}`
		);
		return comment;
	} catch (e) {
		console.error('error');
	}
};

export { GetVideoList, GetVideoDetail, PostNewComment, DeleteComment };
