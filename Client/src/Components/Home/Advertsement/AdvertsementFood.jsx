import React from 'react'
import './AdvertsementFood.css'
import food7 from '../../../assets/fish/food/Foods_Banner.png'
export default function AdvertsementFood() {
  return (
    <div>
      <section className='AdvertsementFoodSection'>
                          <div className="advertiseFood">
                            <div className="left">
                              <div className="contentadvertiseFood1">
                                <span>Fast Delivery</span>
                                <h1>Find Everything You Need for Fish</h1>
                              </div>
                              <div className="contentadvertiseFood2">
                                <p>Lorem lipsm sdfvjbsvjbsfojvbsdofvofsvoefbv</p>
                                <button>Show Now</button>
                              </div>
                            </div>
                            <div className="right">
                              <img src={food7} alt="" />
                            </div>
                          </div>
                        </section>
    </div>
  )
}
