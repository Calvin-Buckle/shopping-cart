import React, { useEffect, useState } from "react";

function Products() {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setDataArr(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  function ProductCard({ dataArr, i }) { 
    return (
      <div className="productContainer">
        <img src={dataArr[i].image} />
        <div className="productName">{dataArr[i].title}</div>
        <div className="productPrice">{dataArr[i].price}</div>
        <div className="productRating">{dataArr[i].rating.rate}</div>
        <div className="productDescription">{dataArr[i].description}</div>
        <button className="addToCart">Add to Cart</button>
      </div>
    );
  }

  function ProductArr() {
    const productCards = [];
    
    dataArr.forEach((product, index) => {
      productCards.push(<ProductCard key={index} dataArr={dataArr} i={index} />);
    });

    return productCards;
  }

  return (
    <>
      <ProductArr />
    </>
  );
}

export default Products;
