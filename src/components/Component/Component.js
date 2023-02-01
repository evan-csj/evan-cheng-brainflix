import React from 'react';
import logo from '../../assets/logo/BrainFlix-logo.svg';

function Header() {
    return (
        <header>
            <img src={logo} alt='Logo'/>
        </header>
    )
}

export {Header};