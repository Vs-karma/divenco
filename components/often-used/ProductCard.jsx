/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductCard = () => {
  const [heart, setHeart] = useState(true);
  return (
    <div className="transition duration-200 bg-gray-100 hover:shadow-xl card w-[100%]">
      <div className="absolute badge top-4 left-4">50% off</div>
      <span
        className="absolute cursor-pointer right-4 top-4"
        onClick={() => setHeart(p => !p)}
      >
        {heart ? <AiOutlineHeart size={30} /> : <AiFillHeart size={30} />}
      </span>
      <figure>
        <img src="/adidasbrand.png" alt="shoe" />
      </figure>
      <Link href="/ProductPage">
        <div className="cursor-pointer card-body">
          <div className="flex items-center justify-between">
            <h2 className="text-sm card-title md:text-xl">Jordan dunks</h2>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm md:text-lg">₹1,200</span>
              <span className="text-sm text-gray-500 line-through">₹2,400</span>
            </div>
          </div>
          <div className="hidden text-sm md:text-lg md:flex">
            If a dog chews shoes whose shoes does he choose?
          </div>
          <div className="justify-center md:justify-end card-actions">
            <button className="btn btn-btnclr btn-xs md:btn">Buy Now</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
