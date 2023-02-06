import React from 'react';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import search from '../../assets/icons/search.svg';
import upload from '../../assets/icons/upload.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';

import './Header.scss';

function Header() {
	return (
		<header>
			<img className="logo" src={logo} alt="Logo" />
			<div className="search-box">
				<input className="no-error" type="text" placeholder="Search" />
				<img className="icon" src={search} alt="search" />
				<img className="avatar" src={avatar} alt="avatar" />
			</div>
			<div className="button">
				<button type="submit">
					<span>Upload</span>
				</button>
				<img className="icon" src={upload} alt="upload" />
			</div>
			<img className="avatar" src={avatar} alt="avatar" />
		</header>
	);
}

export default Header;
