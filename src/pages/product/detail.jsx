import React from "react";
import '../../css/product.css';
import '../../css/global.css';
import '../../css/detail-product.css';
import logoHeader from '../../assets/smkopi.png';
import searchLogo from '../../assets/product-css/searchlogo.svg';
import chatLogo from '../../assets/product-css/chatlogo.svg';
import profileLogo from '../../assets/product-css/profilelogo.svg';
import ColdBrew from '../../assets/product-css/list-product-img/coldbrew.png';
// import fbLogo from '../../assets/fblogo.png';
// import twtLogo from '../../assets/twitterlogo.png';
// import igLogo from '../../assets/instagramlogo.png';


const DetailProduct = () => {
    return (
        <div>
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
            <div className="content-detail">
            <p className="content-title">Favorite & Promo<b>Cold Brew</b></p>
    <div className="content-top">
        <div className="coldbrew">
            <img src={ColdBrew} alt="ColdBrew"/>
        </div>
        <div className="descproduct">
            <p className="product-title">COLD BREW</p>
            <p className="product-text">Cold brewing is a method of brewing that
                combines ground coffee and cool water and uses time instead of
                heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
            </p>
            <p className="product-text">Delivery only on <b>Monday to friday</b> at <b>1 - 7 pm</b></p>

        </div>
    </div>
    <div className="delivery-time">
        <div className="delivery-card">
            <p className="delivery-title">Delivery and Time</p>
            <div className="btn-delivery">
                <button className="selected cursor btn-dlv">Dine In</button>
                <button className="cursor btn-dlv">Door Delivery</button>
                <button className="cursor btn-dlv">Pick Up</button>
            </div>
            <div className="now">
                <p className="now-text">Now</p>
                <button className="selected cursor btn-dlv">Yes</button>
                <button className="cursor btn-dlv">No</button>
            </div>
            <div className="set-time">
                <p className="set">Set Time</p>
                <input type="text" className="resertime" placeholder="Enter time for reservation" />
            </div>
        </div>
        <div className="right-detail">
            <div className="qtyprice">
                <div className="qty-info">
                    <form>
                        <div className="value-btn" id="decrease" value="Decrease Value">-
                        </div>
                        <input type="number" id="number" value="0" />
                        <div className="value-btn" id="increase" value="Increase Value">+
                        </div>
                    </form>
                </div>
                <div className="detail-price">
                    <p>IDR 35.000</p>
                </div>
            </div>
            <div className="button-trans">
                <button className="addtocart">Add to Cart</button>
                <button className="askastaff">Ask a Staff</button>
            </div>
        </div>
    </div>
    <div className="checkout-container">
        <div className="size">
            <p className="size-title">Choose a size</p>
            <div className="circleyellow">
                <div className="pointer rcup"></div>
                <div className="pointer lcup"></div>
                <div className="pointer xlcup"></div>
            </div>
        </div>
        <div className="checkout">
            <div className="coldbrewimg">
            </div>
            <div className="szcup">
                <p className="coldbrew-title">COLD BREW</p>
                <p className="sizecup">x1 (Large)</p>
                <p className="sizecup">x1 (Regular)</p>
            </div>
            <div className="co-circle">
                <p className="checkout-text">Checkout</p>
                <div className="co-btn"></div>
            </div>
        </div>
    </div>
            </div>

        </div>
    )
}

export default DetailProduct;