import React, { useState } from "react";
import Forget from "./Forget";
import Reset from "./Reset";

export default function VerifyOTP({ visible, onClose, email, password}) {
    const [showMyReset, setShowMyReset] = useState(false);
    const handleOnCloseReset = () => setShowMyReset(false);
    if(!visible) return null;
    const [data, setData] = useState({
        email:email,
        password:password,
        otp: 0,
    })
    const handleChange = (e) =>{
        setInput({...input , [e.target.name]:e.target.value}) 
    }
  
    
    return (
      <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-[100]">
              <div className="w-full p-8 m-5 rounded-md shadow-md bg-slate-200 lg:max-w-xl">
                  <h1 className="text-3xl font-bold text-center text-black">
                     Verify OTP
                  </h1>
                  <div className="flex justify-end">
                  <button className="text-3xl cursor-pointer alert-del" onClick={onClose}>&times;</button>
                  </div>
      
                  <form className="mt-3">
                      
                      
                     
                      <div className="mb-2">
                          <label
                              htmlFor="number"
                              className="block text-lg font-semibold text-gray-800"
                          >
                              Phone
                          </label>
                          <input
                              type="number" name="otp" value={input.otp} onChange={e => handleChange(e)}
                              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                      </div>
                      
                      <div className="flex justify-center">
                          <button className="m-2 btn btn-btnclr btn-xs md:btn" onClick={() => setShowMyReset(true)}>
                              Confirm
                          </button>
                        
                      </div>
                  </form>
  
                  
              </div>
              
          </div>
          <Reset onClose={handleOnCloseReset} visible={showMyReset}/>
          </>
    );
  }
  
