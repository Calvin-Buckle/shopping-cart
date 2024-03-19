import Header from "./components/Header";
import Products from "./components/Products"

const Store = () => {
    return (
        <>
        <Header />
        <div id="storeName">Store</div>
        <button>Filter</button>
        <div>
            <Products />
        </div>
        </>
    )
}


export default Store;