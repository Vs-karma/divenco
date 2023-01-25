import React from "react";
import pp from "../../styles/productpage.module.css";
function ProductPageDetail() {
  const shoeSizes = ["7Uk", "7Uk", "7Uk", "7Uk", "7Uk"];
  return (
      
    <div className={pp.mainDes}>
      <div className={pp.productDetail}>
        <div className="text-3xl font-bold solidTitle">Puma Shoes</div>
        <div className="text-lg">
          Shoes for Youngster
        </div>
        <div className="pt-4 text-lg font-semibold productSize">
          <div className={pp.sizeGuide}>
            <div className={pp.sizeGuideBtn}>Select Size</div>
            <div className={pp.sizeGuideBtn}>Size Guide</div>
          </div>
          <div className={pp.sizeGrid}>
            {shoeSizes.map((shoeSize, i) => {
              return (
                <div className="p-5 text-lg font-bold bg-gray-200 badge badge-outline" key={i}>
                  {shoeSize}
                </div>
              );
            })}
          </div>
        </div>
        <h1 className="text-xl font-semibold text-gray-700 pt-7 desc">Description</h1>
        <p className="pt-2 pb-2 text-base productDescription">
          The Air Jordan 5 Retro delivers heritage style and modern comfort. It
          combines leather and synthetic materials on its upper for durability
          and airflow, while a Max Air unit in the heel offers plush comfort.
        </p>
        <div className="p-6 text-lg text-center bg-gray-100 productAvailability">
          <p>Product is Excluded from site Promotion and Discount</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPageDetail;
