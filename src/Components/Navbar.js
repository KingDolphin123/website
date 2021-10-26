import React, { useState} from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import useScrollPosition from '@react-hook/window-scroll'


const Navbar = () => {
    const [nbcolor, setnbcolor] = useState('navbarflex')
    const [elcolor, setelcolor] = useState('flez')
    const scrollY = useScrollPosition(60)
    const nb = () => {
        if (scrollY >= window.innerHeight - 10) {
            setnbcolor('navbarflex2')
            setelcolor('flec')
        }
        else if (scrollY <= window.innerHeight - 10) {
            setnbcolor('navbarflex3')
            setelcolor('flez')
        }
    }
    window.addEventListener('scroll', nb)
    return (
        <div className={nbcolor}>
            <Link to='/About' className={elcolor}> About </Link>
            <Link to='/Page2' className={elcolor}> Page2 </Link>
            <Link to='/Page3' className={elcolor}> Page3 </Link>
        </div>
    )
}
export default Navbar;