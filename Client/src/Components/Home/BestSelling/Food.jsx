import React, { useRef, useEffect } from 'react'
import './Food.css'
import FoodData from './FoodData.jsx'
import StarRate from "../Products/stars.jsx";
import { useCart } from "../Products/AddToCart.jsx";

export default function Food() {

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
  const infiniteFooddata = [...FoodData, ...FoodData, ...FoodData];

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
      <section className="FoodSection">
        <div className="FoodHead">
          <h3>Best selling For Food & Medicine:</h3>
        </div>
        <div className="FoodScrollContainer">
          <button className="scroll-btn left" onClick={() => scroll(-300)}>
            ❮
          </button>
          <div className="Foodcollection" ref={scrollRef}>
            {infiniteFooddata.map((item, index) => (
              <div className="FoodcollectCard" key={index}>
                <div className="FoodImgContain">
                  <img src={item.image} alt="" />
                </div>
                <div className="FoodContent">
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
  )
}
