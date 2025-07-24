import React from 'react'
import './AdvertsementCoral.css'
import cf5 from '../../../assets/fish/fishbg/coral reef 5.webp'

export default function AdvertsementCoral() {
  return (
    <div>
      <section className='AdvertsementCoralSection'>
                                <div className="advertiseCoral">
                                  <div className="left">
                                    <div className="contentadvertiseCoral1">
                                      <span>Fast Delivery</span>
                                      <h1>Find Everything You Need for Fish</h1>
                                    </div>
                                    <div className="contentadvertiseCoral2">
                                      <p>Lorem lipsm sdfvjbsvjbsfojvbsdofvofsvoefbv</p>
                                      <button>Show Now</button>
                                    </div>
                                  </div>
                                  <div className="right">
                                    <img src={cf5} alt="" />
                                  </div>
                                </div>
                              </section>
    </div>
  )
}
