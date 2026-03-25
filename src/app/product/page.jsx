import React from "react";
import Productcomponent from "../_component/Productcomponent";

export default async function Page() {
  const response = await fetch("https://homework-api.noevchanmakara.site/api/v1/products");
  const data = await response.json();
  const productsArray = data.payload || [];

  return (
    <div className="flex flex-wrap gap-10  border-2 ">
      {productsArray.map((product) => (
        <Productcomponent key={product.productId} product={product} />
      ))}
    </div>
  );
}