const HandleChange = (event, windowWidth, type) => {
	const input = event.target.value;
	const requiredRows = input.split('\n').length;

	return requiredRows;
};

const SubmitHandler = (event, addComment) => {
	event.preventDefault();
	if (addComment) addComment(event.target.content.value);
	event.target.reset();
};

export { SubmitHandler, HandleChange };
