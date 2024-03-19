import Header from "./components/Header";
import Products from "./components/Products"

const Store = () => {
    return (
        <>
        <Header />
        <div id="storeName">Store</div>
        <button>Filter</button>
        <div id="container">
            <Products />
        </div>
        </>
    )
}


export default Store;