
import Header from "./components/Header";
import { CartArray } from "./components/CartItem";
function Cart(){

    

    return ( 
        <>
        <Header />
        <div>
            <div>Your shopping cart</div>
            <div className="cartCard"><CartArray /></div>
            <div>Array of items here</div>
        </div>
        </>
    )
}


export default Cart;