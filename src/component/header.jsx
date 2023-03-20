import React, { Component } from 'react';
import logoHeader from '../assets/smkopi.png';
import searchLogo from '../assets/product-css/searchlogo.svg';
import chatLogo from '../assets/product-css/chatlogo.svg';
import profileLogo from '../assets/product-css/profilelogo.svg';

class Header extends Component {
    render() {
    return (
    <div className="topbar">
                <header className='left-topbar'>
                    <img src={logoHeader} alt='' className='kopi' />
                    <div className=''>Coffee Shop</div>
                </header>
                <div className='mid-topbar'>
                    <ul className='flex gap-5'>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Your Cart</li>
                        <li>History</li>
                    </ul>
                </div>
                <div className='right-topbar'>
                    <img src={searchLogo} alt='' />
                    <img src={chatLogo} alt='' />
                    <img src={profileLogo} alt='' />
                </div>
            </div>
           
    )}
    
}


export default Header;
  