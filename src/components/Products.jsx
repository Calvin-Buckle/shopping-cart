import { useEffect, useState } from "react";
import UpdateCart from "./UpdateCart";

function Products({ selected }) {
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
          <button className="addToCart" onClick={() => UpdateCart({ product })}>
            Add to Cart
          </button>
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