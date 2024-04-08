import { useEffect, useState } from "react";
import ProductQuantity from "./productQuantity";

function Products({ selected, increaseTotal }) {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setDataArr(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  function ProductCard({ product }) {
    return (
      <div className="productContainer">
        <div className="upperContainer">
          <img className="productImage" src={product.image} alt={product.title} />
        </div>
        <div className="lowerContainer">
          <div className="productName">{product.title}</div>
          <div className="productPrice">Price ${product.price}</div>
          <div className="productRating">Rating {product.rating.rate}</div>
        </div>
        <div className="buttonContainer">
          
          <ProductQuantity product={product} increaseTotal={increaseTotal}/>
        </div>
      </div>
    );
  }

  function ProductArr() {
    return dataArr.map((product, index) => {
      if (selected === null || selected === 'all') {
        return <ProductCard key={index} product={product} />;
      } else if (product.category === selected) {
        return <ProductCard key={index} product={product} />;
      }
      return null;
    });
  }

  return (
    <>
      <ProductArr />
    </>
  );
}

export default Products;
