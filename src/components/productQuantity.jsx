import React, { useState } from "react";
import UpdateCart from "./UpdateCart";

function ProductQuantity({ product }) {
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
        onClick={setNewTotal} // Corrected onClick handler
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
