import Image from 'next/image'
import React from 'react'
import pc from '../../styles/productpage.module.css'
function productCarousel() {
  return (
    <div className='container'>
        <div className={pc.product_carousel}>
            <div className={pc.product_main_img}>
                <Image src='/adidasbrand.png' layout='fill'  alt='brand'/>
            </div>
        </div>
        <div className={pc.product_img_option}>
            <div className={pc.pruduct_list_img}>
                <Image src='/adidasbrand.png' layout='fill' alt='brand'/>
            </div>
            <div className={pc.pruduct_list_img}>
                <Image src='/adidasbrand.png' layout='fill' alt='brand'/>
            </div>
            <div className={pc.pruduct_list_img}>
                <Image src='/adidasbrand.png' layout='fill' alt='brand'/>
            </div>
        </div>
    </div>
  )
}

export default productCarousel