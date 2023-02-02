import React from "react";
import CartCard from "../often-used/CartCard";

function AddToCart() {
  
  return (
      
    <div className="justify-center pl-4" >
              
                <div className='flex-col m-5 overflow-y-auto scrollbar-hide md:h-full gap-y-4'>             
                    <CartCard />
                    <CartCard />
                </div>
                
            </div>
  );
}

export default AddToCart;
