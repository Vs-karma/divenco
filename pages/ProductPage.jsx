import Link from "next/link";
import React from "react";
import ProductCarousel from "../components/productPage/ProductCarousel";
import ProductPageDetail from "../components/productPage/ProductPageDetail";
import pp from "../styles/productpage.module.css";

function ProductPage() {
  return (
    <div className={pp.mainFrame}>
      <Link href="#">
        <a className="goBackLink">Go Back</a>
      </Link>
      <div className={pp.divideTwo}>
        <ProductCarousel />
        <ProductPageDetail />
      </div>
    </div>
  );
}

export default ProductPage;
