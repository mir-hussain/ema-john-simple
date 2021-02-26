import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img id="logo" src={logo} alt="company logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="/shop">Shope</a></li>
                    <li><a href="/order-review">Order Review</a></li>
                    <li><a href="/manage-inventory">Manage Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
