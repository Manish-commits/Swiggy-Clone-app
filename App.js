import React from 'react';
import ReactDOM  from 'react-dom/client';
import './app.css';

const Header = () => {
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
        </div>
    );
};

const RestaurantCards = () => {
    return (
        <div className='res-card'>
            <img src='https://imgmedia.lbb.in/media/2020/04/5ea18dee1036c70c9363dacd_1587645934824.jpg' />
            <h3>Starbucks</h3>
            <p>Rating:<b>4.2</b></p>
            <p>North Indian, Snacks, Desserts, Indian Paschim Vihar</p>
        </div>
    );
}
const Body = () => {

    return (
        <div className='body' style={{margin: "12px"}}>
            <div className='search'>
                <input placeholder='search'/>
            </div>
            <div className='res-container'>
                <RestaurantCards />
                <RestaurantCards />
                <RestaurantCards />
                <RestaurantCards />
            </div>
        </div>
    );
}

const AppLayout = () => {

    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)

