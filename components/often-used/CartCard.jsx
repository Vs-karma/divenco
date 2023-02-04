import Link from "next/link";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const   CartCard = () => {
  const [heart, setHeart] = useState(true);
  return (
    <div className="grid w-full grid-cols-2 m-3 transition duration-200 bg-gray-100 hover:shadow-xl card">
      <div>
      <figure>
        <img src="/adidasbrand.png" alt="shoe" />
      </figure>
      </div>
      <div className="pt-3 m-3">
        <h1 className="m-2 text-sm card-title md:text-xl">Nike Shoes</h1>
        <p className="m-2 text-sm md:text-lg">Casual Wear Shoes</p>
        <h1 className="m-2 text-sm card-title md:text-xl">Size: 9UK</h1>
        <p className="m-2 text-sm md:text-lg">You Bought One of the Best Shoes</p>
        <div className="absolute text-sm md:text-xl bottom-4 right-7">₹1299</div>
      </div>
    </div>
    
  );
};

export default CartCard;
