import { useState } from "react";
import Header from "./components/Header";
import ProductQuantity from "./components/productQuantity"


function App() {

  const [total, setTotal] = useState(0)

  return (
    <>
      <Header total={total} />
      <ProductQuantity setTotal={setTotal} />
      <div id="homeParagraph">
        <p>
          Welcome to my store, this store was made as part of the Odin Project curriculum.
          The items sold in this store are not purchasable but you are welcome to have a look around!
        </p>
      </div>
    </>
  );
}

export default App;
