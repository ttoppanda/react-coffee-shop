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
                <div class="promo-product">
                    <p class="promo-title">Promo For You</p>
                    <p class="promo-text">Coupons will be updated every weeks. Check them out.</p>
                    <div class="mobileresponsive">
                        <div class="promo-card-parent">
                            <div class="card promo-one" id="promo-one">
                                <img src={promo} alt=""/>
                                    <p class="promo-menutitle" id="promo-title"></p>
                                    <p class="menutitle-text" id="coupon_desc"></p>
                                    <p class="dotted"></p>
                                    <p class="menutitle-text">COUPON CODE</p>
                                    <p class="promo-couponcode" id="coupon_code"></p>
                                    <p class="menutitle-text" id="coupon_expired"></p>
                            </div>

                            <div class="card promo-two">
                            </div>
                            <div class="card promo-three">
                            </div>
                        </div>
                        <div class="termsncondi">
                            <div class="termsncondimobile">
                                <p class="promo-tandc">Terms and Condition</p>
                                <p class="text-promotandc">1. You can only apply 1 coupon per day</p>
                                <p class="text-promotandc">2. It only for dine in</p>
                                <p class="text-promotandc">3. Buy 1 get 1 only for new user</p>
                                <p class="text-promotandc">4. Should make member card to apply coupon</p>
                            </div>
                            <button class="pointer promo-apply">Apply Coupon</button>
                        </div>
                    </div>
                </div>
                <div class="list-product">
                    <div class="product-category" id="product-category">
                        <ul>
                            <li class="pointer active category">Favorite Product</li>
                            <li class="pointer ">Coffee</li>
                            <li class="pointer ">Non Coffee</li>
                            <li class="pointer ">Foods</li>
                            <li class="pointer ">Add-on</li>
                        </ul>

                        <div id="product-listmenu" class="product-listmenu">


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListProduct;