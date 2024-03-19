import Header from "./components/Header";

const Store = () => {
    return (
        <>
        <Header />
        <div id="storeName">Store</div>
        <button>Filter</button>
        <body>
            <Products />
        </body>
        </>
    )
}


export default Store;