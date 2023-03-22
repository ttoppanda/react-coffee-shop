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
            <div className='flex'>
                <div className='flex-1'>
                    <img src={background} alt='background' className='w-screen' />
                </div>
                <div className='flex-1'>
                    <div className='flex justify-center text-sm font-bold mt-[100px]'>
                            <img src={logoHeader} alt='kopi' className='w-[30px] align-middle' />
                            <div className='pointer-events-auto flex items-center'>Coffee Shop</div>
                    </div>

                    <div className='mt-[50px] mb-[100px] px-[150px]'>
                        <p className='flex justify-center font-bold mb-[10px]'>Forgot Your Password?</p>
                        <p className='flex justify-center'>Dont Worry We Got Your Back!</p>
                        <form action="#">
                            <input type="email" placeholder="Enter your email address" id="email" required />
                            <br></br>
                            <button type="button" className="bg-[#FFBA33] text-center text-lg text-bold text-[#6A4029] pointer-events-auto border-none w-full p-[15px] rounded-lg mt-[25px]">Send</button>
                            <button className='bg-[#6A4029] text-center text-lg text-bold text-white pointer-events-auto border-none w-full p-[15px] rounded-lg mt-[25px]'>Sign Up Here</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )}
}


export default ForgotpassPage;

