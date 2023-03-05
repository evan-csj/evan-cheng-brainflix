const TextareaAutoSize = (event, textareaRef, type) => {
	if (textareaRef.current) {
		textareaRef.current.style.height = 'auto';
		if (type === 'comment') {
			if (event.target.scrollHeight > 40) {
				textareaRef.current.className =
					'text-area--comment text-area--multipleline';
			}
			if (event.target.scrollHeight <= 54) {
				textareaRef.current.className =
					'text-area--comment text-area--oneline';
			}
		}
		textareaRef.current.style.height = `${event.target.scrollHeight}px`;
	}
};

const SubmitHandler = (event, addComment, textareaRef) => {
	event.preventDefault();
	if (addComment) addComment(event.target.content.value);
	textareaRef.current.style.height = 'auto';
	textareaRef.current.className = 'text-area--comment text-area--oneline';
	event.target.reset();
};

export { SubmitHandler, TextareaAutoSize };
