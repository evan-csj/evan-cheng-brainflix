import React from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.scss';

const Error = message =>
	toast.error(message, {
		progress: undefined,
	});

const Success = message =>
	toast.success(message, {
		progress: undefined,
	});

const Warn = message =>
	toast.warn(message, {
		progress: undefined,
	});

function Toast() {
	return (
		<ToastContainer
			position="bottom-center"
			autoClose={1000}
			transition={Flip}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="colored"
		/>
	);
}

export default Toast;
export { Error, Success, Warn };
