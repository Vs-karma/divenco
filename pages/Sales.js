import React from "react";
import ProductCard from "../components/often-used/ProductCard";
function Sales() {
    // sales page work
    return (
        <div className="grid place-content-center">
            <div className="flex items-center justify-between m-3 xl:max-w-screen-xl">
                <div className="text-xl font-bold">Divenco Shoes</div>
                <div className="flex gap-4 itesm-center">
                    {/* toggle for filter */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="m-1 btn-sm btn">Sort by</label>
                        <ul tabIndex={0} className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52">
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <span className="label-text">High to Low</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <span className="label-text">Low to High</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                </label>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid w-full place-content-center">
                <div className="grid grid-cols-2 gap-4 m-3 justify-items-center xl:grid-cols-3 xl:max-w-screen-xl lg:max-w-screen-lg place-content-center">
                    {[...Array(30)].map(i => <ProductCard key={i} />)}
                </div>
            </div>
        </div>
    );
}

export default Sales;
