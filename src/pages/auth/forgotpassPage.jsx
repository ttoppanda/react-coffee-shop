import React from 'react';
import logoHeader from '../../assets/smkopi.png';
// import searchLogo from '../../assets/product-css/searchlogo.svg';
// import chatLogo from '../../assets/product-css/chatlogo.svg';
// import profileLogo from '../../assets/product-css/profilelogo.svg';
import fbLogo from '../../assets/fblogo.png';
import twtLogo from '../../assets/twitterlogo.png';
import igLogo from '../../assets/instagramlogo.png';
// import googleLogo from '../../assets/google.png';
import background from '../../assets/background.jpg';
import '../../css/global.css';
import '../../css/detail-product.css';

const ForgotpassPage = () => {
    return (
        <div>
            {/* <div className="topbar">
                <header className='left-topbar'>
                    <img src={logoHeader} alt='' className='h-10 px-5 py-1' />
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
            </div> */}
            <div className='flex-container'>
                <div className='left'>
                    <img src={background} alt='background' className='cover' />
                </div>
                <div className='right'>
                    <div className='r-header-forgot'>
                            <img src={logoHeader} alt='kopi' className='kopi' />
                            <div className='pointer kopititle'>Coffee Shop</div>
                    </div>

                    <div className='right-content'>
                        <p className='header-forgot'>Forgot Your Password?</p>
                        <p className='subtitle-forgot'>Dont Worry We Got Your Back!</p>
                        <form action="#">
                            <input type="email" placeholder="Enter your email address" id="email" required />
                            <br></br>
                            <button type="button" className="login">Send</button>
                            <button className='loginhere'>Sign Up Here</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='bottombar-detail'>
                <div className='one-footer'>
                    <img src={logoHeader} alt='kopi' className='kopi' />
                    <div>Coffee Shop</div>
                    <p className='textbwh'>Coffee Shop is a store that sells some good meals, and especially coffee. We
                        provide high quality beans.</p>
                    <a><img src={fbLogo} alt='fb' className='fb' /></a>
                    <a><img src={twtLogo} alt='twit' className='twitter' /></a>
                    <a><img src={igLogo} alt='ig' className='instagram' /></a>
                </div>
                <div className="two-footer">
                    <ul className="left-profilefooter">
                        <li className="title-footer">Product</li>
                        <li>Download</li>
                        <li>Pricing</li>
                        <li>Locations</li>
                        <li>Countries</li>
                        <li>Blog</li>
                    </ul>
                    <ul className="right-engangefooter">
                        <li className="title-footer">Engange</li>
                        <li>Coffee Shop?</li>
                        <li>FAQ</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default ForgotpassPage;

