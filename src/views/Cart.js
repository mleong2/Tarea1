import React, {useContext} from 'react';
import '../styles/styles.css';
import '../styles/bootstrap.min.css';
import ilia from '../img/ilia2.jpg';
import {Makeup} from "../components/Makeup";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Menu} from "../components/Menu";
import {MenuCart} from "../components/MenuCart";
import {ProductCart} from "../components/ProductCart";
import {Coupons} from "../components/Coupons";
import {TotalCart} from "../components/TotalCart";
import {Categories} from "../components/Categories";
import {MakeupContext} from "../context/MakeupContext";

export const Cart = () => {


    return (
        <div>

            <Menu/>
            <MenuCart/>
            <ProductCart/>
            <Coupons/>
            <TotalCart/>




        </div>
    );
}