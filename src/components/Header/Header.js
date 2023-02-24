import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import search from '../../assets/icons/search.svg';
import upload from '../../assets/icons/upload.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';

import './Header.scss';

function Header() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/upload');
	};

	return (
		<header>
			<Link className="logo" to="/">
				<img src={logo} alt="Logo" />
			</Link>

			<div className="user">
				<div className="search-box">
					<input
						className="no-error"
						type="text"
						placeholder="Search"
					/>
					<img className="icon--search" src={search} alt="search" />
					<img className="avatar" src={avatar} alt="avatar" />
				</div>
				<button className="button" type="button" onClick={handleClick}>
					<span>Upload</span>
					<img className="icon--button" src={upload} alt="upload" />
				</button>
				<div className="avatar">
					<img className="avatar" src={avatar} alt="avatar" />
				</div>
			</div>
		</header>
	);
}

export default Header;
