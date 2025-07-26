import React from 'react'
import './MainShop.css'
export default function MainShop() {
  return (
    <div>
       <div className="main-shop-container" style={{ display: 'flex', padding: '20px' }}>
      {/* Sidebar */}
      <div className="sidebar-section" style={{ width: '25%' }}>
        <Sidebar />
      </div>

      {/* Product Grid */}
      <div className="product-section" style={{ width: '75%' }}>
        <div className="shop-top-bar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>Default Sorting</div>
          <div>Showing 1–12 of {products.length} results</div>
        </div>

        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination" style={{ marginTop: '30px', textAlign: 'center' }}>
          <button disabled style={{ marginRight: '10px' }}>1</button>
          <button style={{ marginRight: '10px' }}>2</button>
          <button>{'>'}</button>
        </div>
      </div>
    </div>
    </div>
  )
}
 