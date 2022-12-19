import React from 'react'
import pd from '../styles/productpage.module.css'
function productPageDetail() {
    return (
        <div>
            <div className="container">
                <div className={pd.productDetail}>
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
    )
}

export default productPageDetail