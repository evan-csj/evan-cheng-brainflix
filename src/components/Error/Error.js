import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.scss';

function Error() {
	const navigate = useNavigate();

	return (
		<>
			<div className="divider"></div>
			<div className="error-page">
				<h1>Oops!</h1>
				<h2>Page not found</h2>
				<p>
					The page you are looking for doesn't exit. Please go back to
					home page.
				</p>
				<button className="button" onClick={() => navigate('/home')}>
					<span>Home</span>
				</button>
			</div>
		</>
	);
}

export default Error;
