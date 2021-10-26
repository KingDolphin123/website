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
                <p className="letter E">e</p>
                <p className="letter L">l</p>
                <p className="letter C">c</p>
                <p className="letter O">o</p>
                <p className="letter M">m</p>
                <p className="letter E2">e</p>
            </div>
            <input className="downarrow" type="image" src={arrow} alt='arrowdown' onClick={scrollOne} />
        </div>
    )
}

export default Header;
