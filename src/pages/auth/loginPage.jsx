import React, { Component } from 'react';
import logoHeader from '../../assets/smkopi.png';
import googleLogo from '../../assets/google.png';
import background from '../../assets/background.jpg';
import '../../css/global.css';
import Footer from '../../component/footer';

class LoginPage extends Component {
    render (){
    return (
        <>
            <div className='flex'>
                <div className='flex-1'>
                    <img src={background} alt='background' className='w-screen' />
                </div>
                <div className='flex-1'>
                    <div className='text-sm text-[#6A4029] text-bold mt-[10px] mb-[10px] p-[5px]'>
                        <div className='flex gap-3 items-center'>
                            <img src={logoHeader} alt='kopi' className='kopi' />
                            <div className='pointer-events-auto max-w-[30px] algin-middle'>Coffee Shop</div>
                            <div className='pointer-events-auto float-right fs-lg no-underline text-[#6A4029]'>Sign Up</div>
                        </div>
                    </div>

                    <div className='mt-[50px] mb-[100px] px-[150px]'>
                        <form action="#">
                            <p className='font-bold'>Email Address : </p>
                            <input type="email" placeholder='enter your email' id='email' name='email' />
                            <span id='resultEmail'></span>
                            <p className='font-bold'>Password : </p>
                            <input type="password" id='password' placeholder='enter your password' />
                            <span id='resultPassword'></span>
                            <div className='pointer-events-auto no-underline text-[#6A4029] font-bold'>Forgot Password?</div>
                            <button type="submit" className='bg-[#FFBA33] text-center font-sm font-bold text-[#6A4029] pointer-events-auto border-none w-full p-[15px] rounded-md mt-[20px] mb-[30px]'>Login</button>
                            <button type="submit" className='bg-white shadow-lg text-center text-black pointer-events-auto w-full p-[15px] rounded-md font-bold mb-[30px] px-[24px]'> <img src={googleLogo} alt='google' className='inline-flex align-middle max-w-[30px] pr-[10px]' /> Sign Up With Google</button>
                            <div className='w-full flex color-gray mb-[50px]'>
                                <div className='flex-1 border-b-2 border-solid border-gray w-[150px] mb-[10px]'></div>&nbsp;
                                <p>Already have an account?</p>&nbsp;
                                <div className='flex-1 border-b-2 border-solid border-gray w-[150px] mb-[10px]'></div>
                            </div>
                            <button className='bg-[#6A4029] text-center font-md font-bold text-white pointer-events-auto border-none w-full p-[15px] rounded-md mt-[10px] mb-[30px]'>Sign Up Here</button>
                        </form>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )}
}


export default LoginPage;

