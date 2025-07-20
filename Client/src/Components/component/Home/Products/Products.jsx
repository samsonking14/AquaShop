import React, { useState } from "react";
import "./Products.css";
import data from "./data.jsx";
import StarRate from "./stars.jsx";
import { useCart } from "./AddToCart.jsx";

export default function Products() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All Items");
  const categories = ["All Items", "Sales", "Featured", "Best Seller"];

  // 1. Filter by category first
  const categoryFiltered =
    activeCategory === "All Items"
      ? data
      : data.filter((item) => item.category === activeCategory);

  return (
    <div>
      <section className="productsSection">
        <div className="productHead">
          <h3>Trending This week:</h3>
          <div className="side">
            {categories.map((category) => (
              <button
                key={category}
                className={`tab-side ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* Product Cards */}
        <div className="product-list">
          {categoryFiltered.map(
            ({ id, title, image, price, rating, reviewCount }) => (
              <div className="product-card" key={id}>
                <div className="productImg">
                  <img src={image} alt={title} />
                </div>
                <div className="contentProduct">
                  <p>₹{price}</p>
                  <h4>{title}</h4>
                </div>
                <div className="reviewsSystem">
                  <StarRate rating={rating} />
                  <span className="review-count">
                    ({reviewCount || 0} reviews)
                  </span>
                </div>
                <button
                  className="AddToCart"
                  onClick={() => addToCart({ id, title, image, price })}
                >
                  Add to Cart
                </button>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
