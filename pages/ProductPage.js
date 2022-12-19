import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ProductCarousel from '../components/productCarousel';
import ProductDetail from '../components/productPageDetail';
import Link from 'next/link';
import pp from '../styles/productpage.module.css'
import Image from 'next/image';
function ProductPage() {
    return (
        <div>
            <div className="container">
                <Link href="#"><a className='goBackLink'> Go Back </a></Link>
                <div className={pp.productCarouselAndDetail}>
                    <div className="carousel">
                        <div className={pp.product_carousel}>
                            <div className={pp.product_main_img}>
                                <Image src='/adidasbrand.png' layout='fill' />
                            </div>
                        </div>
                        <div className={pp.product_img_option}>
                            <div className={pp.pruduct_list_img}>
                                <Image src='/adidasbrand.png' layout='fill' />
                            </div>
                            <div className={pp.pruduct_list_img}>
                                <Image src='/adidasbrand.png' layout='fill' />
                            </div>
                            <div className={pp.pruduct_list_img}>
                                <Image src='/adidasbrand.png' layout='fill' />
                            </div>
                        </div>
                    </div>
                    <div className={pp.productDetail}>
                        <h1>Puma Shoes</h1>
                        <p>Shoes for youngster</p>
                        <div className="productSize">
                            <div className="size">
                                <p>Select Size</p>
                                <p>Size Guide</p>
                            </div>
                            <button className="sizeBtn">6 UK</button>
                            <button className="sizeBtn">7 UK</button>
                            <button className="sizeBtn">8 UK</button>
                            <button className="sizeBtn">9 UK</button>
                            <button className="sizeBtn">10 UK</button>
                            <button className="sizeBtn">11 UK</button>
                            <button className="sizeBtn">12 UK</button>
                        </div>
                        <h1 className="desc">Description</h1>
                        <p className="productDescription">
                            The Air Jordan 5 Retro delivers heritage style and modern comfort. It combines leather and synthetic materials on its upper for durability and airflow, while a Max Air unit in the heel offers plush comfort.
                        </p>
                        <div className="productAvailability">
                            <p>
                                Product is Excluded from site Promotion and Discount
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage