import React from 'react';
import logo from '../../food-logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/all-foods">All Foods</a>
                <a href="/orders">Orders</a>
                <a href="/AQ">A&Q</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;