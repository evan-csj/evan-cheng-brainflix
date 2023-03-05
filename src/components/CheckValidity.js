const errorMsg = 'Cannot be empty!';

const CheckValidity = inputText => {
	const emptyExp = new RegExp('^\\s+$');

	if (!emptyExp.test(inputText)) {
		formComment.classList.remove('error');
		formComment.classList.add('no-error');
		formComment.setCustomValidity('');
	} else {
		formComment.classList.remove('no-error');
		formComment.classList.add('error');
		formComment.setCustomValidity(errorMsg);
	}
};

export default CheckValidity;
