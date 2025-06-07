import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import fp1 from './img/products/fp1.jpg';
import fp2 from './img/products/fp2.jpg';
import fp3 from './img/products/fp3.jpg';
import fp4 from './img/products/fp4.jpg';
import fp5 from './img/products/fp5.jpg';
import fp6 from './img/products/fp6.jpg';
import fp7 from './img/products/fp7.jpg';
import fp8 from './img/products/fp8.jpg';

const featuredProducts = [
    {img: fp1, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: fp2, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: fp3, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: fp4, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: fp5, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: fp6, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: fp7, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
    {img: fp8, brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78"},
]

function Product1(){
    return(
        <div className = "product1">
            <h1>Featured Products</h1>
            <p>Summer Collection New Modern Design</p>
                <div className = "product">
                    {featuredProducts.map((product, index) => (
                    <div className = "product-item">
                         <img src = {product.img} alt = {product.title}/>
                    <div className = "product-desc">
                        <span>{product.brand}</span>
                        <h5>{product.title}</h5>
                        <div className = "ratings">
                             {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon icon={faStar} key={i} className = "icon"/>
                             ))}
                        </div>
                        <h4>{product.price}</h4>
                    </div>
                    <a href = '/' className = "cart"><FontAwesomeIcon icon = {faCartShopping}  /></a>
                    </div>   
                     ))}
                </div>
           
        </div>
    )
}

export default Product1;