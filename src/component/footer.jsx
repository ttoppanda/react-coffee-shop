import React, { Component } from 'react';
import logoKopi from '../assets/smkopi.png';
import fbLogo from '../assets/fblogo.png';
import twtLogo from '../assets/twitterlogo.png';
import igLogo from '../assets/instagramlogo.png';
import '../css/footer.css';

class Footer extends Component {
    render() {
        return (
            <>
                <div className='bottombar'>
                    <div className='btmbar-left'>
                        <img src={logoKopi} alt='kopi' className='kopi' />
                        Coffee Shop
                        <p className='textbwh'>Coffee Shop is a store that sells some good meals, and especially coffee. We
                            provide high quality beans.</p>
                        <a><img src={fbLogo} alt='fb' className='fb' /></a>
                        <a><img src={twtLogo} alt='twit' className='twitter' /></a>
                        <a><img src={igLogo} alt='ig' className='instagram' /></a>
                    
                    </div>
                    <div className="btmbar-right">
                        <ul className="product-footer">
                            <li className="title-footer">Product</li>
                            <li>Download</li>
                            <li>Pricing</li>
                            <li>Locations</li>
                            <li>Countries</li>
                            <li>Blog</li>
                        </ul>
                        <ul className="engange-footer">
                            <li className="title-footer">Engange</li>
                            <li>Coffee Shop?</li>
                            <li>FAQ</li>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
                    
            </>
        )
    }
}

export default Footer;