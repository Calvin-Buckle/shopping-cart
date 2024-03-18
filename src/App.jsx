import Store from "./components/Store"
import Cart from "./components/Cart"
import { Link } from "react-router-dom"

function App() {

  return (
    <>
    <div id="heading">
    <div id="logo"></div>
    <div id="header">Name comes here</div>
    <Link to={'store'}><button id="storeButton" >Store</button></Link>
    
    <Link to={'cart'}><button id="cartButton">Cart</button></Link>
    </div>
    <p>Body text.....</p>
    
    </>
)
}


export default App
