import React, { useState, useEffect } from 'react';
import "../css/Home.css";
import mnt1 from '../css/mon1.png'
import mnt3 from '../css/mon2.png'
import mnt2 from '../css/mon3.png'
import cld1 from '../css/cld1.png'
import cld2 from '../css/cld2.png'
import cld3 from '../css/cld3.png'
import rect from '../css/rect.png'
import bgbg from '../css/bg.png'
import arrow from '../css/arr.png';


const Home = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [test, settest] = useState('helli')
    const [offsetfortext1, setoffsetfortext1] = useState(0);
    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    }
    const changetest = () => {
        setoffsetfortext1((window.pageYOffset)-(window.innerHeight+.5*window.innerHeight));
        // if (offsetY > window.innerHeight + .5 * window.innerHeight){
        //     settest('hello');
        // }
        // else if (offsetY < window.innerHeight + .5 * window.innerHeight){
        //     settest('helli');
        // }
    }
    window.addEventListener('scroll', changetest, {once:true})
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollOne = () => {
        window.scrollTo({
            top: window.innerHeight + .5 * window.innerHeight,
            behavior: 'smooth'
        })
    }
    return (
        <div className='hoje'>
            <img className = 'navheader' src={bgbg} alt='head'></img>
            <div className='para' >
                <img className='ree bg' src={bgbg} alt='bg'></img>
                <img className='ree mnt--3' src={mnt3} alt='mnt3' style={{ transition: `.0s`, transform: `translateY(${offsetY * .4}px)` }}></img>
                <img className='ree cld--3' src={cld3} alt='cld3' style={{ transition: `.0s`, transform: `translateY(${offsetY * .6}px)` }}></img>
                <img className='ree mnt--2' src={mnt2} alt='mnt2' style={{ transition: `.0s`, transform: `translateY(${offsetY * .1}px)` }}></img>
                <img className='ree mnt--1' src={mnt1} alt='mnt1' style={{ transition: `.0s`, transform: `translateY(-${offsetY * .4}px)` }}></img>
                <img className='ree cld--2' src={cld2} alt='cld2' style={{ transition: `.0s`, transform: `translateY(-${offsetY * .5}px)` }}></img>
                <img className='ree cld--1' src={cld1} alt='cld1' style={{ transition: `.0s`, transform: `translateY(-${offsetY * .6}px)` }}></img>
                <img className='rect cld--1' src={rect} alt='rect' style={{ transition: `.0s`, transform: `translateY(-${offsetY * .6}px)` }}></img>
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
            <div className = 'new' style={{transform: `translateX(-${offsetfortext1 * 10}px)` }}>
                <p>{test}</p>
            </div>
        </div>

    )
}

export default Home