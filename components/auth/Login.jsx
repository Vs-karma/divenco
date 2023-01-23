import React, { useState } from "react";
import Signup from "./Signup";

export default function Login({ visible, onClose}) {
  if(!visible) return null;
  const [showMySign, setShowMySign] = useState(false);
  const handleOnClose = () => setShowMySign(false);
  
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-[100]">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Log In
                </h1>
                <div className="flex justify-end">
                <button className="text-3xl cursor-pointer alert-del" onClick={onClose}>&times;</button>
                </div>
    
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="justify-center mt-6">
                        <button className="btn btn-btnclr btn-xs md:btn">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Dont have an account?{" "}
                    <a href="#"className="font-medium text-purple-600 hover:underline" onClick={() => setShowMySign(true)}>
                        Sign up
                    </a>
                </p>
                
            </div>
            
        </div>
        <Signup onClose={handleOnClose} visible={showMySign}/> 
        </>
        
  );
}


// import React from "react";

// const Login = () => {
//   return <div>h</div>;
// };

// export default Login;

// {
//   /* <label className="absolute btn btn-sm btn-circle right-2 top-2">
//           ✕
//         </label>
//         <label>User Name</label>
//         <input
//           type="text"
//           placeholder="Type here"
//           className="w-full max-w-xs input input-bordered"
//         />
//         <label>Password</label>
//         <input
//           type="text"
//           placeholder="Type here"
//           className="w-full max-w-xs input input-bordered"
//         /> */
// }
