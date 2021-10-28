import React, { useState, useEffect } from 'react';
import "../css/AboutPage.css";
import mnt1 from '../css/mnt1.png'
import mnt2 from '../css/mnt2.png'
import mnt3 from '../css/mnt3.png'
import cld1 from '../css/cld1.png'
import cld2 from '../css/cld2.png'
import cld3 from '../css/cld3.png'



const Para = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='para'>
            <img className='ree pa' src={mnt3} alt='mnt3' style={{ transition: `.35s`, transform: `translateY(-${offsetY * 0.5}px)` }}></img>
            <img className='ree' src={cld3} alt='cld3' style={{ transition: `.35s`, transform: `translateY(-${offsetY * 0.7}px)` }}></img>
            <img className='ree' src={mnt2} alt='mnt2' style={{ transition: `.35s`, transform: `translateY(-${offsetY * 0.9}px)` }}></img>
            <img className='ree' src={mnt1} alt='mnt1' style={{ transition: `.35s`, transform: `translateY(-${offsetY * 1.1}px)` }}></img>
            <img className='ree' src={cld2} alt='cld2' style={{ transition: `.35s`, transform: `translateY(-${offsetY * 1.3}px)` }}></img>
            <img className='ree' src={cld1} alt='cld1' style={{ transition: `.35s`, transform: `translateY(-${offsetY * 1.5}px)` }}></img>
        </div>
    )
}

export default Para