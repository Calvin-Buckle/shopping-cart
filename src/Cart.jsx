

import { CartArray } from "./components/CartItem";


function Cart({decreaseTotal}) {




    return (
      <>
    
        <div id="cartContainer" >
          <div id="cartHeader">Your shopping cart</div>
       
            <CartArray decreaseTotal={decreaseTotal} />
        
        </div>
      </>
    );
  }
  
  export default Cart;