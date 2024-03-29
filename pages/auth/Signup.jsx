import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import VerifyOTP from "./verify";
import { EmailVerificationUrl,UserRegister } from "../../urls";

export default function Signup({ visible, onClose}) {

  
  const router  = useRouter(); 
  const [error , setError] = useState('')
  const [signup, setSignup] = useState(false)
  useEffect(() => {
    document.title = 'Divenco - Login'; 
  }, [])
  
  const [input , setInput] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword : '',
    phone : '',
    otp:''
  });
  const handleSubmit = async () => {
    setSignup(true)
    console.log('Clicked')
    if(input.password !== input.confirmPassword){
      setError('password and confirm password not matched');
      setTimeout(() => {
        setError('')
      }, 2000); 
      return ; 
    }
    if(!input.email || !input.phone || !input.password){
      setError('All Fields are required');
      setTimeout(() => {
        setError('')
      }, 2000); 
      return ; 
    }
    let {confirmPassword , ...others } = input ; 
    console.log(input)
    const res = await fetch(UserRegister , {
      method:'POST',
        headers :{
          'content-Type' : 'application/json'
        },
        body : JSON.stringify({name:input.name,email:input.email,password:input.confirmPassword,phone:input.phone})
      })

      // let {resp} = await axios.post(UserLogin , input)
      const data = await res.json(); 
      console.log(data); 
      if(data.success){
          let authToken = data.authToken; 
          localStorage.setItem('authToken',authToken);
        }
      else{
        setError(data.msg);
        setTimeout(() => {
          setError('')
        }, 2000); 
      }
  }

  const handleSubmitVerify=async()=>{
    // setOtp(parseInt(otp))
    console.log(input.otp)
    console.log(input.email);
    console.log(input.password);
    let result = await fetch(EmailVerificationUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:input.email, password:input.password, otp:input.otp})
    })
    let data = await result.json();
    console.log(data);
}

  const handleChange = (e) =>{
    setInput({...input , [e.target.name]:e.target.value}) 
  }
  
  if(!visible) return null;
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-[100]">
            <div className="w-full p-8 m-5 rounded-md shadow-md bg-slate-200 lg:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-black">
                   SignUp
                </h1>
                <div className="flex justify-end">
                <button className="text-3xl cursor-pointer alert-del" onClick={onClose}>&times;</button>
                </div>
    
                <form className="mt-3">
                    <div className="mb-2">
                        <label
                            htmlFor="text"
                            className="block text-lg font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => handleChange(e)}
                            value={input.name}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-lg font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => handleChange(e)}
                            value={input.email}
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
                            name="password"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => handleChange(e)}
                            value={input.password}
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
                            name="confirmPassword"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => handleChange(e)}
                            value={input.confirmPassword}
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
                            type="text"
                            name="phone"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => handleChange(e)}
                            value={input.phone}
                        />
                    </div>
                    {/* OTP */}
                    
                    { signup?
                    <>
                      <div className="mb-2">
                        <label
                            htmlFor="number"
                            className="block text-lg font-semibold text-gray-800"
                        >
                            OTP
                        </label>
                        <input
                            type="text"
                            name="otp"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => handleChange(e)}
                            value={input.otp}
                        />
                      </div>
                        <div className="flex justify-center">
                          <button className="m-2 btn btn-btnclr btn-xs md:btn" onClick={handleSubmitVerify}>
                              Verify
                          </button>
                        </div>
                      </>
                    :
                    <div className="flex justify-center">
                        <button className="m-2 btn btn-btnclr btn-xs md:btn" onClick={handleSubmit}>
                            Register
                        </button>
                        <button className="m-2 btn btn-btnclr btn-xs md:btn">
                            Signup with Google
                        </button>
                    </div>
                }
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

