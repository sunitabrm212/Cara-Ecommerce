import app from './img/pay/app.jpg';
import play from './img/pay/play.jpg';
import pay from './img/pay/pay.png';
import logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const apps = [app, play]

function Footer(){
    return(
        <div className = "footer">
            <div className = "footer-container">
                <div className = "col">
                    <img src = {logo} className = "logo"/>
                    <h4>Contact</h4>
                    <p><strong>Address: </strong> 562 Wellington Road, Street 32, San Francisco</p>
                    <p><strong>Phone: </strong> +01 2222 365</p>
                    <p><strong>Hours: </strong> 10:00 - 18:00, Mon - Sat</p>
                    <div className = "social-media">
                    <h4>Follow us</h4>
                    <div className = "social-icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
                </div>
                <div className = "col"> 
                    <h4>About</h4>
                    <a href = '#'>About Us</a>
                    <a href = '#'>Delivery Information</a>
                    <a href = '#'>Privacy Policy</a>
                    <a href = '#'>Terms & Conditions</a>
                    <a href = '#'>Contact Us</a>
                </div>
                  <div className = "col"> 
                    <h4>My Account</h4>
                    <a href = '#'>Sign In</a>
                    <a href = '#'>View Cart</a>
                    <a href = '#'>My Wishlist</a>
                    <a href = '#'>Track My Order</a>
                    <a href = '#'>Help</a>
                </div>
                <div className = "col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div className = "app-image">
                        {apps.map((app) => (
                            <img src = {app}/>
                        ))}
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src = {pay}/>
                </div>
            </div>
            <div className = 'copyright'>
                <p>© 2025, Cara - Ecommerce Template</p>
            </div>
        </div>
    )
}

export default Footer;