import React from 'react'
import './Footer.css'
import logo from "../../assets/AQualogo.png";
import Phone from "../../assets/Phone.png";
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Facebook.png";
import X from "../../assets/X.png";
import Email from "../../assets/Envelope.png";
export default function Footer() {
  return (
    <div>

      <footer>
        <div className="footer">

          <div className="first">
            <div className="footerlogo">
              <img src={logo} alt="" />
            </div>
            <div className="content">
              <span>Your Online AquaShop store for freindly service and Trusted AquaShop Products</span>
            </div>
            <div className="contact">
              <div className="content">
                <img src={Phone} alt="" />
                <span>Helpline(24/7)</span>
              </div>

              <div className="number">
                <span>+91 9092264342</span>
              </div>
              <div className="socialLinksIcon">
                <img src={Instagram} alt="" />
                <img src={Facebook} alt="" />
                <img src={X} alt="" />
              </div>
            </div>
          </div>

          <div className="Second">
            <div className="Useful">
              <h3>Useful Links</h3>
              <div className="list">
                <li>New Products</li>
                <li>Best Seller</li>
                <li>Bundles & Save</li>
                <li>Online Gift Card</li>
                <li>Discount</li>
                <li>Store Locator</li>
              </div>
            </div>
            <div className="MyAccount">
              <h3>My Account</h3>
              <div className="list">
                <li>My Prfile</li>
                <li>My Order History</li>
                <li>My Wish List</li>
                <li>order Trackin g</li>
                <li>Shipping Info</li>
                <li>Shopping Cart</li>
              </div>
            </div>
            <div className="Company">
              <h3>Company</h3>
              <div className="list">
                <li>About Us</li>
                <li>careers</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Gift cards</li>
              </div>
            </div>
          </div>

          <div className="third">
            <div className="Newsletter">
              <h3>News Letter</h3>
              <div className="content">
                <span>Subscribed & get 10% Discount. Get E-Mail Updates About our Latest Shop And Special Offers</span>
              </div>
              <div className="box">
                <input type="email" name="" id="" />
                <button>
                  <img src={Email} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="below">
          <div className="copyright">
            <span>copyright © 2025 Aqua Shop. All Rights Reserved</span>
          </div>
          <div className="policy">
            <span>Privacy & Cookie Policy</span>
            <hr />
            <span>Terms of Servioce</span>
          </div>
        </div>
        
      </footer>
    </div>
  )
}
