import React, { useState, useEffect } from 'react';
import { cartArr } from './UpdateCart';

function CartItem({ product, decreaseQuantity }) {
  return (
    <div className="itemContainer">
      <img src={product.image} alt={product.title} />
      <div>{product.name}</div>
      <div>Quantity {product.quantity}</div>
      <div>Price ({product.price})</div>
      <button onClick={() => decreaseQuantity(product.id)}>Remove One</button>
    </div>
  );
}

export function CartArray({decreaseTotal}) {
  const [uniqueProducts, setUniqueProducts] = useState([]);

  useEffect(() => {
    const updatedProducts = [];
    cartArr.forEach((product) => {
      const existingProduct = updatedProducts.find((p) => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        updatedProducts.push({ ...product, quantity: 1 });
      }
    });
    setUniqueProducts(updatedProducts);
  }, []);


  const decreaseQuantity = (productId) => {
    const updatedProducts = uniqueProducts.map((product) =>
      product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
    );
    setUniqueProducts(updatedProducts.filter((product) => product.quantity > 0));
    decreaseTotal();
  };

  console.log(uniqueProducts);

  return (
    <>
      {uniqueProducts.map((product) => (
        <CartItem key={product.id} product={product} decreaseQuantity={decreaseQuantity} />
      ))}
    </>
  );
}

