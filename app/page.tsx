import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import FeaturedProduct from "@/Components/featuredProduct/FeaturedProduct";
import LatestProduct from "@/Components/LastestProduct/LatestProduct";
import ShoperOffer from "@/Components/shopexoffer/ShoperOffer";
import Banner from "@/Components/banner/Banner";
import Trendingproducts from "@/Components/TrendingPorducts/Trendingproducts";
import Discountitems from "@/Components/DiscountItems/Discountitems";
import Topcatogires from "@/Components/topcategoires/topcatogires";
import Banner2 from "@/Components/banner2/Banner2";
import Blog from "@/Components/Blog/Blog";
import Footer from "@/Components/Footer/Footer";
export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <FeaturedProduct />
    <LatestProduct />
    <ShoperOffer />
    <Banner />
    <Trendingproducts />
    <Discountitems />
    <Topcatogires />
    <Banner2 />
    <Blog />
    <Footer />  
    </>
  );
}
