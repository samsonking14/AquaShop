import React, { useState } from 'react';
import Header from '../Components/header/Header.jsx'
import Hero from '../Components/Home/Hero/Hero';
import PromiseDelivery from '../Components/Home/PromiseDelivery/PromiseDelivery';
import CategorySection from '../Components/Home/CategorySection/CategorySection';
import BannerSection from '../Components/Home/BannerSection/BannerSection';
import Product from '../Components/Home/Products/Products';
import { CartProvider } from '../Components/Home/Products/AddToCart';
import Advertsement from '../Components/Home/Advertsement/Advertsement';



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
        <Advertsement />
      </div>
    </CartProvider>
  );
}
