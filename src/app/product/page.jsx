import React from "react";
import Productcomponent from "../_component/Productcomponent";
import getAllProduct from "../_Service/productService";
import { Search } from "lucide-react";
export default async function Page() {
  const products = await getAllProduct();

  return (
    <div className="mt-[-75%] flex flex-col gap-3">
      <div className="flex w-full pl-[25px] items-center justify-between">
        <p className="text-[30px] text-[#010151] font-extrabold">
          List of All Product
        </p>
        <div className="mr-[4%] flex  items-center">
          <Search />
          <input type="text" className="border-2 px-4 py-2 rounded-2xl " placeholder="  Search Product" />
        </div>
      </div>
      <div className="flex flex-wrap gap-10   justify-center">
        {products.map((product) => (
          <Productcomponent key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}