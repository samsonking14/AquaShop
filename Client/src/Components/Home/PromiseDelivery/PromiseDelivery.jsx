import React from 'react'
import './PromiseDelivery.css';
import Goldfish from '../../../assets/fish/goldfish.png'
import Fishtank from '../../../assets/fishtank.png'
import rewardfish from '../../../assets/fish/rewardfish.png'
import Expert from '../../../assets/fish/service-icon-4.png'
import Delivery from '../../../assets/fish/service-icon-1.png'

export default function PromiseDelivery() {
  return (
    <div>
      {/* <!-- Promise Delivery --> */}
    <section className="promise-section">
        {/* <!-- promise delivery content --> */}
        <div className="promise-center">
            <div className="list-1">
                <img src={Goldfish} alt=""/>
                <span>Making Fish Care Easy</span>
            </div>
            <hr/>
            <div className="list-2">
                <img src={Fishtank} alt=""/>
                <span>Free Tank Safe Delivery</span>
            </div>
            <hr/>
            <div className="list-3">
                <img src={rewardfish} alt=""/>
                <span>Earn Splash Rewards</span>
            </div>
            <hr/>
            <div className="list-5">
                <img src={Expert} alt=""/>
                <span>Expert Recommendations</span>
            </div>
            <hr/>
            <div className="list-4">
                <img src={Delivery} alt=""/>
                <span>Home Tank Delivery</span>
            </div>
        </div>
    </section>
    </div>
  )
}
