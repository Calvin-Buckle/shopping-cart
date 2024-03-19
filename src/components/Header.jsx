import { Link } from "react-router-dom";
import Store from "../Store";
import Cart from "../Cart";



function Header(){
    return (
        <>
<div id="heading">
    <div id="headingsContainer">
<div id="logo">LOGO</div>
<div id="header">Fake Store API PROJECTs</div>
</div>
<div id="buttonContainer">
<Link to={'/'}><button id="homeButton">Home</button></Link>
<Link to={'/store'}><button id="storeButton" >Store</button></Link>
<Link to={'/cart'}><button id="cartButton">Cart</button></Link>
</div>
</div>

        </>
    )
}


export default Header;