import Link from "next/link";
import React from "react";
import WishCard from "../components/often-used/WishCard";

function Wishlist() {
  
  return (
      
    <div className="justify-center pl-4" >
        
            <div className="grid w-full place-content-center">
                <div className='grid grid-cols-2 gap-4 m-3 justify-items-center xl:grid-cols-3 xl:max-w-screen-xl lg:max-w-screen-lg place-content-center pb-5 pt-5'>             
                    <WishCard />
                    <WishCard />
                    <WishCard />
                </div>
            </div>    
    </div>
  );
}

export default Wishlist;
