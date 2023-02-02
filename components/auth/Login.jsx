import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import Forget from "./Forget";
import { useRouter } from 'next/router';
import { UserLogin } from '../../urls';
import Link from "next/link";


export default function Login({ visible, onClose}) {
  
  if(!visible) return null;
  
  
  const router = useRouter();
  const [error, setError] = useState('')
  //forgot and signup
  const [showMySign, setShowMySign] = useState(false);
  const handleOnClose = () => setShowMySign(false);

  const [showMyForget, setShowMyForget] = useState(false);
  const handleOnCloseForget = () => setShowMyForget(false);
  //
  useEffect(() => {
    document.title = 'Metal Station - Login'
  }, [])


  const [input, setInput] = useState({
    email: '',
    password: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.email === '' || input.password === '') {
      setError('Email and Password Required');
      setTimeout(() => {
        setError('')
      }, 2000);
      return;
    }
    const res = await fetch(UserLogin, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    })
    // let {resp} = await axios.post(UserLogin , input)
    const data = await res.json();
    console.log(data);
    if (data.success) {
      let authToken = data.authToken;
      localStorage.setItem('authToken', authToken);
      router.push('/');
    }
    else {
      setError(data.msg);
      setTimeout(() => {
        setError('')
      }, 2000);
    }
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  
  
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-[100]">
            <div className="w-3/5 p-8 m-auto rounded-md shadow-md bg-slate-200 lg:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-black">
                   Login
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
                            type="email" name="email" required onChange={(e)=>handleChange(e)}
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
                            type="password" name='password' required onChange={(e) => handleChange(e)}
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <a
                        href="#"
                        className="text-sm hover:underline"
                        onClick={() => setShowMyForget(true)}
                    >
                        Forget Password?
                    </a>
                    <div className="flex justify-center">
                        <Link href="/"><a>
                          <button type='submit' onClick={(e) => handleSubmit(e)} className="m-2 btn btn-btnclr btn-xs md:btn">
                            Login
                        </button>
                        </a></Link>
                        <button className="m-2 btn btn-btnclr btn-xs md:btn">
                            Login With G
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-sm text-center text-gray-700 font-lmight">
                    {" "}
                    Dont have an account?{" "}
                    <a href="#"className="font-medium hover:underline" onClick={() => setShowMySign(true)}>
                        Signup
                    </a>
                </p>
                
            </div>
            
        </div>
        <Signup onClose={handleOnClose} visible={showMySign}/> 
        <Forget onClose={handleOnCloseForget} visible={showMyForget}/> 
        </>
        
  );
}
