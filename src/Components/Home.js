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
import { floor, random } from 'mathjs'
import AOS from 'aos'
import testUtils from 'react-dom/test-utils';

const Home = () => {
    AOS.init();
    const [offsetY, setOffsetY] = useState(0);
    const [test, settest] = useState('helli');
    const [font, setfont] = useState(0);
    const [opacity, setopacity] = useState('lax1')
    const [opacmnt3, setopacmnt3] = useState('ree mnt3 lax1')
    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
        if (offsetY > window.innerHeight-.83*window.innerHeight){
            setopacmnt3('ree mnt3 lax2');
        }
        else if (offsetY < window.innerHeight-.83*window.innerHeight){
            setopacmnt3('ree mnt3 lax1');
        }
        if (offsetY > window.innerHeight-.4*window.innerHeight){
            setopacity('lax2');
        }
        else if (offsetY < window.innerHeight-.4*window.innerHeight){
            setopacity('lax1');
        }
    }
    const fontlist = ["font1", "font2", "font3", "font4", "font5"]
    const changetest = () => {
        if (offsetY > window.innerHeight + .45 * window.innerHeight) {
            settest('HELLO');
        }
        else if (offsetY > window.innerHeight + .4 * window.innerHeight) {
            settest('HELL');
        }
        else if (offsetY > window.innerHeight + .35 * window.innerHeight) {
            settest('HEL');
        }
        else if (offsetY > window.innerHeight + .3 * window.innerHeight) {
            settest('HE');
        }
        else if (offsetY > window.innerHeight + .2 * window.innerHeight) {
            settest('H');
        }
        else if (offsetY > window.innerHeight + .1 * window.innerHeight) {
            settest('');
        }
    }
    useEffect(() => {
        if (test === "HELLO" || test === "HELL" || test === "HEL" || test === "HE" || test === "H") {
            setfont(floor(random() * 5))
        }
    }, [test])
    // window.addEventListener('scroll', handleScroll, { once: true })
    window.addEventListener("scroll", ()=>{handleScroll();changetest()},{ once: true });
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    useEffect(() => {
        window.addEventListener("scroll", changetest);

        return () => window.removeEventListener("scroll", changetest);
    }, []);
    const scrollOne = () => {
        window.scrollTo({
            // top: window.innerHeight + .5 * window.innerHeight,
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }
    return (
        <div className='hoje'>
            <img className='navheader' src={bgbg} alt='head'></img>
            <div className='para' >
                <div className={opacity}>
                    <img className='ree bg' src={bgbg} alt='bg'></img>
                    <img className={opacmnt3} src={mnt3} alt='mnt3'></img>
                    <img className='ree cld--3' src={cld3} alt='cld3' style={{ transform: `translateY(${offsetY * .2}px)` }}></img>
                    <img className='ree mnt--2' src={mnt2} alt='mnt2' style={{ transform: `translateY(-${offsetY * 0}px)` }}></img>
                    <img className='ree mnt--1' src={mnt1} alt='mnt1' style={{ transform: `translateY(-${offsetY * .5}px)` }}></img>
                    <img className='ree cld--2' src={cld2} alt='cld2' style={{ transform: `translateY(-${offsetY * .7}px)` }}></img>
                    <img className='ree cld--1' src={cld1} alt='cld1' style={{ transform: `translateY(-${offsetY * 1}px)` }}></img>
                    <img className='rect cld--1' src={rect} alt='rect' style={{ transform: `translateY(-${offsetY * 1}px)` }}></img>
                    <div className='welcomewrap' style={{ transform: `translateY(-${offsetY * .5}px)` }}>
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
            <div className='new'>
                <p className={fontlist[font]}>{test}</p>
            </div>
            <div data-aos="fade-in" className='content'>
                <p data-aos="fade-in" className='text'>dosiafjoisdjf</p>
            </div>
        </div>

    )
}

export default Home