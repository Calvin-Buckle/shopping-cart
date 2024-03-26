import { Link } from "react-router-dom";
import Store from "../Store";
import Cart from "../Cart";



function Header(){
    return (
        <>
<div id="heading">
    <div id="headingsContainer">
<div id="logo">Fake Api Store</div>
<div id="header">API Project</div>

<div id="buttonContainer">
<Link to={'/'}><button className="headerButtons">Home</button></Link>
<Link to={'/store'}><button className="headerButtons" >Store</button></Link>
<Link to={'/cart'}><button className="headerButtons">Cart</button></Link>
</div>
</div>
</div>

        </>
    )
}


export default Header;