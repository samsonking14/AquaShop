import React from 'react'
import './BannerAdvertise.css'
export default function BannerAdvertise() {
  return (
    <div>
       <section className="BannerAdvertiseSection">
        <div className="BannerAdvertise-div">
          <div className="BannerAdvertise-list-items">
            <div className="BannerAdvertise-list">

              <div className="BannerAdvertise-items1">
                <div className="BannerAdvertise-right-item1">
                  <span>free shipping Betta Fish</span>
                  <h1>
                    30%
                    <br />
                    <span>sale off</span>
                  </h1>
                </div>
                <div className="BannerAdvertise-left-item1">
                  <img src="" alt="" />
                </div>
              </div>
              
              <div className="BannerAdvertise-items2">
                <div className="BannerAdvertise-right-item2">
                  <span>free shipping Foods</span>
                  <h1>
                    20%
                    <br />
                    <span>sale off</span>
                  </h1>
                </div>
                <div className="BannerAdvertise-left-item2">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
