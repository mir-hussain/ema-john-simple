import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
    console.log(props);
    const { name, price, img, seller, stock } = props.product;
    return (
        <div className="product-container">
            <div className="product-image-container">
                <img src={img} alt="product" />
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <h3 id="price">Price: ${price}</h3>
                <p>
                    <small>By: {seller}</small>
                </p>
                <p>Quantity: {stock}</p>
                <button onClick={props.handleAddToCart} id="add-to-cart-btn">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
