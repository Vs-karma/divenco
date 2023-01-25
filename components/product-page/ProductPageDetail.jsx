import React from "react";
import pp from "../../styles/productpage.module.css";
function ProductPageDetail() {
  const shoeSizes = ["7Uk", "7Uk", "7Uk", "7Uk", "7Uk"];
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
            {shoeSizes.map((shoeSize, i) => {
              return (
                <div className="badge badge-outline" key={i}>
                  {shoeSize}
                </div>
              );
            })}
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
