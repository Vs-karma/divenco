import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

function Navbar() {
  return (
    <div className="z-10 flex justify-between px-2 py-4 bg-white md:w-full">
      <div className="">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
          className="w-24 h-auto"
        />
      </div>
      <div className="md:text-3xl text-xl md:w-[100%] md:justify-center md:flex md:gap-24 font-bold items-center hidden">
        <Link href="/">Home</Link>
        <Link href="/BrandPage">Brand</Link>
        <Link href="/Category">Category</Link>
        <Link href="/Sales">Sale</Link>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <AiOutlineShoppingCart size={30} />
        </div>
        <div>
          <AiOutlineHeart size={30} />
        </div>
        <div>
          <RxAvatar size={30} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
