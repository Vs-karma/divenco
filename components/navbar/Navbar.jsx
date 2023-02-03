import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import Login from "../../pages/auth/Login";

export default function Navbar() {
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  return (
    <>
    <div className="z-10 flex justify-between p-2 bg-white shadow-md md:w-full">
      <div className="">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
          className="w-24 h-auto"
          />
      </div>
      <div className="md:text-3xl text-xl md:w-[100%] md:justify-center md:flex md:gap-24 font-bold items-center hidden pl-2">
        <Link href="/">Home</Link>
        <Link href="/BrandPage">Brand</Link>
        <Link href="/Category">Category</Link>
        <Link href="/Sales">Sales</Link>
      </div>
      <div className="flex items-center gap-3">
        <div className="cursor-pointer">
        <Link href="/CartPage"><AiOutlineShoppingCart size={30} /></Link> 
        </div>
        <div className="cursor-pointer">
          <AiOutlineHeart size={30} />
        </div>
        <div className="cursor-pointer">
          <RxAvatar size={30} onClick={() => setShowMyModal(true)} />
        </div>
      </div> 
    </div>
    <Login onClose={handleOnClose} visible={showMyModal}/> 
    </>
  );
}

