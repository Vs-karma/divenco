import Link from "next/link";
import React from "react";
import AddToCart from "../components/cartlist/AddToCart";
import Payment from "../components/cartlist/Payment";
import pp from "../styles/productpage.module.css";

function CartPage() {
  return (
    <div>
      <div className="p-4 text-2xl font-semibold text-gray-500">
        <Link href="/Sales">
          <a className="goBackLink">Go Back</a>
        </Link>
      </div>
      <div className="grid md:grid-cols-2">
        <AddToCart/>
        <Payment/>
      </div>
    </div>
  );
}

export default CartPage;
