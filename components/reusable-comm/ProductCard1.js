// import Image from 'next/image'
// import React from 'react'
// import hm from '../../styles/Home.module.css'

// function ProductCard1() {
//     return (
//         <div className='container w-full bg-gray-100'>
//         <div className={hm.brand}>
//             <div className={hm.brand_top}>
//                 <p>60% ON</p>
//                 <i className="fa-solid fa-heart brand_like"></i>
//             </div>
//             <div className="relative brand_center">
//                 <div className={hm.brand_img}>
//                     <Image src='/brandnikeshoe.png' layout='fill' alt='shoe'/>
//                 </div>
//             </div>
//             <div className={hm.brand_bottom}>
//                 <div className="brand_description">
//                     <p>Nike Shoes</p>
//                     <p>Casual Wear Shoes</p>
//                 </div>
//                 <div>
//                     ₹ 1,299
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// }

// export default ProductCard1

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";


const ProductCard1 = () => {
  
  return (
    <div className="transition duration-200 bg-gray-100 hover:shadow-xl card w-[100%]">
      <div className="absolute badge top-4 left-4">60% off</div>
      
      <figure>
        <img src="/brandnikeshoe.png" alt="shoe" />
      </figure>
      
        <div className="cursor-pointer card-body">
          <div className="flex items-center justify-between">
            <h2 className="text-lg card-title md:text-xl">Nike Shoes</h2>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm md:text-lg">₹1,299</span>
              
            </div>
          </div>
          <div className="hidden text-sm md:text-lg md:flex">
          Casual Wear Shoes
          </div>
          
        </div>
      
    </div>
  );
};

export default ProductCard1;
