import ProductDetails from "@/app/_component/ProductDetails";
// import { getProductById } from "@/app/_Service/productService";
import { getProductById } from "@/app/_Service/productService";

export default async function Page({ params }) {
    const {id} = await params;
  const product = await getProductById(id);

  return <ProductDetails product={product} />;
}