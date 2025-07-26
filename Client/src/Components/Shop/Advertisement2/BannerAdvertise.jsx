import React from "react";
import "./BannerAdvertise.css";
export default function BannerAdvertise() {
  return (
    <div>
      <section className="BannerAdvertiseSection">
        <div className="BannerAdvertiseCollections">
          <div className="BannerCardsdouble">
            <div className="banner-card purple">
              <p className="banner-subtitle">Exclusive Betta Fish Deals</p>
              <h2 className="banner-main-text">UP TO 30% OFF</h2>
              <p className="banner-desc">Free Shipping on All Betta Fish</p>
              <p className="banner-cta">Limited Time Offer – Shop Now!</p>
            </div>
            <div className="banner-card blue">
              <p className="banner-subtitle">Healthy Foods for Happy Fish</p>
              <h2 className="banner-main-text">FLAT 20% OFF</h2>
              <p className="banner-desc">Free Shipping on All Orders</p>
              <p className="banner-cta">Order Today & Save!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
