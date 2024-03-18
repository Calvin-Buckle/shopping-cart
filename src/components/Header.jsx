import { Link } from "react-router-dom";
import Store from "../Store";
import Cart from "../Cart";



function Header(){
    return (
        <>
<div id="heading">
<div id="logo"></div>
<div id="header">Fake Store API PROJECTs</div>
<Link to={'/'}><button id="homeButton">Home</button></Link>
<Link to={'/store'}><button id="storeButton" >Store</button></Link>
<Link to={'/cart'}><button id="cartButton">Cart</button></Link>
</div>

        </>
    )
}


export default Header;