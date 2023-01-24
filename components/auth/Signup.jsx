import React from "react";
import Login from "./Login";

export default function Signup({ visible, onClose}) {
  if(!visible) return null;

  
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-[100]">
            <div className="w-full p-8 m-auto rounded-md shadow-md bg-slate-200 lg:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-black">
                   SignUp
                </h1>
                <div className="flex justify-end">
                <button className="text-3xl cursor-pointer alert-del" onClick={onClose}>&times;</button>
                </div>
    
                <form className="mt-3">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-lg font-semibold text-gray-800"
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
                            className="block text-lg font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-lg font-semibold text-gray-800"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="number"
                            className="block text-lg font-semibold text-gray-800"
                        >
                            Phone
                        </label>
                        <input
                            type="number"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="flex justify-center">
                        <button className="m-2 btn btn-btnclr btn-xs md:btn">
                            Register
                        </button>
                        <button className="m-2 btn btn-btnclr btn-xs md:btn">
                            Signup with Google
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-sm text-center text-gray-700 font-lmight">
                    {" "}
                    Already have an account?{" "}
                    <a href="#"className="font-medium hover:underline" onClick={onClose}>
                        Login
                    </a>
                </p>
                
            </div>
            
        </div>
        </>
  );
}
