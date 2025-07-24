import React from 'react'
import './CategorySection.css';
import data from './data.jsx';
export default function CategorySection() {
  return (
    <div>
      {/* <!-- categories --> */}
      <section className="categories-section">
        <div className="categoriesList">
          <h3>Browse By Categories:</h3>
          <div className="list-items">
            {data.map(({ id, name, image }) => (
              <div className="items" key={id}>
                <div className="list-item">
                  <img src={image} alt={name} />
                </div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
