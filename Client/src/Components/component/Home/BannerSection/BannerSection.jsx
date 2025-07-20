import React from "react";
import "./BannerSection.css";

export default function BannerSection() {
  return (
    <div>
      {/* banner-section */}

      <section className="BannerCollectionSection">
        <div className="collection-div">
          <h3>Offers On Pet:</h3>
          <div className="collection-list-items">
            <div className="collection-list">
              <div className="collect-items1">
                <div className="right-item1">
                  <span>free shipping</span>
                  <h1>
                    30%
                    <br />
                    <span>sale off</span>
                  </h1>
                  <a href="#">Show now</a>
                </div>
                <div className="left-item1"></div>
              </div>
              <div className="collect-items2">
                <div className="right-item2">
                  <span>free shipping</span>
                  <h1>
                    30%
                    <br />
                    <span>sale off</span>
                  </h1>
                  <a href="#">Show now</a>
                </div>
                <div className="left-item3"></div>
              </div>
              <div className="collect-items3">
                <div className="right-item3">
                  <span>free shipping</span>
                  <h1>
                    30%
                    <br />
                    <span>sale off</span>
                  </h1>
                  <a href="#">Show now</a>
                </div>
                <div className="left-item3"></div>
              </div>
              <div className="collect-items4">
                <div className="right-item4">
                  <span>free shipping</span>
                  <h1>
                    30%
                    <br />
                    <span>sale off</span>
                  </h1>
                  <a href="#">Show now</a>
                </div>
                <div className="left-item4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
