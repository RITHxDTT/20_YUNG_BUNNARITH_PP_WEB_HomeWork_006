export  async function  getAllProduct(){
    const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/products")
    const data = await res.json()
    return data.payload;
}

export default getAllProduct;

export async function getProductById(id) {
  const res = await fetch(
    `https://homework-api.noevchanmakara.site/api/v1/products/${id}`
  );
  const data = await res.json();
  return data.payload;
}

