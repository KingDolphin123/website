import React from "react";
import '../css/HomeHeader.css';
import arrow from '../css/arraw.png';


const Header = () => {
    const scrollOne = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }
    return (
        <div className='headerpage'>
            <div className="Welcome">
                <p className="letter W">W</p>
                <p className="letter E">E</p>
                <p className="letter L">L</p>
                <p className="letter C">C</p>
                <p className="letter O">O</p>
                <p className="letter M">M</p>
                <p className="letter E2">E</p>
            </div>
            <input className="downarrow" type="image" src={arrow} alt='arrowdown' onClick={scrollOne} />
        </div>
    )
}

export default Header;
