import logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function Nav(){
    return (
            <header className = 'navBar'>
                <img src = {logo}/>
                <ul className = 'navItems'>
                    <li><a href = '/' className = "active">Home</a></li>
                    <li><a href = '/'>Shop</a></li>
                    <li><a href = '/'>Blog</a></li>
                    <li><a href = '/'>About</a></li>
                    <li><a href = '/'>Contact</a></li>
                    <li><a href = '/'><FontAwesomeIcon icon = {faBagShopping} /></a></li>
                </ul>
            </header>
    )
}

export default Nav;