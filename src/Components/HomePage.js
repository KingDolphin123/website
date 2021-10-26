import React from 'react';
import '../css/App.css';
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import Navbar from "./Navbar";


const HomePage = () => {  
    return (
        <div className='app'>
            <Navbar />
            <div className="header">
                <HomeHeader />
            </div>
            <div className='body'>
                <HomeBody />
            </div>
        </div>
    )
}
export default HomePage;