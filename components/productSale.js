import Image from 'next/image'
import React from 'react'
import pc from '../styles/sales.module.css'
function productSale() {
  return (
    <div className={pc.productSale}>
        <div className={pc.productCard}>
            <div className={pc.productImage}>
                <Image src = '/adidasbrand.png' layout='fill'/>
            </div>
            <div className={pc.pruductDetail}>
                <div className={pc.discountPrice}>
                    <p className={pc.discount}>Discount Available</p>
                    <p className={pc.price}>₹ 1,299</p>
                </div>
                <div className={pc.productInfo}>
                    <p className={pc.productDesc}>
                        Nike Shoes <br /> Casual wear shoes
                    </p>
                    <button className={pc.buyBtn}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
        <div className={pc.productCard}>
            <div className={pc.productImage}>
                <Image src = '/adidasbrand.png' layout='fill'/>
            </div>
            <div className={pc.pruductDetail}>
                <div className={pc.discountPrice}>
                    <p className={pc.discount}>Discount Available</p>
                    <p className={pc.price}>₹ 1,299</p>
                </div>
                <div className={pc.productInfo}>
                    <p className={pc.productDesc}>
                        Nike Shoes <br /> Casual wear shoes
                    </p>
                    <button className={pc.buyBtn}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
        <div className={pc.productCard}>
            <div className={pc.productImage}>
                <Image src = '/adidasbrand.png' layout='fill'/>
            </div>
            <div className={pc.pruductDetail}>
                <div className={pc.discountPrice}>
                    <p className={pc.discount}>Discount Available</p>
                    <p className={pc.price}>₹ 1,299</p>
                </div>
                <div className={pc.productInfo}>
                    <p className={pc.productDesc}>
                        Nike Shoes <br /> Casual wear shoes
                    </p>
                    <button className={pc.buyBtn}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
        <div className={pc.productCard}>
            <div className={pc.productImage}>
                <Image src = '/adidasbrand.png' layout='fill'/>
            </div>
            <div className={pc.pruductDetail}>
                <div className={pc.discountPrice}>
                    <p className={pc.discount}>Discount Available</p>
                    <p className={pc.price}>₹ 1,299</p>
                </div>
                <div className={pc.productInfo}>
                    <p className={pc.productDesc}>
                        Nike Shoes <br /> Casual wear shoes
                    </p>
                    <button className={pc.buyBtn}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default productSale