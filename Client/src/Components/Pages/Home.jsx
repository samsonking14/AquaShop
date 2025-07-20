import React, { useState } from 'react';
import Header from '../component/Header/Header';
import Hero from '../component/Home/Hero/Hero';
import PromiseDelivery from '../component/Home/PromiseDelivery/PromiseDelivery';
import CategorySection from '../component/Home/CategorySection/CategorySection';
import BannerSection from '../component/Home/BannerSection/BannerSection';
import Product from '../component/Home/Products/Products';
import { CartProvider } from '../component/Home/Products/AddToCart';

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
      </div>
    </CartProvider>
  );
}
