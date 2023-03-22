const textareaAutoSize = (event, textareaRef, type) => {
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

const submitHandler = (event, addElement, textareaRef, type) => {
	event.preventDefault();
	if (type === 'comment') {
		addElement(event.target.content.value);
		textareaRef.current.style.height = 'auto';
		textareaRef.current.className = 'text-area--comment text-area--oneline';
	}

	if (type === 'video') {
		addElement(
			event.target.videoTitle.value,
			event.target.videoDescription.value
		);
	}

	event.target.reset();
};

export { submitHandler, textareaAutoSize };
