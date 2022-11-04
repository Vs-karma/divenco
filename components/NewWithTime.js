import Image from 'next/image'
import React from 'react'
import hm from '../styles/Home.module.css'
import ProductCard1 from './ProductCard1'

function NewWithTime() {
    return (
        <>
            <div className="container">
                <h1 className={hm.home_title}>New With Time</h1>
                <div className={hm.brand_list}>
                    <ProductCard1 />
                    <ProductCard1 />
                    <ProductCard1 />
                </div>
            </div>
        </>
    )
}

export default NewWithTime