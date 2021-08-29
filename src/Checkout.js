import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" 
                src="https://disruptiveadvertising.com/static/c653234a6e43c8c1c2c33cb2ac5e4477/7f757/Screen-Shot-2018-10-29-at-11.50.03-AM.png" 
                alt="" 
                />
                <div>
                    <h2 className="checkout_title">Your shopping basket.</h2>
                    {basket.map(item => (
                     <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                    />
                      ))}
                </div>
            </div>
            <div className="checkout_right">
            <Subtotal/>
            <h2>Subtotal will go here.</h2>

            </div>
        </div>
    );
}

export default Checkout;