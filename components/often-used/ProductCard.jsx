import React from "react";

const ProductCard = () => {
  return (
    <div className="bg-gray-100 bg-pink-100 shadow-xl card w-96">
      <figure>
        <img src="/adidasbrand.png" alt="Shoes" layout="fill" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
