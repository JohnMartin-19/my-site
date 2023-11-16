import React, { useState } from "react";
import {NavLink,Link} from 'react-router-dom'
import './Nav.css';
import {FaBars, FaTimes} from 'react-icons/fa'

function NavBar(){
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click) 

    const[color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll',changeColor)


    return (
        <div>
            <nav class={color ? 'nav nav-bg' : 'nav'} >
                <NavLink to='/' ><h4>JohnMburu</h4></NavLink>
                <ul className={click ? 'nav-menu active':"nav-menu "}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About Me'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/MyStacks'>Tech Stacks</Link>
                    </li>
                    <li>
                        <Link to='/Projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/Contact Me'>Contact Me</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick} >
                    {click ? (
                    <FaTimes size={20} style={{color:'#fff'}}/>
                    ) : (
                    <FaBars size={20} style={{color:'#fff'}}/>
                    )}
                    
                    
                </div>
                
            </nav>
        </div>
    )
}

export default NavBar