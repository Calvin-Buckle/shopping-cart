
import Header from "./components/Header";
import { CartArray } from "./components/CartItem";


function Cart() {




    return (
      <>
        <Header />
        <div id="cartContainer" >
          <div id="cartHeader">Your shopping cart</div>
       
            <CartArray />
        
        </div>
      </>
    );
  }
  
  export default Cart;