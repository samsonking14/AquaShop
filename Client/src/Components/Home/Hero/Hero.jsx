import React from 'react'
import './Hero.css';
import FishBg from '../../../assets/fish/fish/Betta Fish.png'
import { Link } from 'react-router-dom'


export default function Hero() {
  return (
    <div>
      {/* hero section */}
      <section className="Hero-section">
        {/* Image placed */}
        <div className="left">
          <img src={FishBg} alt="" />
        </div>
        {/* hero-page content placed */}
        <div className="right">
          <span>Discover Colorful</span>
          <h1>
            <strong> Freshwater<br /> Fish</strong>
            <small>Safe Delivery<br /> Happy Aqua’s</small>
          </h1>
            <Link to='/Shop' className='spanbtn'>Show Now</Link>

        </div>
      </section>
    </div>
  )
}
