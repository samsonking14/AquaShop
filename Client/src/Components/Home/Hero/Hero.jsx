import React from 'react'
import './Hero.css';
import FishBg from '../../../assets/fish/fish/Betta Fish.png'

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
             <strong> Freshwater<br/> Fish</strong>
            <small>Safe Delivery<br/> Happy Aqua’s</small>
          </h1>
          <button>Show Now</button>
        </div>
      </section>
    </div>
  )
}
