import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import FeaturedProduct from "@/Components/featuredProduct/FeaturedProduct";
import LatestProduct from "@/Components/LastestProduct/LatestProduct";
import ShoperOffer from "@/Components/shopexoffer/ShoperOffer";
import Banner from "@/Components/banner/Banner";
import Trendingproducts from "@/Components/TrendingPorducts/Trendingproducts";
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
    </>
  );
}
