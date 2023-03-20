import React from "react";
import '../../css/product.css';
import '../../css/global.css';
import logoHeader from '../../assets/smkopi.png';
import searchLogo from '../../assets/product-css/searchlogo.svg';
import chatLogo from '../../assets/product-css/chatlogo.svg';
import profileLogo from '../../assets/product-css/profilelogo.svg';
import promo from '../../assets/product-css/promo-product/product-promo.png';
// import fbLogo from '../../assets/fblogo.png';
// import twtLogo from '../../assets/twitterlogo.png';
// import igLogo from '../../assets/instagramlogo.png';
import DetailProductPage from '../profile/index';
import { NavLink } from "react-router-dom";


const ListProduct = () => {
    return (
        <div>
            <div className="topbar">
                <header className='left-topbar'>
                    <img src={logoHeader} alt='' className='kopi' />
                    <div className=''>Coffee Shop</div>
                </header>
                <div className='mid-topbar'>
                    <ul className='flex gap-5'>
                        <li><NavLink to={DetailProductPage}>Home</NavLink></li>
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
            <div className="m-content-product">
                <div className="flex flex-row justify-center items-center pt-4 pb-4">
                    <div className="flex flex-col h-96 w-56 rounded-2xl product-card-1 justify-center items-center">
                        <div className="flex flex-col justify-center items-center w-full h-4/6 p-6">
                            <img src={promo} alt="" className="rounded-full h-28 m-4" />
                            <div className="text-center product-card-p text-lg">
                                Beff Spaghetti
                            </div>
                            <div className="text-center product-card-p text-lg">
                                20% OFF
                            </div>
                            <div className="text-center product-card-pd m-1 text-xs">
                                Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full h-2/6 border-t-2 border-black border-dashed">
                            <div className="text-center product-card-c text-base">
                                COUPON CODE
                            </div>
                            <div className="text-center product-card-cc text-2xl">
                                FNPR15RG
                            </div>
                            <div className="text-center product-card-cd text-xs">
                                Valid untill October 10th 2020
                            </div>
                        </div>
                    </div>
                    <div className="flex h-80 w-6 rounded-r-2xl product-card-2 justify-center items-center" />
                    <div className="flex h-64 w-6 rounded-r-2xl product-card-3 justify-center items-center" />
                </div>
                <div className="list-product">
                    <div className="product-category" id="product-category">
                        <ul>
                            <li className="pointer active category">Favorite Product</li>
                            <li className="pointer ">Coffee</li>
                            <li className="pointer ">Non Coffee</li>
                            <li className="pointer ">Foods</li>
                            <li className="pointer ">Add-on</li>
                        </ul>
                        <div className="product-listmenu"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListProduct;