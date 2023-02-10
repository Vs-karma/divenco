import React, { useState } from "react";
import { useRouter } from "next/router";
import { EmailVerificationUrl, ResetRequestUrl } from "../../urls";
import Login from "./Login";
import VerifyOTP from "./VerifyOTP";

export default function Forget({ visible, onClose }) {
  if (!visible) return null;
  const router = useRouter();

  const [showMyVerify, setShowMyVerify] = useState(false);
  const handleOnCloseVerify = () => setShowMyVerify(false);

  const [emailI, setEmailI] = useState(true);
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    email: " ",
    password: " ",
    otp: " ",
  });
  const RequestOtp = async () => {
    console.log("clicked");
    setEmailI(false);
    let email = localStorage.getItem("email");

    let result = await fetch(ResetRequestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: input.email }),
    });
    let data = await result.json();
    console.log(data);
    if (data.success) {
      // save the email in the local storage
      localStorage.setItem("email", email);
      // navigate to other page for password reset
    } else {
      setError(data.msg);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  const handleSubmitVerify = async () => {
    // setOtp(parseInt(otp))
    console.log(input.otp);
    console.log(input.email);
    console.log(input.password);
    let result = await fetch(EmailVerificationUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input.email,
        password: input.password,
        otp: input.otp,
      }),
    });
    let data = await result.json();
    if(data.success){
      router.push("/");
    }
    console.log(data);
    // setEmailI(true)
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-[100]">
        <div className="w-full p-8 m-5 rounded-md shadow-md bg-slate-200 lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-black">
            Forgot Password
          </h1>
          <div className="flex justify-end">
            <button
              className="text-3xl cursor-pointer alert-del"
              onClick={onClose}
            >
              &times;
            </button>
          </div>

          <form className="mt-3">
            {emailI ? (
              <>
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
                    value={input.email}
                    onChange={(e) => handleChange(e)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    className="m-2 btn btn-btnclr btn-xs md:btn"
                    onClick={RequestOtp}
                  >
                    {/* <button className="m-2 btn btn-btnclr btn-xs md:btn" onClick={() => setShowMyVerify(true)}> */}
                    Send OTP
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-2">
                  <label
                    htmlFor="otp"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    OTP
                  </label>
                  <input
                    type="text"
                    name="otp"
                    value={input.otp}
                    onChange={(e) => handleChange(e)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    New Passowrd
                  </label>
                  <input
                    type="text"
                    name="password"
                    value={input.password}
                    onChange={(e) => handleChange(e)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    className="m-2 btn btn-btnclr btn-xs md:btn"
                    onClick={handleSubmitVerify}
                  >
                    {/* <button className="m-2 btn btn-btnclr btn-xs md:btn" onClick={() => setShowMyVerify(true)}> */}
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <VerifyOTP onClose={handleOnCloseVerify} visible={showMyVerify} />
    </>
  );
}
