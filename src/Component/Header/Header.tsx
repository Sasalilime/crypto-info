import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src='/assets/crypto.svg'/>
            <h2 className="title">Crypto-Info</h2>
        </div>
    );
};

export default Header;