import React, { useState, useEffect } from 'react';
import "../css/AboutPage.css";
import mnt1 from '../css/mon1.png'
import mnt3 from '../css/mon2.png'
import mnt2 from '../css/mon3.png'
import cld1 from '../css/cld1.png'
import cld2 from '../css/cld2.png'
import cld3 from '../css/cld3.png'
import rect from '../css/rect.png'
import bgbg from '../css/bg.png'
import arrow from '../css/arraw.png';


const Para = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollOne = () => {
        window.scrollTo({
            top: window.innerHeight + .29 * window.innerHeight,
            behavior: 'smooth'
        })
    }
    return (
        <div className='hoje'>
            <div className='para' >
                <img className='ree' src={bgbg} alt='bg' style={{ transition: `.0s`, transform: `translateY(-${offsetY * 0.0}px)` }}></img>
                <img className='ree' src={mnt3} alt='mnt3' style={{ transition: `.0s`, transform: `translateY(${offsetY * .4}px)` }}></img>
                <img className='ree cld--1' src={cld3} alt='cld3' style={{ transition: `.0s`, transform: `translateY(${offsetY * .6}px)` }}></img>
                <img className='ree' src={mnt2} alt='mnt2' style={{ transition: `.0s`, transform: `translateY(${offsetY * .1}px)` }}></img>
                <img className='ree' src={mnt1} alt='mnt1' style={{ transition: `.0s`, transform: `translateY(-${offsetY * .4}px)` }}></img>
                <img className='ree cld--2' src={cld2} alt='cld2' style={{ transition: `.0s`, transform: `translateY(-${offsetY * .5}px)` }}></img>
                <img className='ree' src={cld1} alt='cld1' style={{ transition: `.0s`, transform: `translateY(-${offsetY * .6}px)` }}></img>
                <img className='rect' src={rect} alt='rect' style={{ transition: `.0s`, transform: `translateY(-${offsetY * .6}px)` }}></img>
                <div className='welcomewrap' style={{ transition: `.0s`, transform: `translateY(-${offsetY * .1}px)` }}>
                    <div className="Welcome" >
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
            </div>
        </div>

    )
}

export default Para