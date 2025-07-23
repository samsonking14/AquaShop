import React from "react";
import "./BannerSection.css";
import betaFish from '../../../assets/fish/beta_fish-Banner.png';
import FoodFish from '../../../assets/fish/Foods_Banner.png';
import Decoration from '../../../assets/fish/Decoration_Banner.png';
import FishPole from '../../../assets/fish/Fishpole_Banner.png';





export default function BannerSection() {
  return (
    <div>
      {/* banner-section */}

      <section className="BannerCollectionSection">
        <div className="collection-div">
          <h3>Offers On:</h3>
          <div className="collection-list-items">
            <div className="collection-list">

              <div className="collect-items1">
                <div className="right-item1">
                  <span>free shipping Betta Fish</span>
                  <h1>
                    30%
                    <br />
                    <span>sale off</span>
                  </h1>
                  <a href="#">Show now</a>
                </div>
                <div className="left-item1">
                  <img src={betaFish} alt="" />
                </div>
              </div>
              
              <div className="collect-items2">
                <div className="right-item2">
                  <span>free shipping Foods</span>
                  <h1>
                    20%
                    <br />
                    <span>sale off</span>
                  </h1>
                  <a href="#">Show now</a>
                </div>
                <div className="left-item2">
                  <img src={FoodFish} alt="" />
                </div>
              </div>
              <div className="collect-items3">
                <div className="right-item3">
                  <span>free shipping Decoration</span>
                  <h1>
                    55%
                    <br />
                    <span>Ends Today</span>
                  </h1>
                  <a href="#">Show now</a>
                </div>
                <div className="left-item3">
                  <img src={Decoration} alt="" />
                </div>
              </div>
              <div className="collect-items4">
                <div className="right-item4">
                  <span>free shipping Fishpole</span>
                  <h1>
                    40%
                    <br />
                    <span>sale off</span>
                  </h1>
                  <a href="#">Show now</a>
                </div>
                <div className="left-item4">
                  <img src={FishPole} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
