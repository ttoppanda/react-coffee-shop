import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import LoginPage from "../pages/auth/loginPage";
import SignupPage from "../pages/auth/signupPage";
import ForgotpassPage from "../pages/auth/forgotpassPage";
import ProductPage from "../pages/product";
import DetailProductPage from '../pages/product/detail';
import ProfilePage from '../pages/profile/index';
import PaymentPage from '../pages/transaction/payment';

// const pool = require('../helpers/postgre')

const router = createBrowserRouter([
    {
        path: "/",
        element: <App name="Fazztrack" age={17} aria-required href={"https://reactjs.org"} />,
    },
    {
        path: "/login",
        element: <LoginPage name="Fazztrack" age={17} aria-required href={"https://reactjs.org"} />,
    },
    {
        path: "/signup",
        element: <SignupPage/>,
    },
    {
        path: "/forgotpass",
        element: <ForgotpassPage/>,
    },
    {
        path: "/product",
        element: <ProductPage/>,
    },
    {
        path: "/detailproduct",
        element: <DetailProductPage/>,
    },
    {
        path: "/profile",
        element: <ProfilePage/>,
    },
    {
        path: "/payment",
        element: <PaymentPage/>,
    },
]);

export default router;
