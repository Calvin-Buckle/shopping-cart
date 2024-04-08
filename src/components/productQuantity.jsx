import React, { useState } from "react";
import UpdateCart from "./UpdateCart";

function ProductQuantity({ product, increaseTotal }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newValue = parseInt(e.target.value);
    setQuantity(newValue);
  };

  const setNewTotal = () => {
    UpdateCart({ product, quantity });
  };

  return (
    <>
      <button
        className="addToCart"
        onClick={() => {
          setNewTotal();
          increaseTotal(quantity); //this is passed from Main to Store to Products then here
        }}
      >
        Add to Cart
      </button>
      <input
        type="number"
        value={quantity}
        className="productQuantity"
        onChange={handleQuantityChange}
      />
    </>
  );
}

export default ProductQuantity;
