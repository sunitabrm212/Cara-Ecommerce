import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import n1 from '../../assets/img/products/n1.jpg';
import n2 from '../../assets/img/products/n2.jpg';
import n3 from '../../assets/img/products/n3.jpg';
import n4 from '../../assets/img/products/n4.jpg';
import n5 from '../../assets/img/products/n5.jpg';
import n6 from '../../assets/img/products/n6.jpg';
import n7 from '../../assets/img/products/n7.jpg';
import n8 from '../../assets/img/products/n8.jpg';



const newArrivals = [
    {img: n1, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: n2, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: n3, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: n4, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: n5, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: n6, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: n7, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: n8, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},

]

function Product2(){
    return(
        <div className = "product2">
            <h1>New Arrivals</h1>
            <p>Summer Collection New Modern Design</p>
            <div className = "product2-container">
                {newArrivals.map((item) => (
                    <div className = "product2-item">
                        <img src = {item.img} />
                        <div className = "product2-desc">
                            <span>{item.brand}</span>
                            <h5>{item.title}</h5>
                             <div className = "ratings">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon icon={faStar} key={i} className = "icon"/>
                                ))}
                             </div>
                            <h4>{item.price}</h4>
                        </div>
                        <a href = '/' className = "cart"><FontAwesomeIcon icon = {faCartShopping}  /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product2;