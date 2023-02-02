import React from "react";
import pp from "../../styles/productpage.module.css";
function Payment() {
  
  return (
    
    <div className="flex justify-center m-8 border-2 border-slate-300">
      <div className="justify-center">
        
        <div className="justify-center">
            
        <button className="w-64 px-4 py-3 m-3 text-2xl font-bold bg-transparent border rounded-full border-slate-700 hover:bg-slate-200">
            Add Address
            </button>
            <button className="w-64 px-4 py-3 m-3 text-2xl font-bold bg-transparent border rounded-full border-slate-700 hover:bg-slate-200">
            Select Address
            </button>
        </div>
        
        
        <h1 className="text-xl font-semibold text-gray-700 pt-7 desc">Description</h1>
        <p className="pt-2 pb-2 text-base ">
          Product 1
        </p>
        <p className="pt-2 pb-2 text-base ">
          Product 2
        </p>
        <p className="pt-2 pb-2 text-base ">
          Tax
        </p>
        <div className="p-6 text-lg text-center bg-gray-100 productAvailability">
          
            <button className="justify-center w-3/5 px-4 py-3 m-3 text-2xl font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
            Pay
            </button>
        </div>
        
       
        
        
        
      </div>
      
    
    </div>
  );
}

export default Payment;
