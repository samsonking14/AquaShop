import React from 'react'
import './Advertsement.css';
import Octo from '../../../assets/fish/octo.png';


export default function () {
  return (
    <div>
      <section className='AdvertsementSection'>
        <div className="advertise">
          <div className="left">
            <div className="contentadvertise1">
              <span>Fast Delivery</span>
              <h1>Find Everything You Need for Fish</h1>
            </div>
            <div className="contentadvertise2">
              <p>Lorem lipsm sdfvjbsvjbsfojvbsdofvofsvoefbv</p>
              <button>Show Now</button>
            </div>
          </div>
          <div className="right">
            <img src={Octo} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
