import React from "react";
import pp from "../../styles/productpage.module.css";
function ProductPageDetail() {
  return (
    <div className={pp.mainDes}>
      <div className={pp.productDetail}>
        <div className="solidTitle">Puma Shoes</div>
        <div>Shoes for youngster</div>
        <div className="productSize">
          <div className={pp.sizeGuide}>
            <div className={pp.sizeGuideBtn}>Select Size</div>
            <div className={pp.sizeGuideBtn}>Size Guide</div>
          </div>
          <div className={pp.sizeGrid}>
            <button className="sizeBtn">6 UK</button>
            <button className="sizeBtn">7 UK</button>
            <button className="sizeBtn">8 UK</button>
            <button className="sizeBtn">9 UK</button>
            <button className="sizeBtn">10 UK</button>
            <button className="sizeBtn">11 UK</button>
            <button className="sizeBtn">12 UK</button>
          </div>
        </div>
        <h1 className="desc">Description</h1>
        <p className="productDescription">
          The Air Jordan 5 Retro delivers heritage style and modern comfort. It
          combines leather and synthetic materials on its upper for durability
          and airflow, while a Max Air unit in the heel offers plush comfort.
        </p>
        <div className="productAvailability">
          <p>Product is Excluded from site Promotion and Discount</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPageDetail;
