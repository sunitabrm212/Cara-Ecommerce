import f1 from '../../assets/img/features/f1.png';
import f2 from '../../assets/img/features/f2.png';
import f3 from '../../assets/img/features/f3.png';
import f4 from '../../assets/img/features/f4.png';
import f5 from '../../assets/img/features/f5.png';
import f6 from '../../assets/img/features/f6.png';

const features = [
    {img: f1, title: 'Free Shipping'},
    {img: f2, title: 'Online Order'},
    {img: f3, title: 'Save Money'},
    {img: f4, title: 'Promotions'},
    {img: f5, title: 'Happy Sell'},
    {img: f6, title: 'F24/7 Support'},
]

function Feature(){
    return(
        <div className = 'feature-container'>
            {features.map((feature, index) => (
                <div key = {index} className = "feature-item">
                    <img src = {feature.img} alt = {feature.title} />
                    <h6>{feature.title}</h6>
                </div>
            ))}
        </div>
    );
}

export default Feature;