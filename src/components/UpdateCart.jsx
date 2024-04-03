let cartArr = [];

function UpdateCart({ product, quantity }) {
  for (let i = 0; i < quantity; i++) {
    cartArr.push(product);
    console.log(quantity);
  }

  return cartArr;
}

export { cartArr };
export default UpdateCart;