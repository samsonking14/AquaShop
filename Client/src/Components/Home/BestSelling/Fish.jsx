import React from 'react'
import './Fish.css'
import FishData from './FishData.jsx'
import StarRate from '../Products/stars.jsx'
import { useCart } from '../Products/AddToCart.jsx'

export default function Fish() {
    const { addToCart } = useCart();

    function formatCount(count) {
        if (count >= 1000) {
            return (count / 1000).toFixed(1).replace(/\.0$/, '') + "k";
        }
        return count;
    }


    return (
        <div>
            <section className='FishSection'>
                <div className="FishHead">
                    <h3>Best selling For Fish:</h3>
                </div>
                <div className="Fishcollection">
                    {FishData.map(({ id, title, price, image, reviewCount, rating }) => (
                        <div className="FishescollectCard" key={id}>
                            <div className="FishImgContain">
                                <img src={image} alt="" />
                            </div>
                            <div className="FishContent">
                                <p>₹ {price}</p>
                                <h4>{title}</h4>
                            </div>
                            <div className="reviewsSystem">
                                <StarRate rating={rating} />
                                <span className="review-count">
                                    ({formatCount(reviewCount || 0)} reviews)
                                </span>
                            </div>
                            <button
                                className="AddToCart"
                                onClick={() => addToCart({ id, title, image, price })}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
