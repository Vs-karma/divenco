import React from 'react'
import Filter from '../components/sales/Filter'
import sl from '../styles/sales.module.css'
import ProductSale from '../components/sales/productSale'
import Image from 'next/image'
function Sales() {
    return (
        <div className='container'>
            <div className={sl.sales_head}>
                <div className="sales_head_title">
                    <h3>Avenco Shoes</h3>
                </div>
                <div className={sl.sales_filter_btn}>
                    <div className={sl.filter_toggle}>
                        <div classNam="form-check form-switch mx-4">
                            <input className="form-check-input" type="checkbox" role="switch" id="slexSwitchCheckDefault" />
                            <label className="form-check-label font-weight-bold" htmlFor="slexSwitchCheckDefault">Hide Filter</label>
                        </div>
                    </div>
                    <div className={sl.sales_sort_btn}>
                        <button className={sl.sort_btn}> Sort By </button>
                    </div>
                </div>
            </div>
            <div className={sl.sales_container}>
                <div className={sl.filter}>
                    <p className={sl.filter_text_head}>Filter</p>
                    <p className={sl.filter_text}>Size</p>
                    <div className={sl.size}>
                        <button className={sl.size_btn}>8 UK</button>
                        <button className={sl.size_btn}>9 UK</button>
                        <button className={sl.size_btn}>10 UK</button>
                        <button className={sl.size_btn}>11 UK</button>
                    </div>
                    <p className={sl.filter_text}>Brand</p>
                    <div className={sl.brand}>
                        <div className="filter_brand">
                            <input className={sl.brandCheckbox} type="checkbox" name="Nike" id="nike" />
                            <label className={sl.branchCheckboxLabel}>Nike</label>
                        </div>
                        <div className="filter_brand">
                            <input className={sl.brandCheckbox} type="checkbox" name="Puma" id="puma" />
                            <label className={sl.branchCheckboxLabel}>Puma</label>
                        </div>
                        <div className="filter_brand">
                            <input className={sl.brandCheckbox} type="checkbox" name="Reebok" id="reebok" />
                            <label className={sl.branchCheckboxLabel}>Reebok</label>
                        </div>
                        <div className="filter_brand">
                            <input className={sl.brandCheckbox} type="checkbox" name="Adida" id="adida" />
                            <label className={sl.branchCheckboxLabel}>Adida</label>
                        </div>
                        <div className="filter_brand">
                            <input className={sl.brandCheckbox} type="checkbox" name="Campus" id="campus" />
                            <label className={sl.branchCheckboxLabel}>Campus</label>
                        </div>
                    </div>
                    <p className={sl.filter_text}>Price Range</p>
                    <div className="price">
                        <input className={sl.priceInput} type="text" name="minPrice" id="minPrice" placeholder='Price Range' />
                    </div>
                    {/* <p className={sl.filter_text}>Rating</p> */}
                    

                </div>
                <div className={sl.productSale}>
                    <div className={sl.productCard}>
                        <div className={sl.productImage}>
                            <Image src='/adidasbrand.png' layout='fill' alt='brand' />
                        </div>
                        <div className={sl.pruductDetail}>
                            <div className={sl.discountPrice}>
                                <p className={sl.discount}>Discount Available</p>
                                <p className={sl.price}>₹ 1,299</p>
                            </div>
                            <div className={sl.productInfo}>
                                <p className={sl.productDesc}>
                                    Nike Shoes <br /> Casual wear shoes
                                </p>
                                <button className={sl.buyBtn}>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={sl.productCard}>
                        <div className={sl.productImage}>
                            <Image src='/adidasbrand.png' layout='fill' alt='brand'/>
                        </div>
                        <div className={sl.pruductDetail}>
                            <div className={sl.discountPrice}>
                                <p className={sl.discount}>Discount Available</p>
                                <p className={sl.price}>₹ 1,299</p>
                            </div>
                            <div className={sl.productInfo}>
                                <p className={sl.productDesc}>
                                    Nike Shoes <br /> Casual wear shoes
                                </p>
                                <button className={sl.buyBtn}>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={sl.productCard}>
                        <div className={sl.productImage}>
                            <Image src='/adidasbrand.png' layout='fill' alt='brand'/>
                        </div>
                        <div className={sl.pruductDetail}>
                            <div className={sl.discountPrice}>
                                <p className={sl.discount}>Discount Available</p>
                                <p className={sl.price}>₹ 1,299</p>
                            </div>
                            <div className={sl.productInfo}>
                                <p className={sl.productDesc}>
                                    Nike Shoes <br /> Casual wear shoes
                                </p>
                                <button className={sl.buyBtn}>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={sl.productCard}>
                        <div className={sl.productImage}>
                            <Image src='/adidasbrand.png' layout='fill' alt='brand' />
                        </div>
                        <div className={sl.pruductDetail}>
                            <div className={sl.discountPrice}>
                                <p className={sl.discount}>Discount Available</p>
                                <p className={sl.price}>₹ 1,299</p>
                            </div>
                            <div className={sl.productInfo}>
                                <p className={sl.productDesc}>
                                    Nike Shoes <br /> Casual wear shoes
                                </p>
                                <button className={sl.buyBtn}>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales