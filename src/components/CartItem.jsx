

import { cartArr } from './UpdateCart'; 


function CartItem({ product}) {
  return (
    <div className="itemContainer">
      <img src={product.image} alt={product.title} />
      <div>{product.name}</div>
      <div>Quantity {product.quantity}</div>
      <div>Price ({product.price})</div>
      <button>Remove</button>
    </div>
  );
}






export function CartArray() {
  const uniqueProducts = [];

  cartArr.forEach((product) => {
    const existingProduct = uniqueProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      uniqueProducts.push({ ...product, quantity: 1 });
    }
  });


console.log(uniqueProducts)
  return (
    <>
    
      {uniqueProducts.map((product) => (
        
        <CartItem key={product.id} product={product}  />
      ))}
    </>
  );
}
