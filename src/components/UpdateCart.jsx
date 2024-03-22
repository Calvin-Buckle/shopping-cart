let cartArr = [];

function UpdateCart({ product }) {
    cartArr.push(product);
  
  
    return cartArr; 
  }

  export { cartArr };
  export default UpdateCart;