import Link from "next/link";
import React, { useState } from "react";
import {RxCrossCircled} from "react-icons/ai";

const   WishCard = () => {
 
  return (
    <div className="transition duration-200 bg-gray-100 hover:shadow-xl card w-[100%]">
          <div className="flex absolute justify-end top-2 right-2 rounded-full m-2">
            <button className="text-3xl cursor-pointer alert-del ">&times;</button>
    
          </div>     
      <figure>
        <img src="/adidasbrand.png" alt="shoe" />
      </figure>
      <Link href="/ProductPage">
        <div className="cursor-pointer card-body">
          <div className="flex items-center justify-between">
            <h2 className="text-sm card-title md:text-xl">Nike Running Shoes</h2>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm md:text-lg">₹1,200</span>
            </div>
          </div>
          <button className="px-4 py-3 m-3 text-xl font-bold bg-white border rounded-full border-slate-700 hover:bg-slate-200 ">
          Add to Cart
        </button>
        </div>
      </Link>
    </div>
    
  );
};

export default WishCard;
