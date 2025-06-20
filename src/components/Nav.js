import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
            <header className = 'navBar'>
                <img src = {logo}/>
                <ul id = 'navItems' className = {menuOpen ? 'show': ''}>
                    <FontAwesomeIcon icon = {faXmark} id = "close" onClick = {() => setMenuOpen(false)}/>
                    <li><NavLink to = "/" className = {({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                    <li><NavLink to = "/shop" className = {({ isActive }) => (isActive ? 'active' : '')}>Shop</NavLink></li>
                    <li><NavLink to = "/blog" className = {({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink></li>
                    <li><NavLink to = "/about" className = {({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
                    <li><NavLink to = "/contact" className = {({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
                    <li><NavLink to = '*'><FontAwesomeIcon icon = {faBagShopping} /></NavLink></li>
                </ul>
                <div className = "hamburger">
                    <FontAwesomeIcon icon = {faBars} id = "bar" onClick = {() => setMenuOpen(true)}/>
                </div>
            </header>
    )
}

export default Nav;