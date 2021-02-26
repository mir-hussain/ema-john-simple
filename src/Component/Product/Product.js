import React from "react";
import './Product.css'

const Product = (props) => {
    console.log(props);
    const { name, price, img } = props.product;
    return (
        <div className="product-container">
            <div className="product-image">
                <img src={img}/>
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default Product;
