import Image from 'next/image'
import React from 'react'
import ProductCard1 from '../components/reusable-comm/ProductCard1'
import cg from '../styles/category.module.css'
function Category() {
  return (
    <div>
      <div className={cg.category_Section}>
        <div className={cg.category}>
          <div className={cg.category_head_img}>
            <Image src='/sneaker2.jpg' layout='fill' alt='diff types of shoes'/>
            <h1 className={cg.category_img_text}>SNEAKER</h1>
          </div>
          <div className={cg.category_head_img}>
            <Image src='/canvas.jpeg' layout='fill' alt='diff types of shoes'/>
            <h1 className={cg.category_img_text}>CANVAS</h1>
          </div>
          <div className={cg.category_head_img}>
            <Image src='/formal.jpg' layout='fill' alt='diff types of shoes'/>
            <h1 className={cg.category_img_text}>FORMAL</h1>
          </div>
          <div className={cg.category_head_img}>
            <Image src='/heels.jpg' layout='fill' alt='diff types of shoes'/>
            <h1 className={cg.category_img_text}>HIGH HEELS</h1>
          </div>
          <div className={cg.category_head_img}>
            <Image src='/slippers.jpg' layout='fill' alt='diff types of shoes'/>
            <h1 className={cg.category_img_text}>SLIPPERS</h1>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="sneaker">
          <h1 className={cg.category_title}>Sneaker</h1>
          <div className={cg.category_list}>
            <ProductCard1 />
            <ProductCard1 />
            <ProductCard1 />
          </div>
        </div>
        <div className="sneaker">
          <h1 className={cg.category_title}>Canvas</h1>
          <div className={cg.category_list}>
            <ProductCard1 />
            <ProductCard1 />
            <ProductCard1 />
          </div>
        </div>
        <div className="sneaker">
          <h1 className={cg.category_title}>High Heels</h1>
          <div className={cg.category_list}>
            <ProductCard1 />
            <ProductCard1 />
            <ProductCard1 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
