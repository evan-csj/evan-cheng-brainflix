const HandleChange = (event, width) => {
	const padding = width < 768 ? 12 : 16;
	const lineHeight = width < 768 ? 18 : 22;

	const height = event.target.scrollHeight - padding * 2;
	const requiredRows = Math.ceil(height / lineHeight);

	return requiredRows;
};

const SubmitHandler = (event, addComment) => {
	event.preventDefault();
	if (addComment) addComment(event.target.content.value);
	event.target.reset();
};

export { SubmitHandler, HandleChange };
