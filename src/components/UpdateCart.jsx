// UpdateCart.js
import React from "react";

let cartArr = [];

function UpdateCart({ product }) {
  cartArr.push(product);

  console.log("Cart:", cartArr);



  return null; 
}

export default UpdateCart;
