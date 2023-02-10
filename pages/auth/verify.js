import React, { useEffect, useState } from 'react'
import { EmailVerificationUrl } from '../../urls'

function verify() {
    const [input, setInput] = useState({
        email:"",
        otp:"",
        password:"",
    })
    // useEffect(() => {
    //   console.log(email)
    //   console.log(password)
    // }, [])
    
    // const [otp, setOtp] = useState('')
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    const handleSubmit=async()=>{
        // setOtp(parseInt(otp))
        console.log(input.otp)
        console.log(input.email);
        console.log(input.password);
        let result = await fetch(EmailVerificationUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        })
        let data = await result.json();
        console.log(data);
    }
  return (
    <>
        <div>
            <label>Email</label>
            <input name="email" value={input.email} onChange={(e) => handleChange(e)} type="text" placeholder='email'></input>
        </div>
        <div>
            <label>Password</label>
            <input name="password" value={input.password} onChange={(e) => handleChange(e)} type="text" placeholder='password'></input>
        </div>
        <div>
            <label>OTP</label>
            <input name="otp" value={input.otp} onChange={(e) => handleChange(e)} type="number" placeholder='enterotp'></input>
        </div>
            <button onClick={handleSubmit}>verify</button>
    </>
  )
}

export default verify
