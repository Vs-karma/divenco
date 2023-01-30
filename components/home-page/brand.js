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
                <div className='flex-row flex-wrap justify-center grid-cols-3 gap-4 m-5 overflow-y-auto md:overflow-x-auto h-96 md:grid scrollbar-hide md:h-full'> 
                
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                
            </div>
        
    </>
  )
}

export default brand