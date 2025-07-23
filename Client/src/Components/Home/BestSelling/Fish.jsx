import React, { useRef, useEffect } from "react";
import "./Fish.css";
import FishData from "./FishData.jsx";
import StarRate from "../Products/stars.jsx";
import { useCart } from "../Products/AddToCart.jsx";

export default function Fish() {
  const { addToCart } = useCart();
  const scrollRef = useRef();

  // Scroll handler for arrows
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  function formatCount(count) {
    if (count >= 1000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return count;
  }

  // Clone data for infinite scroll
  const infiniteFishData = [...FishData, ...FishData, ...FishData];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 3;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      if (scrollLeft >= scrollWidth * 2) {
        scrollContainer.scrollLeft = scrollLeft - scrollWidth;
      } else if (scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollLeft + scrollWidth;
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section className="FishSection">
        <div className="FishHead">
          <h3>Best selling For Fish:</h3>
        </div>
        <div className="FishScrollContainer">
          <button className="scroll-btn left" onClick={() => scroll(-300)}>
            ❮
          </button>
          <div className="Fishcollection" ref={scrollRef}>
            {infiniteFishData.map((item, index) => (
              <div className="FishescollectCard" key={index}>
                <div className="FishImgContain">
                  <img src={item.image} alt="" />
                </div>
                <div className="FishContent">
                  <p>₹ {item.price}</p>
                  <h4>{item.title}</h4>
                </div>
                <div className="reviewsSystem">
                  <StarRate rating={item.rating} />
                  <span className="review-count">
                    ({formatCount(item.reviewCount || 0)} reviews)
                  </span>
                </div>
                <button
                  className="AddToCart"
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll(300)}>
            ❯
          </button>
        </div>
      </section>
    </div>
  );
}
