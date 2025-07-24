import React from 'react'
import './AdvertsementHunt.css'
import bag3 from '../../../assets/fish/hunt/bag2.png'
export default function AdvertsementHunt() {
  return (
    <div>
      <section className='AdvertsementHuntSection'>
                    <div className="advertiseHunt">
                      <div className="left">
                        <div className="contentadvertiseHunt1">
                          <span>Fast Delivery</span>
                          <h1>Find Everything You Need for Fish</h1>
                        </div>
                        <div className="contentadvertiseHunt2">
                          <p>Lorem lipsm sdfvjbsvjbsfojvbsdofvofsvoefbv</p>
                          <button>Show Now</button>
                        </div>
                      </div>
                      <div className="right">
                        <img src={bag3} alt="" />
                      </div>
                    </div>
                  </section>
    </div>
  )
}
