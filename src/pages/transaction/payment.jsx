import React, { Component } from "react";
// import Card from '../assets/payment/cardLogo.svg';
// import Bank from '../assets/payment/bankLogo.svg';
// import Ship from '../assets/payment/shipLogo.svg';
// import bgPayment from '../assets/payment/bgPayment.png';
import itemsOne from '../../assets/payment/items1.png';
import itemsTwo from '../../assets/payment/items2.png';
import '../../css/payment.css';
import Header from '../../component/header';
import Footer from "../../component/footer";

class Payment extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="parent">
                    <div className="left">
                        <p className="title">
                            Checkout your item now!
                        </p>
                        <div className="card order-summary">
                            <p className="title-card">Order Summary</p>
                            <div className="itemsParent">
                                <img src={itemsOne} alt="itemsOne" className="items" />
                                <p>Hazelnut Latte x 1 Regular</p>
                                <p>IDR 24.0</p>
                            </div>
                            <div className="itemsParent">
                            <img src={itemsTwo} alt="itemsTwo" className="items" />
                            <p>Chicken Fire Wings x 2</p>
                            <p>IDR 30.0</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">

                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Payment;