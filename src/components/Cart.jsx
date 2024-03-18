import { Link } from "react-router-dom";

function Cart(){
    return ( 
        <>
        <Link to={'/'}><button className="homeButton">Home</button></Link>
        </>
    )
}


export default Cart;