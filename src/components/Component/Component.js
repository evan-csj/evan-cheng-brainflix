import React from "react";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <div className="search-box">
                <input type="text" placeholder="Search"/>
                <img src={search} alt="search" />
            </div>
            <div className="upload-button">
                <button type="submit">UPLOAD</button>
                <img src={upload} alt="upload"/>
            </div>
        </header>
    );
}

export { Header };
