import { useState } from 'react';
import logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
            <header className = 'navBar'>
                <img src = {logo}/>
                <ul id = 'navItems' className = {menuOpen ? 'show': ''}>
                    <FontAwesomeIcon icon = {faXmark} id = "close" onClick = {() => setMenuOpen(false)}/>
                    <li><a href = '/' className = "active">Home</a></li>
                    <li><a href = '/'>Shop</a></li>
                    <li><a href = '/'>Blog</a></li>
                    <li><a href = '/'>About</a></li>
                    <li><a href = '/'>Contact</a></li>
                    <li><a href = '/'><FontAwesomeIcon icon = {faBagShopping} /></a></li>
                </ul>
                <div className = "hamburger">
                    <FontAwesomeIcon icon = {faBars} id = "bar" onClick = {() => setMenuOpen(true)}/>
                </div>
            </header>
    )
}

export default Nav;