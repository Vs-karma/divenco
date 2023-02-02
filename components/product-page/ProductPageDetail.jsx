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
                
                <button className="h-10 px-5 text-black transition-colors duration-150 border border-black rounded-lg focus:shadow-outline hover:bg-slate-600 hover:text-white" key={i}>{shoeSize}</button>
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
        
        <div className="flex flex-col justify-center pt-2 m-4 place-content-center">
        
        <button className="items-center px-4 py-3 m-3 text-2xl font-bold text-white bg-blue-500 rounded-full tex5t-white hover:bg-blue-700">
          Buy Now
        </button>
        <button className="px-4 py-3 m-3 text-2xl font-bold bg-transparent border rounded-full border-slate-700 hover:bg-slate-200">
          Add to Wishlist
        </button>
        <button className="px-4 py-3 m-3 text-2xl font-bold bg-transparent border rounded-full border-slate-700 hover:bg-slate-200">
          Add to Cart
        </button>
        </div>
        
        
      </div>
      
    </div>
  );
}

export default ProductPageDetail;
