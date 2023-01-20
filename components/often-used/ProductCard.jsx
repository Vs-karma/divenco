import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductCard = () => {
  const [heart, setHeart] = useState(true);
  return (
    <div className="transition duration-200 bg-gray-100 hover:shadow-xl card w-96">
      <div className="absolute badge top-4 left-4">50% off</div>
      <span
        className="absolute cursor-pointer right-4 top-4"
        onClick={() => setHeart(p => !p)}
      >
        {heart ? <AiOutlineHeart size={30} /> : <AiFillHeart size={30} />}
      </span>
      <figure>
        <img src="/adidasbrand.png" alt="Shoes" layout="fill" />
      </figure>
      <div className="cursor-pointer card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">Jordan dunks</h2>
          <div className="flex items-center gap-2">
            <span className="text-lg">₹1,200</span>
            <span className="text-sm text-gray-500 line-through">₹2,400</span>
          </div>
        </div>
        <div>If a dog chews shoes whose shoes does he choose?</div>
        <div className="justify-end card-actions">
          <button className="btn btn-[#0782F4]">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
