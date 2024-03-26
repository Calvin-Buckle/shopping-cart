import Header from "./components/Header";
import Products from "./components/Products"
import CallFilter from "./components/Filter";
import { useState } from "react";








const Store = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <Header />
        
        <div id="storeBody">
        <div id="container">
        <div id="storeHeading">
        <div id="storeName">Our Products</div>
        <button onClick={() => setIsOpen(true)}>Filter</button></div>
        <CallFilter isOpen={isOpen} setIsOpen={setIsOpen} />
            <Products />
        </div>
        </div>
        </>
    )
}


export default Store;