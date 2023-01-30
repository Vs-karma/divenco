import Image from 'next/image'
import React from 'react'
import hm from '../../styles/Home.module.css'

function ProductCard1() {
    return (
        <div className=' bg-gray-100  card w-[100%]'>
        <div className={hm.brand}>
            <div className={hm.brand_top}>
                <p>60% ON</p>
                <i className="fa-solid fa-heart brand_like"></i>
            </div>
            <div className="relative brand_center">
                <div className={hm.brand_img}>
                    <Image src='/brandnikeshoe.png' layout='fill' alt='shoe'/>
                </div>
            </div>
            <div className={hm.brand_bottom}>
                <div className="brand_description">
                    <p>Nike Shoes</p>
                    <p>Casual Wear Shoes</p>
                </div>
                <div>
                    ₹ 1,299
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductCard1