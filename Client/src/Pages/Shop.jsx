import React from 'react'
import Header from '../Components/header/Header'
import TopHeader from '../Components/header/TopHeader'
import BannerAdvertise from '../Components/Shop/Advertisement2/BannerAdvertise'
import SideBar from '../Components/Shop/SideBar/SideBar'
import Footer from '../Components/Footer/Footer'
export default function Shop() {
  return (
    <div>
      <TopHeader />
      <Header />
      <BannerAdvertise />
      <SideBar />
      {/* <Footer /> */}
    </div>
  )
}
