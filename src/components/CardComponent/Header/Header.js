import React from 'react';
import './Header.css';

import logo from '../../Images/logo.png';


const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="logo" />
            <h1> IMPERIAL FITNESS CLUB</h1>
        </div>
    );
};

export default Header;