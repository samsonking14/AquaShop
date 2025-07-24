import React from 'react'
import './AdvertsementTank.css'
import tank3 from '../../../assets/fish/tank/aqua 45k.png'
export default function AdvertsementTank() {
  return (
    <div>
      <section className='AdvertsementTankSection'>
              <div className="advertiseTank">
                <div className="left">
                  <div className="contentadvertisetank1">
                    <span>Fast Delivery</span>
                    <h1>Find Everything You Need for Fish</h1>
                  </div>
                  <div className="contentadvertiseTank2">
                    <p>Lorem lipsm sdfvjbsvjbsfojvbsdofvofsvoefbv</p>
                    <button>Show Now</button>
                  </div>
                </div>
                <div className="right">
                  <img src={tank3} alt="" />
                </div>
              </div>
            </section>
    </div>
  )
}
