import bg1 from '../../assets/img/banner/b17.jpg';
import bg2 from '../../assets/img/banner/b10.jpg';

const offers = [
    {img: bg1, heading: "crazy deals", subheading: "buy 1 get 1 free", description: "The best classic dress is on sale at cara", btn : 'Learn More'},
    {img: bg2, heading: "summer sale", subheading: "upcoming season", description: "Exclusive summer collection deals available now!", btn: 'Collection'},
]

function SmBanner1(){
    return (
        <div className = "sm-banner1">
            {offers.map((offer) => (
                <div className = "sm-banner1-item" style = {{backgroundImage : `url(${offer.img}`}}>
                <h4>{offer.heading}</h4>
                <h2>{offer.subheading}</h2>
                <span>{offer.description}</span>
                <button>{offer.btn}</button>
            </div>
            ))}
        </div>
    );
}

export default SmBanner1;