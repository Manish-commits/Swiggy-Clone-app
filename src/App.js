import React from 'react';
import ReactDOM  from 'react-dom/client';
import '../app.css';
import Header from './components/Header';
import { createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';

const RestaurantCards = (props) => {
    return (
        <div className='res-card'>
            <img src='https://imgmedia.lbb.in/media/2020/04/5ea18dee1036c70c9363dacd_1587645934824.jpg' />
            <h3>{props.resName}</h3>
            <p>Rating:<b>{props.rating}</b></p>
            <p>{props.cuisines}</p>
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
                <RestaurantCards resName="Starbucks" rating="4.2" cuisines="North Indian, Snacks, Desserts, Indian Paschim Vihar"/>
                <RestaurantCards resName="KFC" rating="4.1" cuisines="Snacks, Desserts"/>
                <RestaurantCards resName="McD" rating="4.1" cuisines="Snacks, Desserts"/>
                <RestaurantCards resName="Dadas Roll" rating="4.1" cuisines="Snacks, Desserts"/>
                <RestaurantCards resName="Aslam Chicken" rating="4.0" cuisines="Snacks, Desserts"/>
                <RestaurantCards />
                <RestaurantCards />
                <RestaurantCards />
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
            
        </div>
    );
};

const route = createBrowserRouter([
    {
        path: "/",
        element: <Body />
    },
    {
        path: "/login",
        element: <Login />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)

