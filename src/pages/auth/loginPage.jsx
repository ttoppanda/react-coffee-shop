import React, { Component } from 'react';
import logoHeader from '../../assets/smkopi.png';
import googleLogo from '../../assets/google.png';
import background from '../../assets/background.jpg';
import '../../css/global.css';

class LoginPage extends Component {
    render (){
    return (
        <>
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

        </>
    )}
}


export default LoginPage;

