import React, { useState } from 'react';
import Header from '../Components/header/Header.jsx'
import Hero from '../Components/Home/Hero/Hero';
import PromiseDelivery from '../Components/Home/PromiseDelivery/PromiseDelivery';
import CategorySection from '../Components/Home/CategorySection/CategorySection';
import BannerSection from '../Components/Home/BannerSection/BannerSection';
import Product from '../Components/Home/Products/Products';
import { CartProvider } from '../Components/Home/Products/AddToCart';
import AdvertsementFish from '../Components/Home/Advertsement/AdvertsementFish';
import Fish from '../Components/Home/BestSelling/Fish.jsx';
import Hunt from '../Components/Home/BestSelling/Hunt.jsx';
import Tank from '../Components/Home/BestSelling/Tank.jsx';
import Food from '../Components/Home/BestSelling/Food.jsx';
import Coral from '../Components/Home/BestSelling/Coral.jsx';
import AdvertsementTank from '../Components/Home/Advertsement/AdvertsementTank.jsx';
import AdvertsementHunt from '../Components/Home/Advertsement/AdvertsementHunt.jsx';
import AdvertsementFood from '../Components/Home/Advertsement/AdvertsementFood.jsx';
import AdvertsementCoral from '../Components/Home/Advertsement/AdvertsementCoral.jsx';
import Brands from '../Components/Home/Advertsement/Brands.jsx';
import Footer from '../Components/Footer/Footer.jsx'


export default function Home() {
  const [query, setQuery] = useState(''); 

  return (
    <CartProvider>
      <div>
        <Header query={query} setQuery={setQuery} />
        <Hero />
        <PromiseDelivery />
        <CategorySection />
        <BannerSection />
        <Product />
        <AdvertsementFish />
        <Fish />
        <AdvertsementHunt />
        <Hunt />
        <AdvertsementTank />
        <Tank />
        <AdvertsementFood />
        <Food />
        <AdvertsementCoral />
        <Coral />
        <Brands />
        <Footer />
      </div>
    </CartProvider>
  );
}
