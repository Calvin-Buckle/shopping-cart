import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import CallFilter from "./components/Filter";

const Store = () => {
  const [selected, setSelected] = useState('all');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <div id="storeBody">
        <div id="container">
          <div id="storeHeading">
            <div id="storeGreeting">Our Products</div>
            <div id="storeFilterContainer">
              <button onClick={() => setIsOpen(true)}>Filter</button>
              <div id="storeFilter">
                <CallFilter isOpen={isOpen} setIsOpen={setIsOpen} selected={selected} setSelected={setSelected} />
              </div>
            </div>
          </div>
          <Products selected={selected} />
        </div>
      </div>
    </>
  );
};

export default Store;