import React, { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";


const Store = () => {
  const [selected, setSelected] = useState('all');

  const handleFilterChange = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Header />
      <div id="storeBody">
        <div id="container">
          <div id="storeHeading">
            <div id="storeGreeting">Our Products</div>
            <div id="storeFilterContainer">

              <select value={selected} onChange={(e) => handleFilterChange(e.target.value)}>
                <option value={'all'}>All</option>
                <option value={`men's clothing`}>Men</option>
                <option value={`women's clothing`}>Women</option>
                <option value={`jewelery`}>Jewelery</option>
                <option value={`electronics`}>Electronics</option>
              </select>
            </div>
          </div>
          <Products selected={selected} />
        </div>
      </div>
    </>
  );
};

export default Store;
