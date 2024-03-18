import Store from "./Store";
import Cart from "./Cart";


function Home(){
    return (
        <>
        <div id="heading">
        <div id="logo"></div>
        <div id="header">Name comes here</div>
        <button id="storeButton"><Store />Store</button>
        <button id="cartButton"><Cart />Cart</button>
        </div>
        <p>Body text.....</p>
        
        </>
    )
}

export default Home;