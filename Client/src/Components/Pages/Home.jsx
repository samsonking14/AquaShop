import React from 'react'
import Header from '../component/Header/Header';
import Hero from '../component/Home/Hero/Hero';
import PromiseDelivery from '../component/Home/PromiseDelivery/PromiseDelivery';
import CategorySection from '../component/Home/CategorySection/CategorySection';
import BannerSection from '../component/Home/BannerSection/BannerSection';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PromiseDelivery />
      <CategorySection />
      <BannerSection />
    </div>
  )
};
