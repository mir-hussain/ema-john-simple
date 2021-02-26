import Product from "../Product/Product";
import "./Shop.css";

import fakeData from "../../fakeData";
import { useState } from "react";

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);

    const handleAddToCart = () => {
        console.log("poop");
    };
    return (
        <div className="shop-container">
            <div className="products-container">
                {products.map((product) => (
                    <Product handleAddToCart={handleAddToCart} product={product}></Product>
                ))}
            </div>
            <div className="cart-container">
                <h1>Order Summery</h1>
            </div>
        </div>
    );
};

export default Shop;
