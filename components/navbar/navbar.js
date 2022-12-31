import React from 'react'
import Image from 'next/image'
import nv from '../../styles/navbar.module.css'
import Link from 'next/link'
function Navbar() {
  return (
    // <>
    <div className={nv.navbar}>
      <div className={nv.navbar_left}>
        <button><Image src="/logo.png" layout='fill' alt="logo" /></button>
      </div>
      <div className={nv.navbar_center}>
        <Link href='#'>Home</Link>
        <Link href='Brand_Page'>Brand</Link>
        <Link href='#'>Category</Link>
        <Link href='#'>Sale</Link>
      </div>
      <div className={nv.navbar_right}>
      <i className="fa-sharp fa-solid fa-cart-shopping navbar_icon"></i>
        <i className="fa-solid fa-heart navbar_icon"></i>
        <i className="fa-solid fa-user navbar_icon"></i>
      </div>
    </div>
    // </>
  )
}

export default Navbar
