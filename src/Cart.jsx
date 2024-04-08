

import { CartArray } from "./components/CartItem";


function Cart() {




    return (
      <>
    
        <div id="cartContainer" >
          <div id="cartHeader">Your shopping cart</div>
       
            <CartArray />
        
        </div>
      </>
    );
  }
  
  export default Cart;