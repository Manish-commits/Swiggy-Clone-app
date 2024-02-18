import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [a, setA] = useState("");
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://entrackr.com/storage/2023/01/Zomato-Swiggy.jpg'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div>
                {/* <Link to="login">Login</Link> */}
                
            </div>
        </div>
    );
}

export default Header;