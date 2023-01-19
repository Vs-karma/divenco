import React from "react";
import ProductCard from "../components/often-used/ProductCard";
function Sales() {
  // sales page work
  return (
    <div className="grid justify-center gap-4 m-3 md:grid-cols-3">
      <div className="flex justify-center">
        <ProductCard />
      </div>
      <div className="flex justify-center">
        <ProductCard />
      </div>
      <div className="flex justify-center">
        <ProductCard />
      </div>
    </div>
  );
}

export default Sales;
