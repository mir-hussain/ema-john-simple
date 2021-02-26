import React from "react";

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0 );
    let shipping;

    if (total === 0) {
        shipping = 0;
    } else if (total > 150 ) {
        shipping = 0; 
    } else if (total < 150) {
        shipping = 15;
    }

    const tax = total * 0.25;

    const grandTotal = total + shipping + tax;
    const toFixNumber = (number) => {
       return Number(number.toFixed(2))
    }
    return (
        <div>
            <h1>Order Summery</h1>
            <p>Items selected: {cart.length}</p>
            <p>Items: ${toFixNumber(total)}</p>
            <p>Shipping & Handling: ${toFixNumber(shipping)}</p>
            <p>Total before tax: ${ toFixNumber(total + shipping)}</p>
            <p>Estimated Tax: ${toFixNumber(tax)} </p>
            <h2>Grand Total: ${toFixNumber(grandTotal)}</h2>
        </div>
    );
};

export default Cart;
