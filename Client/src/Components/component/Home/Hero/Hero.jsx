import React from 'react'
import './Hero.css'; 
import FishBg from '../../../../assets/fish/fish/Betta Fish.png'

export default function Hero() {
  return (
    <div>
      {/* hero section */}
    <section className="Hero-section">
        {/* Image placed */}
        <div className="left">
            <img src={FishBg} alt=""/>
        </div>
        {/* hero-page content placed */}
        <div className="right">
            <span>Dive into the World of</span>
            <h1> Colorful freshwater fish
                <span>
                    Safe delivery
                </span>
                <span> Happy Aqua's...</span>
            </h1>
            <button>Show Now</button>
        </div>
    </section>
    </div>
  )
}
