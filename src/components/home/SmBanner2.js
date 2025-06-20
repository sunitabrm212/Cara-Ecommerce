import b3 from '../../assets/img/banner/b7.jpg';
import b4 from '../../assets/img/banner/b4.jpg';
import b5 from '../../assets/img/banner/b18.jpg';

const banners = [
    {img: b3, heading: "SEASONAL SALE", subheading: "Winter Collection - 50% OFF"},
    {img: b4, heading: "NEW FOOTWEAR COLLECTION", subheading: "Spring / Summer 2022"},
    {img: b5, heading: "T-SHIRTS", subheading: "New Trendy Prints"},
]

function SmBanner2(){
    return(
        <div className = "sm-banner2">
            {banners.map((banner) => (
                <div className = "sm-banner2-item" style = {{backgroundImage : `url(${banner.img})`}}>
                    <h2>{banner.heading}</h2>
                    <h3>{banner.subheading}</h3>
                </div>
            ))}
         
        </div>
    )
}

export default SmBanner2;