// components/CompareSection.js
import React from "react";

const CompareSection = ({ products }) => {
  return (
    <section>
      <h2>Compare Medicine</h2>
      <div className="compare-grid">
        {products.map((product, idx) => (
          <div key={idx} className="card">
                  <img src={product.image_url}  className="product-img" />

            <h4>{product.name} {product.strength}</h4>
            <p>By {product.manufacturer}</p>
            <p>Rs. {product.price} <span className="discount">15% Off</span></p>
            <p className="rating">⭐ 4.0</p>
            <p className="comment">"The medicine is good but a bit costly..."</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompareSection;
