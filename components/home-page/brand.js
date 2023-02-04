import Image from 'next/image'
import React from 'react'
import hm from '../../styles/Home.module.css'
import ProductCard1 from '../reusable-comm/ProductCard1'
import ProductCard from '../often-used/ProductCard'


function brand() {
  return (
    <>
        <div className="w-full" >
              <div className='m-5'>
                <h1 className={hm.home_title}>Brands</h1>
              </div>
                <div className='flex-row grid-cols-3 gap-4 m-5 overflow-y-auto h-96 md:grid scrollbar-hide md:h-full place-content-center'> 
                
                    <ProductCard1 />
                    <ProductCard1 />
                    <ProductCard1 />
                </div>
                
            </div>
        
    </>
  )
}

export default brand