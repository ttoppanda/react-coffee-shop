import React from 'react';
import logoHeader from '../../assets/smkopi.png';
// import searchLogo from '../../assets/product-css/searchlogo.svg';
// import chatLogo from '../../assets/product-css/chatlogo.svg';
// import profileLogo from '../../assets/product-css/profilelogo.svg';
import fbLogo from '../../assets/fblogo.png';
import twtLogo from '../../assets/twitterlogo.png';
import igLogo from '../../assets/instagramlogo.png';
import googleLogo from '../../assets/google.png';
import background from '../../assets/background.jpg';
import '../../css/global.css';
import '../../css/detail-product.css';

const LoginPage = () => {
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
                    <div className='r-header-index'>
                        <div className='headTitle'>
                            <img src={logoHeader} alt='kopi' className='kopi' />
                            <div className='pointer kopititle'>Coffee Shop</div>
                            <div className='pointer signup'>Sign Up</div>
                        </div>
                    </div>

                    <div className='right-content'>
                        <form action="#">
                            <p className='formtxt'>Email Address : </p>
                            <input type="email" placeholder='enter your email' id='email' name='email' />
                            <span id='resultEmail'></span>
                            <p className='formtxt'>Password : </p>
                            <input type="password" id='password' placeholder='enter your password' />
                            <span id='resultPassword'></span>
                            <div className='pointer forgotpass'>Forgot Password?</div>
                            <br></br>
                            <br></br>
                            <button type="submit" className='login'>Login</button>
                            <br></br>
                            <br></br>
                            <button type="submit" className='google'> <img src={googleLogo} alt='google' className='imggoogle' /> Sign Up With Google</button>
                            <br></br>
                            <br></br>
                            <div className='underline'>
                                <div className='border-left'></div>&nbsp;
                                <p>Already have an account?</p>&nbsp;
                                <div className='border-right'></div>
                            </div>
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


export default LoginPage;

