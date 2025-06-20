import HeroSection from '../components/home/HeroSection';
import Feature from '../components/home/Feature';
import Product1 from '../components/home/Product1';
import Banner1 from '../components/home/Banner1';
import Product2 from '../components/home/Product2';
import SmBanner1 from '../components/home/SmBanner1';
import SmBanner2 from '../components/home/SmBanner2';
import Banner2 from '../components/home/Banner2';

function Home(){
    return(
        <>
            <HeroSection />
            <Feature />
            <Product1 />
            <Banner1 />
            <Product2 />
            <SmBanner1 />
            <SmBanner2 />
            <Banner2 />
        </>
    )
}

export default Home;