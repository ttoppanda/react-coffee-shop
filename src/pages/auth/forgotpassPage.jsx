import React, { Component } from 'react';
import logoHeader from '../../assets/smkopi.png';
import background from '../../assets/background.jpg';
import Footer from '../../component/footer';
import '../../css/global.css';
import '../../css/detail-product.css';

class ForgotpassPage extends Component {
    render() {
    return (
        <>
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
            <Footer/>
        </>
    )}
}


export default ForgotpassPage;

