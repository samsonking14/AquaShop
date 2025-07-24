import React from 'react'
import './Brands.css'
import brd from '../../../assets/fish/brand1.png'
import brd2 from '../../../assets/fish/brand2.png'
import brd3 from '../../../assets/fish/brand3.png'
import brd4 from '../../../assets/fish/brand4.png'
import brd5 from '../../../assets/fish/brand5.png'
export default function Brands() {
  return (
    <div>
      <section className='BrandsSection'>
            <div className="BrandsCoolection">
                <h3>Shop By Brands:</h3>
                <div className="BrandsListCollection">
                    <div className="BrandsList">
                        <img src={brd} alt="" />
                        <img src={brd2} alt="" />
                        <img src={brd3} alt="" />
                        <img src={brd4} alt="" />
                        <img src={brd5} alt="" />
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}
