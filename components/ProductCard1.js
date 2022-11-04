import Image from 'next/image'
import React from 'react'
import hm from '../styles/Home.module.css'

function ProductCard1() {
    return (
        <div className={hm.brand}>
            <div className={hm.brand_top}>
                <p>60% ON</p>
                <i class="fa-solid fa-heart brand_like"></i>
            </div>
            <div className="brand_center">
                <div className={hm.brand_img}>
                    <Image src='/brandnikeshoe.png' layout='fill' />
                </div>
            </div>
            <div className={hm.brand_bottom}>
                <div className="brand_description">
                    <p>Nike Shoes</p>
                    <p>Casual Wear Shoes</p>
                </div>
                <div className="brand_price">
                    ₹ 1,299
                </div>
            </div>
        </div>
    )
}

export default ProductCard1