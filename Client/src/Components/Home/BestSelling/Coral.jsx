import React, { useRef, useEffect } from 'react'
import './Coral.css'
import CoralData from './CoralData.jsx'
import StarRate from "../Products/stars.jsx";
import { useCart } from "../Products/AddToCart.jsx";
export default function Coral() {

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
    const infiniteCoralData = [...CoralData, ...CoralData, ...CoralData];

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
            <section className="CoralSection">
                <div className="CoralHead">
                    <h3>Best selling For Coral Reefs:</h3>
                </div>
                <div className="CoralScrollContainer">
                    <button className="scroll-btn left" onClick={() => scroll(-300)}>
                        ❮
                    </button>
                    <div className="Coralcollection" ref={scrollRef}>
                        {infiniteCoralData.map((item, index) => (
                            <div className="CoralescollectCard" key={index}>
                                <div className="CoralImgContain">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="CoralContent">
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
