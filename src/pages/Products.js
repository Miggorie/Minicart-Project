import React, { useState, useEffect } from "react";
import ProductCardItem from "../components/ProductCardItem";
import "../styles/index.css";

function Products(props) {
  const { addCart } = props;
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    //fetching data from api
    try {
      const response = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      const data = await response.json();

      //set useState with data
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <div className="row mt-5 productContainer">
        {/*Map through the products from ProductCardItem and render on page*/}
        {products.map((product) => (
          <div className="col-md-4 d-flex justify-content-around mt-5">
            <ProductCardItem
              key={product.id}
              product={product}
              addCart={addCart}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
