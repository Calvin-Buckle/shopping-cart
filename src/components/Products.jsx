import { useEffect, useState } from "react";
import { json } from "react-router-dom";



function Products(){
  const [dataArr, setDataArr] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => setDataArr(json))
        
    },[])
   
    console.log(dataArr[0])
    return (
        <>
        <div className="productContainer">
        <div className="productImage"></div>
      
        <div className="productName"></div>
        <div className="productPrice"></div>
        <div className="productRating"></div>
        <button className="addToCart">Add to Cart</button>
        </div>
        
       
        </>
    )
}


export default Products;