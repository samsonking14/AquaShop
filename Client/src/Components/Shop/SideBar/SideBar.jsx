import React from 'react'
import './SideBar.css'
export default function SideBar() {
  return (
    <div>
       <aside className="shop-sidebar">
      <div className="sidebar-section">
        <h4>Product Categories</h4>
        <ul>
          <li>Fish <span>(8)</span></li>
          <li>Coral Reefs <span>(3)</span></li>
          <li>Hunting Tools <span>(4)</span></li>
          <li>Food <span>(5)</span></li>
          <li>Medicine <span>(4)</span></li>
          <li>Tanks <span>(6)</span></li>
          <li>Decoration <span>(5)</span></li>
          <li>Uncategorized <span>(2)</span></li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h4>Price Range</h4>
        <input type="range" min="10" max="500" />
        <p>Price: ₹10 - ₹500</p>
        <button className="filter-btn">Filter</button>
      </div>

      <div className="sidebar-section">
        <h4>Top Brands</h4>
        <ul>
          <li>AquaGlow <span>(2)</span></li>
          <li>MarineCare <span>(1)</span></li>
          <li>FishMate <span>(1)</span></li>
          <li>OceanTreats <span>(0)</span></li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h4>Best Seller Products</h4>
        <ul className="best-seller-list">
          <li>
            <p>Premium Betta Tank</p>
            <span>₹999</span>
          </li>
          <li>
            <p>Coral Revive Pack</p>
            <span>₹450</span>
          </li>
          <li>
            <p>Fish Food Combo</p>
            <span>₹299</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h4>Filter by Tags</h4>
        <div className="tags">
          <span>Betta</span>
          <span>Marine</span>
          <span>Decor</span>
          <span>Tank</span>
          <span>Food</span>
          <span>Treat</span>
          <span>Medicine</span>
        </div>
      </div>
    </aside>
    </div>
  )
}
