import Link from "next/link";
import React from "react";
import ProductCarousel from "../components/product-page/ProductCarousel";
import ProductPageDetail from "../components/product-page/ProductPageDetail";
import pp from "../styles/productpage.module.css";

function ProductPage() {
  return (
    <div className={pp.mainFrame}>
      <div className="p-5 text-2xl font-semibold text-gray-500">
      <Link href="#">
        <a className="goBackLink">Go Back</a>
      </Link>
      </div>
      <div className="flex flex-wrap justify-between">
        <ProductCarousel />
        <ProductPageDetail />
      </div>
    </div>
  );
}

export default ProductPage;
