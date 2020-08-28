import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const subject = cart[i];
        total = total + subject.price;
    }

    return (
        <div className="state-container">
            <div className="added-area">
                <h4>Courses Added <FontAwesomeIcon icon={faShoppingBasket} />: {cart.length} </h4>
            </div>
            <div className="total-area">
                <h4>Total price: {total}</h4>
            </div>
        </div>
    );
};

export default Cart;