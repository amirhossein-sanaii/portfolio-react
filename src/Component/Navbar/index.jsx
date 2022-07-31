import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navbarMenu } from './config'

// icon
import { FaReact, FaBars } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
// scss
import './style.scss'

const Navbar = () => {

    const [click, setclick] = useState(false)
    const handelClick = () => {
        setclick(!click)
    }
    const handelClickclose = () =>{
        setclick(false)
    }
    
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <NavLink to={"/"} className='navbar__container__logo'>
                        <FaReact size={30} />
                    </NavLink>
                    <ul className={click ? 'navbar__container__menu active' : 'navbar__container__menu'}>
                        {
                            navbarMenu.map((item, index) => {
                                return (
                                    <li onClick={handelClickclose} key={index} className='navbar__container__menu__item'>
                                        <NavLink className={({ isActive }) => (isActive ? 'navbar__container__menu__item__links__active' : 'navbar__container__menu__item__links')} to={item.to}>
                                            {item.labale}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='nav-icon' onClick={handelClick}>
                        {click ? <HiX size={30} /> : <FaBars size={30} />}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar