import React, { useState } from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import useScrollPosition from '@react-hook/window-scroll'


const Navbar = () => {
    const [nbcolor, setnbcolor] = useState('navbarflex')
    const scrollY = useScrollPosition(60 /*fps*/)
    const nb = () => {
        if (scrollY > window.innerHeight) {
            setnbcolor('navbarflex2')
        }
        else if (window.pageYOffset < window.innerHeight) {
            setnbcolor('navbarflex')
        }
    }
    return (
        <div className={nbcolor} onScroll={nb}>
            <Link to='/About' className='flez 1'> About </Link>
            <Link to='/Page2' className='flez 2'> Page2 </Link>
            <Link to='/Page3' className='flez 3'> Page3 </Link>
            <button onClick={nb}>ddddddd</button>
            <p>{scrollY}</p>
        </div>
    )
}
export default Navbar;