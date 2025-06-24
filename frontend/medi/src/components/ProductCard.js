import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image_url} alt={data.name} className="product-img" />
      <h3>{data.name}</h3>
      <p className="brand">By {data.brand}</p>
      <p className="price">₹{data.price}</p>
      <p className="discount">15% Off</p>
      <p className="rating">⭐ 4.0</p>
      <button className="btn">+ Add</button>
    </div>
  );
};

export default ProductCard;
