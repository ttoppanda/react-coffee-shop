import React, { Component } from "react";
import '../../css/product.css';
import '../../css/global.css';
import promo from '../../assets/product-css/promo-product/product-promo.png';
import Header from '../../component/header';


class ListProduct extends Component {
    render(){
    return (
        <>
        <Header/>
            <div className="m-content-product">
                <div className="promo-product">
                    <p className="promo-title">Promo For You</p>
                    <p className="promo-text">Coupons will be updated every weeks. Check them out.</p>
                    <div className="mobileresponsive">
                        <div className="promo-card-parent">
                            <div className="card promo-one" id="promo-one">
                                <img src={promo} alt=""/>
                                    <p className="promo-menutitle" id="promo-title"></p>
                                    <p className="menutitle-text" id="coupon_desc"></p>
                                    <p className="dotted"></p>
                                    <p className="menutitle-text">COUPON CODE</p>
                                    <p className="promo-couponcode" id="coupon_code"></p>
                                    <p className="menutitle-text" id="coupon_expired"></p>
                            </div>

                            <div className="card promo-two">
                            </div>
                            <div className="card promo-three">
                            </div>
                        </div>
                        <div className="termsncondi">
                            <div className="termsncondimobile">
                                <p className="promo-tandc">Terms and Condition</p>
                                <p className="text-promotandc">1. You can only apply 1 coupon per day</p>
                                <p className="text-promotandc">2. It only for dine in</p>
                                <p className="text-promotandc">3. Buy 1 get 1 only for new user</p>
                                <p className="text-promotandc">4. Should make member card to apply coupon</p>
                            </div>
                            <button className="pointer promo-apply">Apply Coupon</button>
                        </div>
                    </div>
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

                        <div id="product-listmenu" className="product-listmenu">


                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}
}
export default ListProduct;