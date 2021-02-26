import React, { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

import fakeData from '../../fakeData';

const Shop = () => {
    const products = fakeData.slice(0,10);
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>cart will go here</h1>
            </div>
        </div>
    );
};

export default Shop;